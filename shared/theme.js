/**
 * Theme toggle: light / dark / system.
 * Injects a button and persists preference in localStorage.
 * Include with: <script src="/sandbox/shared/theme.js"></script>
 */
(function () {
  const KEY = 'sb-theme';
  const ICONS = { light: '☀️', dark: '🌙', system: '💻' };
  const CYCLE = ['system', 'light', 'dark'];

  function getStored() {
    return localStorage.getItem(KEY) || 'system';
  }

  function apply(mode) {
    const root = document.documentElement;
    if (mode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', mode);
    }
    localStorage.setItem(KEY, mode);
    if (btn) btn.textContent = ICONS[mode];
    if (btn) btn.title = 'Theme: ' + mode;
  }

  // Apply immediately (before paint)
  apply(getStored());

  // Create toggle button
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.textContent = ICONS[getStored()];
  btn.title = 'Theme: ' + getStored();
  btn.setAttribute('aria-label', 'Toggle theme');

  btn.addEventListener('click', function () {
    const current = getStored();
    const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];
    apply(next);
  });

  // Inject when DOM is ready
  if (document.body) {
    document.body.appendChild(btn);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(btn);
    });
  }
})();
