// Polaris Center — interactive behaviour.
// Static site, no framework.

// ---- Locale routing ----
var LOCALES = ['en', 'ru', 'hy'];

function getLocaleFromPath() {
  var segs = window.location.pathname.split('/').filter(Boolean);
  for (var i = 0; i < segs.length; i++) {
    if (LOCALES.indexOf(segs[i]) !== -1) return segs[i];
  }
  return 'en';
}

function switchLocale(newLocale) {
  try { localStorage.setItem('polaris_lang', newLocale); } catch(e) {}
  var segs = window.location.pathname.split('/').filter(Boolean);
  for (var i = 0; i < segs.length; i++) {
    if (LOCALES.indexOf(segs[i]) !== -1) {
      segs[i] = newLocale;
      window.location.href = '/' + segs.join('/') + '/';
      return;
    }
  }
  window.location.href = newLocale + '/';
}

var ASSET_RE = /^(assets|public)\//;
var LOCALE_RE = /^(en|ru|hy)\//;
var SKIP_RE  = /^(https?:|\/\/|#|tel:|mailto:)/;

function prefixLinks() {
  var locale = getLocaleFromPath();
  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    if (SKIP_RE.test(href))   return;
    if (ASSET_RE.test(href))  return;
    if (LOCALE_RE.test(href)) return;
    if (href === './' || href === '.' || href === '') {
      link.setAttribute('href', locale + '/'); return;
    }
    if (href.startsWith('/')) {
      var stripped = href.slice(1);
      link.setAttribute('href', stripped ? locale + '/' + stripped : locale + '/');
      return;
    }
    link.setAttribute('href', locale + '/' + href);
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
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileNav();
    closeLangDropdowns();
  }
});

document.querySelectorAll('.mobile-nav-group-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.mobile-nav-group').classList.toggle('is-open');
  });
});

// ---- Lang dropdown ----
function closeLangDropdowns() {
  document.querySelectorAll('.lang-switcher.is-open').forEach((sw) => {
    sw.classList.remove('is-open');
    const trigger = sw.querySelector('.lang-switcher__trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('.lang-switcher__trigger').forEach((trigger) => {
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    const sw = trigger.closest('.lang-switcher');
    const opening = !sw.classList.contains('is-open');
    closeLangDropdowns();
    if (opening) {
      sw.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', closeLangDropdowns);

// ---- Language switcher ----
function getLang() {
  var segs = window.location.pathname.split('/').filter(Boolean);
  for (var i = 0; i < segs.length; i++) {
    if (LOCALES.indexOf(segs[i]) !== -1) return segs[i];
  }
  try {
    const stored = localStorage.getItem('polaris_lang');
    if (stored && typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[stored]) return stored;
  } catch(e) {}
  return 'en';
}
function applyLang(lang) {
  if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
  try { localStorage.setItem('polaris_lang', lang); } catch(e) {}
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
  document.querySelectorAll('.lang-switcher__current').forEach((el) => {
    el.textContent = lang.toUpperCase();
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    var active = btn.dataset.locale === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
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

// ---- Contact form ----
// Replace the three values below with your EmailJS credentials.
// Setup: https://www.emailjs.com → Email Services → Email Templates → Account > API Keys
const EMAILJS_SERVICE_ID  = 'service_i4m1wte';
const EMAILJS_TEMPLATE_ID = 'template_34ur8yp';
const EMAILJS_PUBLIC_KEY  = 'qO0BK3vnPewwfUYYe';

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
    const originalLabel = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    Promise.resolve()
    .then(function () {
      if (typeof emailjs === 'undefined') throw new Error('EmailJS SDK not loaded');
      return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  document.getElementById('cf-name').value.trim(),
        from_email: document.getElementById('cf-email').value.trim(),
        phone:      document.getElementById('cf-phone').value.trim(),
        child_age:  document.getElementById('cf-age').value,
        program:    document.getElementById('cf-program').value,
        message:    document.getElementById('cf-message').value.trim(),
      }, EMAILJS_PUBLIC_KEY);
    })
    .then(function () {
      contactForm.innerHTML =
        '<div style="text-align:center;padding:3rem 0">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2" style="margin:0 auto 1rem"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>' +
          '<h3 style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:.5rem">Thank you</h3>' +
          '<p style="color:var(--color-text-muted)">Your message is on its way. We will reply within one working day.</p>' +
        '</div>';
    })
    .catch(function (err) {
      console.error('EmailJS error:', err);
      btn.disabled = false;
      btn.textContent = originalLabel;
      let errEl = contactForm.querySelector('.form-send-error');
      if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'form-send-error';
        errEl.style.cssText = 'color:#c0392b;margin-top:1rem;font-size:0.9rem';
        btn.insertAdjacentElement('afterend', errEl);
      }
      const detail = (err && (err.text || err.message)) ? ' (' + (err.text || err.message) + ')' : '';
      errEl.textContent = 'Something went wrong' + detail + '. Please try again or email us at info@polariscenter.am.';
    });
  });
}
