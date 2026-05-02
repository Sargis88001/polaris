// BrightPath Academy — interactive behaviour.
// Static site, no framework.

// ---- Active nav link ----
(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link, .nav-dropdown-link').forEach((link) => {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('nav-link--active');
    }
  });
})();

// ---- Mobile nav ----
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavClose = document.getElementById('mobileNavClose');

function openMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.add('is-open');
  mobileNavOverlay.classList.add('is-open');
  mobileNav.setAttribute('aria-hidden', 'false');
  mobileNavOverlay.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove('is-open');
  mobileNavOverlay.classList.remove('is-open');
  mobileNav.setAttribute('aria-hidden', 'true');
  mobileNavOverlay.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
if (hamburger) hamburger.addEventListener('click', openMobileNav);
if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileNav(); });

// ---- Language switcher ----
function getLang() {
  try {
    const stored = localStorage.getItem('brightpath_lang');
    if (stored && typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[stored]) return stored;
  } catch(e) {}
  return 'en';
}
function applyLang(lang) {
  if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
  try { localStorage.setItem('brightpath_lang', lang); } catch(e) {}
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n-template]').forEach((el) => {
    const tplKey = el.dataset.i18nTemplate;
    const accentKey = el.dataset.i18nAccent;
    const tpl = tplKey.split('.').reduce((o, k) => (o ? o[k] : undefined), TRANSLATIONS[lang]);
    const accent = accentKey ? accentKey.split('.').reduce((o, k) => (o ? o[k] : undefined), TRANSLATIONS[lang]) : '';
    if (typeof tpl === 'string') {
      const safe = tpl.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
      el.innerHTML = safe.replace('{accent}', '<em>' + (accent || '') + '</em>');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), TRANSLATIONS[lang]);
    if (val && typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), TRANSLATIONS[lang]);
    if (val && typeof val === 'string') el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), TRANSLATIONS[lang]);
    if (val && typeof val === 'string') el.setAttribute('aria-label', val);
  });
  document.querySelectorAll('.lang-select').forEach((sel) => { sel.value = lang; });
}
document.querySelectorAll('.lang-select').forEach((sel) => {
  sel.addEventListener('change', (e) => applyLang(e.target.value));
});
applyLang(getLang());

// ---- Footer year ----
const fyEl = document.getElementById('footerYear');
if (fyEl) fyEl.textContent = new Date().getFullYear();

// ---- Scroll reveal ----
function markVisible(el) {
  el.classList.add('is-visible');
}

// Immediately mark everything already in the viewport as visible
document.querySelectorAll('.reveal, .stagger > *').forEach((el) => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    markVisible(el);
  }
});

// Observer for below-fold elements
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      markVisible(e.target);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.01, rootMargin: '0px 0px -10px 0px' });

document.querySelectorAll('.reveal, .stagger > *').forEach((el) => {
  if (!el.classList.contains('is-visible')) {
    revealObserver.observe(el);
  }
});

// Hard fallback: reveal everything after 800ms no matter what
setTimeout(() => {
  document.querySelectorAll('.reveal, .stagger > *').forEach(markVisible);
}, 800);

// ---- Contact form validation ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    contactForm.querySelectorAll('[required]').forEach((field) => {
      const row = field.closest('.form-row');
      if (!field.value.trim()) {
        row.classList.add('has-error');
        valid = false;
      } else {
        row.classList.remove('has-error');
      }
    });
    if (!valid) return;
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      contactForm.innerHTML =
        '<div style="text-align:center;padding:3rem 0">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2" style="margin:0 auto 1rem"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>' +
          '<h3 style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:.5rem">Thank you</h3>' +
          '<p style="color:var(--color-text-muted)">Your message is on its way. We will reply within one working day.</p>' +
        '</div>';
    }, 1200);
  });
}
