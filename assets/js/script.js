/* ===========================================
   EditSetu — Premium Video Editor Marketplace
   script.js — All JavaScript Functionality
   =========================================== */

'use strict';

/* ─── DOM Ready ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initActiveNavLink();
  initSmoothScroll();

  // Page-specific modules
  if (document.querySelector('.editors-section')) initEditorFilters();
  if (document.querySelector('.become-editor'))   initBecomeEditorForm();
  if (document.querySelector('.about-content'))   initCounterAnimations();
  if (document.querySelector('.faq-list'))        initFAQ();
  if (document.querySelector('.contact-section')) initContactForm();
});

/* ══════════════════════════════════════════════
   NAVBAR — Scroll + Mobile
══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ══════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════ */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ══════════════════════════════════════════════
   ACTIVE NAV LINK
══════════════════════════════════════════════ */
function initActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ══════════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ══════════════════════════════════════════════
   SCROLL REVEAL ANIMATIONS
══════════════════════════════════════════════ */
function initScrollAnimations() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   EDITOR DATA
══════════════════════════════════════════════ */
const EDITORS = [
  {
    id: 1,
    name: 'Arjun Dangi',
    initials: 'AD',
    avatarBg: 'linear-gradient(135deg, #2D7FFF, #8B5CF6)',
    category: 'YouTube Editor',
    categoryKey: 'youtube',
    rating: 4.9,
    reviews: 127,
    experience: '5 Years',
    price: '₹400',
    tags: ['Long-form', 'Vlogs', 'Tutorials'],
    verified: true,
    profile: 'editors/editor-aryan.html'
  },

    {
    id: 2,
    name: 'Ashish Teli',
    initials: 'AT',
    avatarBg: 'linear-gradient(135deg, #8B5CF6, #ec4899)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 5.0,
    reviews: 89,
    experience: '3 Years',
    price: '₹200',
    tags: ['Instagram', 'Trendy', 'Music Sync'],
    verified: true,
    profile: 'editors/editor-Ashish-Teli.html'
  },


  {
    id: 3,
    name: 'Dinesh Teli',
    initials: 'DT',
    avatarBg: 'linear-gradient(135deg, #10b981, #2D7FFF)',
    category: 'Reels Editor',
    categoryKey: 'reels',
    rating: 4.8,
    reviews: 89,
    experience: '1 Years',
    price: '₹300',
    tags: ['Basic Editing', 'YouTube', 'Reels'],
    verified: true,
    profile: 'editors/editor-Dinesh-teli.html'
  },

  {
    id: 4,
    name: 'Sahil Verma',
    initials: 'SV',
    avatarBg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    category: 'Gaming Editor',
    categoryKey: 'gaming',
    rating: 4.7,
    reviews: 156,
    experience: '4 Years',
    price: '₹1,200',
    tags: ['Montages', 'Highlights', 'Thumbnails'],
    verified: true,
    profile: 'editors/editor-sahil.html'
  },

  {
    id: 5,
    name: 'Nisha Patel',
    initials: 'NP',
    avatarBg: 'linear-gradient(135deg, #ec4899, #8B5CF6)',
    category: 'Motion Graphics',
    categoryKey: 'motion',
    rating: 4.9,
    reviews: 74,
    experience: '6 Years',
    price: '₹3,000',
    tags: ['After Effects', 'Animations', 'Intros'],
    verified: true,
    profile: 'editors/editor-nisha.html'
  }
];

