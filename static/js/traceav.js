/* ===== TraceAV-Bench page interactivity ===== */

// ------- Leaderboard group filter -------
(function () {
  function applyFilter(group) {
    var table = document.getElementById('lb-main');
    if (!table) return;
    var rows = table.querySelectorAll('tbody tr');
    rows.forEach(function (tr) {
      var g = tr.getAttribute('data-group');
      if (group === 'all' || g === null || g === group) {
        tr.style.display = '';
      } else {
        tr.style.display = 'none';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('.lb-filter-btn');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        applyFilter(b.getAttribute('data-filter'));
      });
    });
  });
})();

// ------- BibTeX copy -------
function copyBibTeX() {
  var code = document.getElementById('bibtex-code');
  if (!code) return;
  var text = code.innerText;
  navigator.clipboard.writeText(text).then(function () {
    var btn = document.querySelector('.copy-bibtex-btn .copy-text');
    if (!btn) return;
    var old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(function () { btn.textContent = old; }, 1500);
  }).catch(function () {
    // fallback
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  });
}

// ------- Mobile nav toggle -------
function toggleNav() {
  var el = document.getElementById('tav-nav-links');
  if (el) el.classList.toggle('is-open');
}

// ------- Scroll to top -------
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-to-top button based on scroll position
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.scroll-to-top');
  if (!btn) return;
  function toggle() {
    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.classList.remove('is-visible');
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  }
  btn.style.transition = 'opacity 0.2s ease';
  btn.style.opacity = '0';
  btn.style.pointerEvents = 'none';
  window.addEventListener('scroll', toggle);
  toggle();
});
