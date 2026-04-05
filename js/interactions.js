/* ============================================
   GOLDEN CRUST BAKERY — Interactions & Animations
   GSAP 3.12 + ScrollTrigger
   ============================================ */

(function () {
  'use strict';

  // Wait for GSAP to load
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // ============================================
  // MOBILE NAV — Animated overlay
  // ============================================
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navClose = document.getElementById('nav-close');

  if (menuToggle && mainNav) {
    const navItems = mainNav.querySelectorAll('.nav-list li, .nav-order-cta');
    let isOpen = false;

    function openMenu() {
      isOpen = true;
      mainNav.classList.add('open');
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      gsap.fromTo(mainNav,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(navItems,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', stagger: 0.07, delay: 0.1 }
      );
    }

    function closeMenu() {
      isOpen = false;
      document.body.style.overflow = '';
      gsap.to(mainNav, {
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          mainNav.classList.remove('open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          gsap.set(navItems, { clearProps: 'all' });
        }
      });
    }

    menuToggle.addEventListener('click', () => isOpen ? closeMenu() : openMenu());
    if (navClose) navClose.addEventListener('click', closeMenu);

    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }


  // ============================================
  // HEADER SCROLL STATE
  // ============================================
  const header = document.getElementById('site-header');

  if (header) {
    ScrollTrigger.create({
      start: 'top -60',
      onUpdate: (self) => {
        header.classList.toggle('scrolled', self.progress > 0);
      }
    });
  }


  // ============================================
  // SCROLL INDICATOR FADE
  // ============================================
  const scrollIndicator = document.getElementById('scroll-indicator');

  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: scrollIndicator,
        start: 'top 90%',
        end: 'top 70%',
        scrub: true
      }
    });
  }


  // ============================================
  // HERO VIDEO — Smooth Loop + Subtle Zoom
  // ============================================
  // HERO VIDEO — Forward → Rewind → Loop
  // ============================================
  function initHeroVideo() {
    const video = document.getElementById('hero-video');
    if (!video) return;

    const FORWARD_RATE = 0.6;
    const REWIND_RATE = 1.8; // video-seconds rewound per real second

    let rewinding = false;
    let rafId = null;
    let lastTs = null;

    function rewindFrame(ts) {
      if (!rewinding) return;

      if (lastTs !== null) {
        const elapsed = (ts - lastTs) / 1000;
        const next = video.currentTime - elapsed * REWIND_RATE;

        if (next <= 0) {
          video.currentTime = 0;
          rewinding = false;
          lastTs = null;
          video.playbackRate = FORWARD_RATE;
          video.play().catch(() => {});
          return;
        }

        video.currentTime = next;
      }

      lastTs = ts;
      rafId = requestAnimationFrame(rewindFrame);
    }

    function startRewind() {
      video.pause(); // stop forward decode before seeking
      rewinding = true;
      lastTs = null;
      rafId = requestAnimationFrame(rewindFrame);
    }

    function startForward() {
      video.playbackRate = FORWARD_RATE;
      video.play().catch(() => {});
    }

    // Subtle slow-zoom — adds life without distraction
    gsap.fromTo(video,
      { scale: 1 },
      { scale: 1.03, duration: 28, ease: 'sine.inOut', repeat: -1, yoyo: true }
    );

    video.addEventListener('ended', startRewind);

    video.addEventListener('error', () => {
      const wrap = document.querySelector('.hero-video-wrap');
      if (wrap) wrap.style.background = 'var(--accent-dark)';
    });

    // Start when enough data is buffered
    if (video.readyState >= 3) {
      startForward();
    } else {
      video.addEventListener('canplay', startForward, { once: true });
    }
  }

  initHeroVideo();


  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  function createReveal(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      gsap.from(el, {
        y: options.y || 24,
        opacity: 0,
        duration: options.duration || 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 85%',
          once: true
        }
      });
    });
  }

  // Section headers
  document.querySelectorAll('.section-header').forEach(header => {
    const eyebrow = header.querySelector('.eyebrow');
    const headline = header.querySelector('h2');
    const subtitle = header.querySelector('.section-subtitle');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        once: true
      }
    });

    if (eyebrow) tl.from(eyebrow, { y: 16, opacity: 0, duration: 0.5, ease: 'power2.out' });
    if (headline) tl.from(headline, { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    if (subtitle) tl.from(subtitle, { y: 16, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  });

  // Hero entrance
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const heroTl = gsap.timeline({ delay: 0.3 });
    heroTl
      .from('.hero-content .eyebrow', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
      .from('.hero-headline', { y: 30, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.2')
      .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
  }

  // Cards — staggered reveal
  function revealCards(containerSelector, cardSelector) {
    document.querySelectorAll(containerSelector).forEach(container => {
      const cards = container.querySelectorAll(cardSelector);
      if (!cards.length) return;

      gsap.from(cards, {
        y: 24,
        opacity: 0,
        scale: 0.98,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          once: true
        }
      });
    });
  }

  revealCards('.about-grid', '.about-card');
  revealCards('.menu-grid', '.menu-card');
  revealCards('.testimonial-grid', '.testimonial-card');

  // Gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    gsap.from(galleryItems, {
      y: 20,
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 80%',
        once: true
      }
    });
  }

  // Signup section
  createReveal('.signup-wrapper', { y: 30, duration: 0.8 });

  // Location section
  createReveal('.location-info', { y: 24 });
  createReveal('.location-map', { y: 24 });


  // ============================================
  // MENU FILTERING
  // ============================================
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuCards = document.querySelectorAll('.menu-card');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // Update active tab
      menuTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter cards
      menuCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Animate visible cards
      const visibleCards = document.querySelectorAll('.menu-card:not(.hidden)');
      gsap.from(visibleCards, {
        y: 16,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'transform'
      });
    });
  });


  // ============================================
  // ORDERING SYSTEM
  // ============================================
  const cart = [];
  const cartItemsEl = document.getElementById('cart-items');
  const cartEmptyEl = document.getElementById('cart-empty');
  const cartFooterEl = document.getElementById('cart-footer');
  const cartTotalEl = document.getElementById('cart-total-amount');
  const submitBtn = document.getElementById('submit-order');
  const orderForm = document.getElementById('order-form');
  const orderFormWrapper = document.getElementById('order-form-wrapper');
  const orderConfirmation = document.getElementById('order-confirmation');
  const confirmationDetails = document.getElementById('confirmation-details');

  let selectedDate = null;
  let selectedTime = null;

  // Load cart from localStorage
  function loadCart() {
    const saved = localStorage.getItem('gc-cart');
    if (saved) {
      try {
        const items = JSON.parse(saved);
        items.forEach(item => cart.push(item));
        renderCart();
      } catch (e) { /* ignore */ }
    }
  }

  function saveCart() {
    localStorage.setItem('gc-cart', JSON.stringify(cart));
  }

  function renderCart() {
    if (!cartItemsEl) return;

    if (cart.length === 0) {
      cartItemsEl.innerHTML = '';
      cartEmptyEl.style.display = '';
      cartFooterEl.style.display = 'none';
      validateForm();
      return;
    }

    cartEmptyEl.style.display = 'none';
    cartFooterEl.style.display = '';

    cartItemsEl.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
          <span class="cart-qty">${item.qty}</span>
          <button class="cart-qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
          <button class="cart-item-remove" data-action="remove" data-index="${index}" aria-label="Remove item">Remove</button>
        </div>
      </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotalEl.textContent = '$' + total.toFixed(2);
    saveCart();
    validateForm();
  }

  // Add to order buttons
  document.querySelectorAll('.btn-add-to-order').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      renderCart();

      // Button feedback
      btn.textContent = 'Added!';
      btn.classList.add('added');
      setTimeout(() => {
        btn.textContent = 'Add to Order';
        btn.classList.remove('added');
      }, 1200);
    });
  });

  // Cart controls (event delegation)
  if (cartItemsEl) {
    cartItemsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;

      const index = parseInt(btn.dataset.index);
      const action = btn.dataset.action;

      if (action === 'increase') {
        cart[index].qty++;
      } else if (action === 'decrease') {
        cart[index].qty--;
        if (cart[index].qty <= 0) cart.splice(index, 1);
      } else if (action === 'remove') {
        cart.splice(index, 1);
      }

      renderCart();
    });
  }


  // ============================================
  // DATE PICKER
  // ============================================
  const datePicker = document.getElementById('date-picker');

  if (datePicker) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'date-option';
      option.dataset.date = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

      option.innerHTML = `
        <span class="date-day">${days[date.getDay()]}</span>
        <span class="date-num">${months[date.getMonth()]} ${date.getDate()}</span>
      `;

      option.addEventListener('click', () => {
        datePicker.querySelectorAll('.date-option').forEach(d => d.classList.remove('selected'));
        option.classList.add('selected');
        selectedDate = option.dataset.date;
        validateForm();
      });

      datePicker.appendChild(option);
    }
  }


  // ============================================
  // TIME SLOT SELECTION
  // ============================================
  const timeSlots = document.querySelectorAll('.time-slot');

  // Mark a couple slots as unavailable for realism
  const unavailableSlots = ['12:00 PM', '3:00 PM'];
  timeSlots.forEach(slot => {
    if (unavailableSlots.includes(slot.dataset.time)) {
      slot.classList.add('unavailable');
      slot.disabled = true;
    }

    slot.addEventListener('click', () => {
      if (slot.classList.contains('unavailable')) return;
      timeSlots.forEach(s => s.classList.remove('selected'));
      slot.classList.add('selected');
      selectedTime = slot.dataset.time;
      validateForm();
    });
  });


  // ============================================
  // FORM VALIDATION
  // ============================================
  function validateForm() {
    if (!submitBtn) return;

    const name = document.getElementById('customer-name');
    const phone = document.getElementById('customer-phone');
    const email = document.getElementById('customer-email');

    const isValid = cart.length > 0
      && selectedDate
      && selectedTime
      && name && name.value.trim()
      && phone && phone.value.trim()
      && email && email.value.trim() && email.value.includes('@');

    submitBtn.disabled = !isValid;
  }

  // Validate on input
  document.querySelectorAll('#order-form input, #order-form textarea').forEach(input => {
    input.addEventListener('input', validateForm);
  });


  // ============================================
  // ORDER SUBMISSION
  // ============================================
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('customer-name').value.trim();
      const phone = document.getElementById('customer-phone').value.trim();
      const email = document.getElementById('customer-email').value.trim();
      const instructions = document.getElementById('special-instructions').value.trim();

      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

      // Show confirmation
      const orderCartEl = document.getElementById('order-cart');
      if (orderCartEl) orderCartEl.style.display = 'none';
      orderFormWrapper.style.display = 'none';
      orderConfirmation.style.display = '';

      confirmationDetails.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Pickup:</strong> ${selectedDate} at ${selectedTime}</p>
        <p><strong>Items:</strong> ${cart.map(i => `${i.name} x${i.qty}`).join(', ')}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        ${instructions ? `<p><strong>Notes:</strong> ${instructions}</p>` : ''}
      `;

      // Animate confirmation
      gsap.from(orderConfirmation, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });

      // Clear cart
      cart.length = 0;
      localStorage.removeItem('gc-cart');
    });
  }

  // New order button
  const newOrderBtn = document.getElementById('new-order-btn');
  if (newOrderBtn) {
    newOrderBtn.addEventListener('click', () => {
      const orderCartEl = document.getElementById('order-cart');
      if (orderCartEl) orderCartEl.style.display = '';
      orderFormWrapper.style.display = '';
      orderConfirmation.style.display = 'none';

      selectedDate = null;
      selectedTime = null;
      orderForm.reset();
      datePicker.querySelectorAll('.date-option').forEach(d => d.classList.remove('selected'));
      timeSlots.forEach(s => s.classList.remove('selected'));
      renderCart();
    });
  }


  // ============================================
  // EMAIL SIGNUP
  // ============================================
  const signupForm = document.getElementById('signup-form');
  const signupSuccess = document.getElementById('signup-success');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = signupForm.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value.includes('@')) return;

      signupForm.querySelector('.signup-fields').style.display = 'none';
      signupSuccess.style.display = '';

      gsap.from(signupSuccess, {
        y: 10,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  }


  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      const headerOffset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });


  // ============================================
  // INIT
  // ============================================
  loadCart();

})();
