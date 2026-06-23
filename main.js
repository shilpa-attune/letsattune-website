/* Let's Attune — shared behavior (vanilla JS, no deps) */
(function () {
  'use strict';

  /* Sticky header shrink */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile nav toggle */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* Hero typewriter (only if present, respects reduced motion) */
  var tw = document.getElementById('typewriter');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (tw) {
    var plain = tw.getAttribute('data-plain') || 'Tune Into ';
    var accent = tw.getAttribute('data-accent') || 'Yourself';
    if (reduce) {
      tw.innerHTML = plain + '<span class="accent">' + accent + '</span>';
    } else {
      var total = plain.length + accent.length, i = 0;
      (function type() {
        if (i > total) { tw.innerHTML = plain + '<span class="accent">' + accent + '</span>'; return; }
        var p = plain.slice(0, Math.min(i, plain.length));
        var a = accent.slice(0, Math.max(0, i - plain.length));
        tw.innerHTML = p + (a ? '<span class="accent">' + a + '</span>' : '') + '<span class="cursor"></span>';
        i++; setTimeout(type, 75);
      })();
    }
  }

  /* Footer year */
  var yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  /* Workshop registration form — AJAX submit → show success + QR */
  var wkForm = document.getElementById('wk-form');
  var wkSuccess = document.getElementById('wk-success');
  if (wkForm && wkSuccess) {
    wkForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = wkForm.querySelector('[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      fetch(wkForm.action, {
        method: 'POST',
        body: new FormData(wkForm),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          wkForm.style.display = 'none';
          wkSuccess.style.display = 'block';
          wkSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          btn.textContent = 'Register Now →';
          btn.disabled = false;
          alert('Something went wrong — please try again or message us on WhatsApp.');
        }
      }).catch(function () {
        btn.textContent = 'Register Now →';
        btn.disabled = false;
        alert('No internet connection — please check and try again.');
      });
    });
  }
})();
