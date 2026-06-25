/* ===== SIGN GO — SCRIPTS ===== */
(function () {
  'use strict';

  // --- Lazy-apply background images with graceful fallback ---
  // Any element with data-img gets that photo as a background. If the photo
  // fails to load, the CSS gradient already in place stays visible.
  document.querySelectorAll('[data-img]').forEach(function (el) {
    var url = el.getAttribute('data-img');
    var img = new Image();
    img.onload = function () {
      el.style.backgroundImage =
        "linear-gradient(0deg,rgba(0,0,0,.08),rgba(0,0,0,.08)), url('" + url + "')";
    };
    img.onerror = function () {
      /* keep the gradient defined in CSS — nothing to do */
    };
    img.src = url;
  });

  // --- Mobile menu toggle ---
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // --- Current year in footer ---
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // --- Quote form submission ---
  // Order of delivery:
  //   1) If FORMSPREE_ID is set below, submissions POST to Formspree (lands
  //      automatically in Info@signgotx.com — works on ANY host).
  //   2) Otherwise, if the site is deployed on Netlify, Netlify Forms captures
  //      it automatically (the data-netlify attributes on the form).
  //   3) Local/offline fallback: opens the visitor's email app addressed to you.
  //
  // To turn on Formspree: create a free form at https://formspree.io targeted
  // at Info@signgotx.com, then paste its ID (the part after /f/) below.
  var FORMSPREE_ID = ''; // e.g. 'xmyzabcd'

  var form = document.getElementById('quoteForm');
  var note = document.getElementById('formNote');
  var btn = document.getElementById('submitBtn');

  function mailtoFallback(name, phone, email, service, message) {
    var subject = encodeURIComponent('Quote Request — ' + service + ' (' + name + ')');
    var body = encodeURIComponent(
      'Name: ' + name + '\nPhone: ' + phone + '\nEmail: ' + email +
      '\nService: ' + service + '\n\nDetails:\n' + message
    );
    window.location.href =
      'mailto:Info@signgotx.com?subject=' + subject + '&body=' + body;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('name').value || '').trim();
      var phone = (document.getElementById('phone').value || '').trim();
      var email = (document.getElementById('email').value || '').trim();
      var service = document.getElementById('service').value;
      var message = (document.getElementById('message').value || '').trim();

      if (!name || !phone || !email) {
        note.textContent = 'Please fill in your name, phone, and email.';
        note.className = 'form-note';
        return;
      }

      var data = new FormData(form);
      var onLocal = location.protocol === 'file:';

      // Choose endpoint: Formspree if configured, else the page itself (Netlify).
      var endpoint = FORMSPREE_ID
        ? 'https://formspree.io/f/' + FORMSPREE_ID
        : (onLocal ? null : location.pathname);

      if (!endpoint) {
        // Local preview — no server to receive the POST. Use email.
        mailtoFallback(name, phone, email, service, message);
        note.textContent = 'Opening your email app… or call us at 281-814-1111.';
        note.className = 'form-note ok';
        return;
      }

      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      })
        .then(function (res) {
          if (!res.ok) throw new Error('bad status');
          note.textContent =
            "Thank you! Your request has been sent — we'll be in touch shortly.";
          note.className = 'form-note ok';
          form.reset();
        })
        .catch(function () {
          // Network/host can't process it — fall back to email so nothing is lost.
          mailtoFallback(name, phone, email, service, message);
          note.textContent =
            'Opening your email app to send the request… or call 281-814-1111.';
          note.className = 'form-note ok';
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = 'Send My Request'; }
        });
    });
  }

  // --- Shrink header slightly on scroll ---
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 30) header.style.height = '';
    });
  }
})();
