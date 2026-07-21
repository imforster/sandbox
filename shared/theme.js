/**
 * Theme persistence: applies stored theme on page load.
 * Toggle UI lives in nav.js panel.
 * Include with: <script src="/sandbox/shared/theme.js"></script>
 */
(function () {
  var mode = localStorage.getItem('sb-theme') || 'system';
  if (mode !== 'system') {
    document.documentElement.setAttribute('data-theme', mode);
  }
})();
