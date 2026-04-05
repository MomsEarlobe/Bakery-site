/**
 * Golden Crust Bakery — Hero Video QA
 * Uses Playwright to visually verify the video hero on desktop and mobile.
 */

const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const SITE_URL = `file://${path.resolve(__dirname, '../index.html').replace(/\\/g, '/')}`;
const SCREENSHOT_DIR = path.resolve(__dirname, '../tests/screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'mobile',  width: 390,  height: 844  },
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox'],
  });

  const results = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });

    // Wait for hero section to be visible
    await page.waitForSelector('.hero', { state: 'visible', timeout: 10000 });

    // Give video a moment to start
    await page.waitForTimeout(1500);

    // Check video element exists and is playing
    const videoState = await page.evaluate(() => {
      const v = document.getElementById('hero-video');
      if (!v) return { found: false };
      return {
        found: true,
        paused: v.paused,
        readyState: v.readyState,
        currentTime: v.currentTime,
        duration: v.duration,
        src: v.currentSrc,
      };
    });

    // Check overlay exists
    const hasOverlay = await page.locator('.hero-overlay').count() > 0;

    // Check hero text is visible
    const headlineVisible = await page.locator('.hero-headline').isVisible();
    const ctaVisible = await page.locator('.hero-ctas').isVisible();

    // Screenshot the full hero
    const screenshotPath = path.join(SCREENSHOT_DIR, `hero-${vp.name}.png`);
    await page.screenshot({
      path: screenshotPath,
      clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 900) },
    });

    const result = {
      viewport: vp.name,
      videoFound: videoState.found,
      videoPlaying: videoState.found && !videoState.paused,
      videoReadyState: videoState.readyState,
      hasOverlay,
      headlineVisible,
      ctaVisible,
      consoleErrors: errors,
      screenshot: `tests/screenshots/hero-${vp.name}.png`,
    };

    results.push(result);
    await context.close();
  }

  await browser.close();

  // Print report
  console.log('\n===== HERO VIDEO QA REPORT =====\n');
  let allPassed = true;
  for (const r of results) {
    const pass = r.videoFound && r.videoPlaying && r.hasOverlay && r.headlineVisible && r.ctaVisible;
    if (!pass) allPassed = false;
    console.log(`[${r.viewport.toUpperCase()}] ${pass ? '✓ PASS' : '✗ FAIL'}`);
    console.log(`  Video found:    ${r.videoFound}`);
    console.log(`  Video playing:  ${r.videoPlaying}`);
    console.log(`  Ready state:    ${r.videoReadyState} (4 = have enough data)`);
    console.log(`  Overlay:        ${r.hasOverlay}`);
    console.log(`  Headline:       ${r.headlineVisible}`);
    console.log(`  CTA buttons:    ${r.ctaVisible}`);
    if (r.consoleErrors.length) {
      console.log(`  ⚠ JS errors:  ${r.consoleErrors.join('; ')}`);
    }
    console.log(`  Screenshot:     ${r.screenshot}`);
    console.log();
  }

  console.log(allPassed ? '✅ ALL CHECKS PASSED' : '❌ SOME CHECKS FAILED');
  process.exit(allPassed ? 0 : 1);
})();
