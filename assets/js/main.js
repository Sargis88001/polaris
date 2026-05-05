// BrightPath Academy — interactive behaviour.
// Static site, no framework.

// ---- Locale routing ----
var LOCALES = ['en', 'ru', 'hy'];

function getLocaleFromPath() {
  var seg = window.location.pathname.split('/').filter(Boolean)[0];
  return LOCALES.indexOf(seg) !== -1 ? seg : 'en';
}

function switchLocale(newLocale) {
  try { localStorage.setItem('brightpath_lang', newLocale); } catch(e) {}
  var segments = window.location.pathname.split('/').filter(Boolean);
  segments[0] = newLocale;
  window.location.href = '/' + segments.join('/') + '/';
}

function prefixLinks() {
  var locale = getLocaleFromPath();
  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('/') && !href.startsWith('/en/') && !href.startsWith('/ru/') && !href.startsWith('/hy/')) {
      link.setAttribute('href', '/' + locale + href);
    }
  });
}

// Run immediately — deferred scripts execute after DOM is parsed
prefixLinks();

// ---- Active nav link ----
(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link, .nav-dropdown-link').forEach((link) => {
    if (!link.href) return;
    const linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (linkPath === path) {
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
  document.querySelectorAll('.mobile-nav-group').forEach((g) => g.classList.remove('is-open'));
}
if (hamburger) hamburger.addEventListener('click', openMobileNav);
if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileNav(); });

document.querySelectorAll('.mobile-nav-group-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.mobile-nav-group').classList.toggle('is-open');
  });
});

// ---- Language switcher ----
function getLang() {
  const fromPath = window.location.pathname.split('/').filter(Boolean)[0];
  if (LOCALES.indexOf(fromPath) !== -1) return fromPath;
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
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    var active = btn.dataset.locale === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', function() { switchLocale(btn.dataset.locale); });
});
applyLang(getLang());

// ---- Footer year ----
const fyEl = document.getElementById('footerYear');
if (fyEl) fyEl.textContent = new Date().getFullYear();

// ---- Scroll reveal ----
// Fix: reveal all .reveal and .stagger children immediately so nothing stays hidden.
// lazy-loaded images inside opacity:0 elements are skipped by some browsers,
// so we must mark visible BEFORE the browser decides not to load the images.
function revealAll() {
  document.querySelectorAll('.reveal, .stagger > *').forEach((el) => {
    el.classList.add('is-visible');
    // Force lazy images inside newly-visible elements to load
    el.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = 'eager';
    });
  });
}

// Run immediately (sync) so images are visible before first paint
revealAll();

// Also run after DOMContentLoaded as a safety net
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealAll);
} else {
  revealAll();
}

// Hard fallback at 300ms
setTimeout(revealAll, 300);

// ---- Contact form validation ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    contactForm.querySelectorAll('[required]').forEach((field) => {
      const row = field.closest('.form-row');
      let fieldValid = true;
      if (field.type === 'email') {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      } else if (field.type === 'number') {
        const val = parseInt(field.value, 10);
        const min = field.min !== '' ? parseInt(field.min, 10) : -Infinity;
        const max = field.max !== '' ? parseInt(field.max, 10) : Infinity;
        fieldValid = !isNaN(val) && val >= min && val <= max;
      } else {
        fieldValid = field.value.trim() !== '';
      }
      if (!fieldValid) {
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
