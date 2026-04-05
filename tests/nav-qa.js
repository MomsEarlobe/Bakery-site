/**
 * Golden Crust Bakery — Nav QA
 */

const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const SITE_URL = `file://${path.resolve(__dirname, '../index.html').replace(/\\/g, '/')}`;
const DIR = path.resolve(__dirname, 'screenshots/nav');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'mobile',  width: 390,  height: 844  },
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox'],
  });

  const report = [];

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    const result = { viewport: vp.name, checks: [], errors };
    const shot = async (name) => page.screenshot({ path: `${DIR}/${vp.name}-${name}.png` });

    // 1. Default nav state
    await shot('1-default');

    const toggle = page.locator('#mobile-menu-toggle');
    const isMobile = await toggle.isVisible();

    if (!isMobile) {
      // Desktop: check nav links are visible
      const navLinks = page.locator('.main-nav .nav-link');
      const count = await navLinks.count();
      result.checks.push({ name: 'desktop nav links visible', pass: count > 0 });
      await page.locator('.main-nav .nav-link').first().hover();
      await page.waitForTimeout(200);
      await shot('2-hover');
      result.checks.push({ name: 'hamburger hidden', pass: !(await toggle.isVisible()) });
    } else {
      // Mobile/tablet

      // 2. Open overlay
      await toggle.click();
      await page.waitForTimeout(700); // wait for GSAP fade-in
      await shot('2-menu-open');

      // Check overlay is covering full screen
      const overlayState = await page.evaluate(() => {
        const el = document.getElementById('mobile-nav-overlay');
        const r = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        const items = [...el.querySelectorAll('.nav-link')];
        return {
          width: r.width, height: r.height,
          opacity: parseFloat(style.opacity),
          hasOpen: el.classList.contains('open'),
          itemsInViewport: items.filter(i => {
            const ir = i.getBoundingClientRect();
            return ir.top >= 0 && ir.bottom <= window.innerHeight && ir.height > 0;
          }).length,
          totalItems: items.length,
        };
      });

      result.checks.push({ name: 'overlay full width', pass: overlayState.width === vp.width });
      result.checks.push({ name: 'overlay full height', pass: overlayState.height === vp.height });
      result.checks.push({ name: 'overlay visible (opacity > 0.9)', pass: overlayState.opacity > 0.9 });
      result.checks.push({ name: 'overlay has .open class', pass: overlayState.hasOpen });
      result.checks.push({ name: `all ${overlayState.totalItems} items in viewport`, pass: overlayState.itemsInViewport === overlayState.totalItems });

      // 3. Click a nav link in the overlay — should close menu
      await page.evaluate(() => {
        document.querySelector('#mobile-nav-overlay .nav-link').click();
      });
      await page.waitForTimeout(500);
      await shot('3-after-link-click');

      const afterLinkClick = await page.evaluate(() => ({
        hasOpen: document.getElementById('mobile-nav-overlay').classList.contains('open'),
        bodyOverflow: document.body.style.overflow,
        opacity: parseFloat(getComputedStyle(document.getElementById('mobile-nav-overlay')).opacity),
      }));
      result.checks.push({ name: 'overlay closes after nav link click', pass: !afterLinkClick.hasOpen });
      result.checks.push({ name: 'body scroll restored after link click', pass: afterLinkClick.bodyOverflow !== 'hidden' });

      // 4. Re-open, close with X button
      await page.evaluate(() => window.scrollTo(0, 0));
      await toggle.click();
      await page.waitForTimeout(700);
      await shot('4-reopen');

      await page.evaluate(() => document.getElementById('nav-close').click());
      await page.waitForTimeout(500);
      await shot('5-after-x-close');

      const afterX = await page.evaluate(() => ({
        hasOpen: document.getElementById('mobile-nav-overlay').classList.contains('open'),
        bodyOverflow: document.body.style.overflow,
      }));
      result.checks.push({ name: 'overlay closes via X button', pass: !afterX.hasOpen });
      result.checks.push({ name: 'body scroll restored after X', pass: afterX.bodyOverflow !== 'hidden' });

      // 5. Hamburger lines animate to X when open, back when closed
      await toggle.click();
      await page.waitForTimeout(400);
      const toggleActiveWhenOpen = await page.evaluate(() =>
        document.getElementById('mobile-menu-toggle').classList.contains('active')
      );
      result.checks.push({ name: 'hamburger shows X when open', pass: toggleActiveWhenOpen });
      await shot('6-hamburger-open');
      await page.evaluate(() => document.getElementById('nav-close').click());
      await page.waitForTimeout(400);
      const toggleInactiveWhenClosed = await page.evaluate(() =>
        !document.getElementById('mobile-menu-toggle').classList.contains('active')
      );
      result.checks.push({ name: 'hamburger returns to lines when closed', pass: toggleInactiveWhenClosed });
    }

    if (errors.length) result.checks.push({ name: 'no JS errors', pass: false, detail: errors.join('; ') });
    report.push(result);
    await ctx.close();
  }

  await browser.close();

  // Print report
  console.log('\n===== NAV QA REPORT =====\n');
  let allPassed = true;
  for (const r of report) {
    const vpPass = r.checks.every(c => c.pass);
    if (!vpPass) allPassed = false;
    console.log(`[${r.viewport.toUpperCase()}] ${vpPass ? '✓ PASS' : '✗ FAIL'}`);
    for (const c of r.checks) {
      console.log(`  ${c.pass ? '✓' : '✗'} ${c.name}${c.detail ? ': ' + c.detail : ''}`);
    }
    console.log();
  }
  console.log(allPassed ? '✅ ALL NAV CHECKS PASSED' : '❌ SOME NAV CHECKS FAILED');
  process.exit(allPassed ? 0 : 1);
})();
