/* Screen-only: scale a fixed 1134x720 card down to fit the browser window
   so the whole card is always visible when opened full-size.
   No effect when the viewport is >= the card (scale stays 1), so the
   300-DPI proof renders (1134x720) and print PDFs are untouched.
   Print also force-resets zoom via brand.css @media print. */
(function () {
  function fit() {
    var c = document.querySelector('.card');
    if (!c) return;
    var s = Math.min(1, window.innerWidth / 1134, window.innerHeight / 720);
    c.style.zoom = s < 1 ? s : '';
  }
  window.addEventListener('load', fit);
  window.addEventListener('resize', fit);
  fit();
})();