/* ─── Render Stars ───────────────────────────── */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ─── Build Card HTML ────────────────────────── */
function buildEditorCard(editor) {
  const tagHTML = editor.tags.map(t =>
    `<span style="
      background:rgba(45,127,255,0.08);
      border:1px solid rgba(45,127,255,0.12);
      color:#93c5fd;
      font-size:0.72rem;
      padding:3px 9px;
      border-radius:99px;
      font-weight:500;">${t}</span>`
  ).join('');

  return `
    <div class="editor-card reveal" data-category="${editor.categoryKey}">
      <div class="card-top">
        <div class="card-avatar" style="background:${editor.avatarBg}">${editor.initials}</div>
        <div class="card-meta">
          <div class="card-name">${editor.name}</div>
          <div class="card-category">${editor.category}</div>
        </div>
        ${editor.verified ? `<div class="card-verified" title="Verified Editor">✓</div>` : ''}
      </div>
      <div class="card-rating">
        <span class="stars">${renderStars(editor.rating)}</span>
        <span class="rating-num">${editor.rating.toFixed(1)}</span>
        <span class="rating-count">(${editor.reviews})</span>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">${tagHTML}</div>
      <div class="card-details">
        <div class="card-detail-item">
          <span class="detail-label">Experience</span>
          <span class="detail-value">${editor.experience}</span>
        </div>
        <div class="card-detail-item">
          <span class="detail-label">Starting at</span>
          <span class="detail-value price">${editor.price}</span>
        </div>
      </div>
      <div class="card-footer">
        <a href="${editor.profile}" class="btn btn-primary btn-sm">View Profile</a>
        <span style="font-size:0.75rem;color:var(--muted);"><i class="fas fa-info-circle"></i> Fast reply</span>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════
   HOME — Featured Editors (6 cards)
══════════════════════════════════════════════ */
const featuredGrid = document.querySelector('#featured-editors-grid');
if (featuredGrid) {
  featuredGrid.innerHTML = EDITORS.slice(0, 6).map(buildEditorCard).join('');
  initScrollAnimations();
}

/* ══════════════════════════════════════════════
   EDITORS PAGE — Filter & Search
══════════════════════════════════════════════ */
function initEditorFilters() {
  const grid       = document.querySelector('#editors-grid');
  const searchInp  = document.querySelector('#editor-search');
  const chips      = document.querySelectorAll('.chip[data-filter]');
  const countEl    = document.querySelector('#results-count');

  if (!grid) return;

  // Initial render
  renderEditors('all', '');

  // Search
  if (searchInp) {
    searchInp.addEventListener('input', () => {
      const activeChip = document.querySelector('.chip.active');
      const cat = activeChip ? activeChip.dataset.filter : 'all';
      renderEditors(cat, searchInp.value.trim().toLowerCase());
    });
  }

  // Category chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const query = searchInp ? searchInp.value.trim().toLowerCase() : '';
      renderEditors(chip.dataset.filter, query);
    });
  });

  function renderEditors(category, query) {
    const filtered = EDITORS.filter(ed => {
      const matchCat   = category === 'all' || ed.categoryKey === category;
      const matchQuery = !query ||
        ed.name.toLowerCase().includes(query) ||
        ed.category.toLowerCase().includes(query) ||
        ed.tags.some(t => t.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });

    if (countEl) {
      countEl.innerHTML = `Showing <span>${filtered.length}</span> editors`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
          <div style="font-size:3rem;margin-bottom:16px;"><i class="fas fa-search"></i></div>
          <h3 style="font-family:var(--font-display);color:var(--text);margin-bottom:8px;">No editors found</h3>
          <p style="color:var(--muted);">Try a different search or category filter.</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map(buildEditorCard).join('');
    // Re-trigger scroll animations for new cards
    grid.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
  }
}



/* ══════════════════════════════════════════════
   ABOUT — Counter Animations
══════════════════════════════════════════════ */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const isDecimal = target % 1 !== 0;
      const duration  = 1800;
      const startTime = performance.now();

      function step(now) {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current  = target * ease;

        el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = prefix + (isDecimal ? target.toFixed(1) : target) + suffix;
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════ */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.height = '0';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        const inner = answer.querySelector('.faq-answer-inner');
        answer.style.height = inner ? inner.offsetHeight + 'px' : 'auto';
      }
    });
  });
}



/* ══════════════════════════════════════════════
   HERO PREVIEW ANIMATION (index.html)
══════════════════════════════════════════════ */
(function initHeroPreviewCycle() {
  const cards = document.querySelectorAll('.preview-editor-card');
  if (!cards.length) return;

  let active = 0;
  const highlight = () => {
    cards.forEach((c, i) => {
      c.style.transform = i === active ? 'scale(1.02)' : 'scale(1)';
      c.style.borderColor = i === active ? 'rgba(45,127,255,0.3)' : '';
    });
    active = (active + 1) % cards.length;
  };

  highlight();
  setInterval(highlight, 2500);
})();



