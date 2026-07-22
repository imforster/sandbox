/**
 * Shared hamburger navigation menu for all sandbox pages.
 * Include with: <script src="/sandbox/shared/nav.js"></script>
 * 
 * Automatically injects the menu into the page and handles open/close.
 */
(function () {
  // Styles
  const style = document.createElement('style');
  style.textContent = `
    .sb-nav {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9999;
      padding: 1rem;
    }
    .sb-menu-btn {
      width: 40px;
      height: 40px;
      border: none;
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.06);
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    .sb-menu-btn:hover {
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }
    .sb-menu-btn span {
      display: block;
      width: 18px;
      height: 2px;
      background: #1d1d1f;
      border-radius: 1px;
      transition: all 0.3s ease;
    }
    .sb-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(2.5px, 2.5px);
    }
    .sb-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }
    .sb-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(2.5px, -2.5px);
    }
    .sb-overlay {
      position: fixed;
      inset: 0;
      z-index: 9998;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .sb-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }
    .sb-panel {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9999;
      width: 280px;
      height: 100%;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      border-left: 1px solid rgba(0, 0, 0, 0.06);
      padding: 5rem 1.75rem 2rem;
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
      overflow-y: auto;
    }
    .sb-panel.active {
      transform: translateX(0);
    }
    .sb-panel-label {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #86868b;
      margin-bottom: 0.5rem;
      margin-top: 1.5rem;
    }
    .sb-panel-label:first-child {
      margin-top: 0;
    }
    .sb-panel a {
      display: block;
      padding: 0.75rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: #1d1d1f;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      transition: color 0.2s ease;
    }
    .sb-panel a:last-child {
      border-bottom: none;
    }
    .sb-panel a:hover {
      color: #0071e3;
    }
    .sb-panel a.active-link {
      color: #0071e3;
    }
    .sb-theme-row {
      display: flex;
      gap: 0.5rem;
      padding: 0.75rem 0;
    }
    .sb-theme-btn {
      flex: 1;
      padding: 0.5rem 0.4rem;
      font-size: 0.8rem;
      font-family: inherit;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      background: rgba(245, 245, 247, 0.8);
      color: #6e6e73;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .sb-theme-btn:hover {
      background: rgba(0, 0, 0, 0.04);
      color: #1d1d1f;
    }
    .sb-theme-btn.active {
      background: rgba(0, 113, 227, 0.1);
      border-color: #0071e3;
      color: #0071e3;
    }

    /* Dark mode */
    @media (prefers-color-scheme: dark) {
      .sb-menu-btn {
        background: rgba(28, 28, 30, 0.72);
        border-color: rgba(255, 255, 255, 0.08);
      }
      .sb-menu-btn:hover {
        background: rgba(44, 44, 46, 0.9);
      }
      .sb-menu-btn span {
        background: #f5f5f7;
      }
      .sb-panel {
        background: rgba(28, 28, 30, 0.95);
        border-left-color: rgba(255, 255, 255, 0.08);
      }
      .sb-panel-label {
        color: #6e6e73;
      }
      .sb-panel a {
        color: #f5f5f7;
        border-bottom-color: rgba(255, 255, 255, 0.06);
      }
      .sb-panel a:hover,
      .sb-panel a.active-link {
        color: #64d2ff;
      }
      .sb-theme-row {
        display: flex;
        gap: 0.5rem;
        padding: 0.75rem 0;
      }
      .sb-theme-btn {
        flex: 1;
        padding: 0.5rem 0.4rem;
        font-size: 0.8rem;
        font-family: inherit;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        background: rgba(44, 44, 46, 0.5);
        color: #a1a1a6;
        cursor: pointer;
        transition: all 0.2s;
        text-align: center;
      }
      .sb-theme-btn:hover {
        background: rgba(44, 44, 46, 0.9);
        color: #f5f5f7;
      }
      .sb-theme-btn.active {
        background: rgba(100, 210, 255, 0.15);
        border-color: #64d2ff;
        color: #64d2ff;
      }
    }

    /* Dark mode (manual toggle) */
    [data-theme="dark"] .sb-menu-btn {
      background: rgba(28, 28, 30, 0.72);
      border-color: rgba(255, 255, 255, 0.08);
    }
    [data-theme="dark"] .sb-menu-btn:hover {
      background: rgba(44, 44, 46, 0.9);
    }
    [data-theme="dark"] .sb-menu-btn span {
      background: #f5f5f7;
    }
    [data-theme="dark"] .sb-panel {
      background: rgba(28, 28, 30, 0.95);
      border-left-color: rgba(255, 255, 255, 0.08);
    }
    [data-theme="dark"] .sb-panel-label {
      color: #6e6e73;
    }
    [data-theme="dark"] .sb-panel a {
      color: #f5f5f7;
      border-bottom-color: rgba(255, 255, 255, 0.06);
    }
    [data-theme="dark"] .sb-panel a:hover,
    [data-theme="dark"] .sb-panel a.active-link {
      color: #64d2ff;
    }
    [data-theme="dark"] .sb-theme-btn {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(44, 44, 46, 0.5);
      color: #a1a1a6;
    }
    [data-theme="dark"] .sb-theme-btn:hover {
      background: rgba(44, 44, 46, 0.9);
      color: #f5f5f7;
    }
    [data-theme="dark"] .sb-theme-btn.active {
      background: rgba(100, 210, 255, 0.15);
      border-color: #64d2ff;
      color: #64d2ff;
    }
  `;
  document.head.appendChild(style);

  // Menu items
  const links = [
    { label: 'Projects', items: [
      { text: 'Sandbox Home', href: '/sandbox/' },
      { text: 'Brain Dump', href: '/sandbox/brain-dump/brain-dump.html' },
      { text: 'DSQL Golden Path', href: '/sandbox/dsql-goldenpath/index.html' },
      { text: 'CIBC Analyzer', href: '/sandbox/cibc-analyzer/index.html' },
      { text: 'Tic Tac Toe v2', href: '/sandbox/tic-tac-toe-v2/index.html' },
      { text: 'Habit Tracker', href: '/sandbox/habit-tracker/index.html' },
      { text: 'IDEO Design Sprint', href: 'https://blog.imfsoftware.com/ideo-design-sprint-game/' },
      { text: 'LLM Wiki', href: 'https://blog.imfsoftware.com/llm-wiki/docs/' },
    ]},
    { label: 'Learning', items: [
      { text: 'All Courses', href: '/sandbox/learning/' },
      { text: 'Agents at Scale', href: '/sandbox/agents-at-scale/' },
      { text: 'Building Better Skills', href: '/sandbox/learn-skills/' },
      { text: 'chezmoi', href: '/sandbox/learn-chezmoi/' },
      { text: 'Cloudflare Workers', href: '/sandbox/learn-cloudflare/' },
      { text: 'Codex', href: '/sandbox/learn-codex/' },
      { text: 'Graphify', href: '/sandbox/learn-graphify/' },
      { text: 'Jujutsu (jj)', href: '/sandbox/learn-jj/' },
      { text: 'Safe Agentic Workflows', href: '/sandbox/safe-agentic-workflows/' },
      { text: 'SkillOpt & Harnesses', href: '/sandbox/learn-skillopt-harness/' },
      { text: 'Strands Agents', href: '/sandbox/learn-strands/' },
    ]},
    { label: 'Navigate', items: [
      { text: 'Blog', href: 'https://blog.imfsoftware.com' },
      { text: 'GitHub', href: 'https://github.com/imforster' },
    ]}
  ];

  // Build DOM
  const nav = document.createElement('div');
  nav.className = 'sb-nav';
  nav.innerHTML = `
    <button class="sb-menu-btn" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;

  const overlay = document.createElement('div');
  overlay.className = 'sb-overlay';

  const panel = document.createElement('div');
  panel.className = 'sb-panel';

  // Populate panel
  const currentPath = window.location.pathname;
  links.forEach(section => {
    const lbl = document.createElement('div');
    lbl.className = 'sb-panel-label';
    lbl.textContent = section.label;
    panel.appendChild(lbl);
    section.items.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      if (currentPath === item.href || currentPath.startsWith(item.href) && item.href !== '/sandbox/') {
        a.classList.add('active-link');
      }
      panel.appendChild(a);
    });
  });

  document.body.appendChild(nav);
  document.body.appendChild(overlay);
  document.body.appendChild(panel);

  // Theme toggle in panel
  const themeLbl = document.createElement('div');
  themeLbl.className = 'sb-panel-label';
  themeLbl.textContent = 'Theme';
  panel.appendChild(themeLbl);

  const themeRow = document.createElement('div');
  themeRow.className = 'sb-theme-row';
  const MODES = [
    { key: 'system', icon: '💻', label: 'System' },
    { key: 'light', icon: '☀️', label: 'Light' },
    { key: 'dark', icon: '🌙', label: 'Dark' }
  ];
  const KEY = 'sb-theme';

  function getTheme() { return localStorage.getItem(KEY) || 'system'; }
  function applyTheme(mode) {
    const root = document.documentElement;
    if (mode === 'system') { root.removeAttribute('data-theme'); }
    else { root.setAttribute('data-theme', mode); }
    localStorage.setItem(KEY, mode);
    themeRow.querySelectorAll('.sb-theme-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.theme === mode);
    });
  }

  MODES.forEach(function (m) {
    const b = document.createElement('button');
    b.className = 'sb-theme-btn' + (getTheme() === m.key ? ' active' : '');
    b.dataset.theme = m.key;
    b.innerHTML = m.icon + ' ' + m.label;
    b.addEventListener('click', function () { applyTheme(m.key); });
    themeRow.appendChild(b);
  });
  panel.appendChild(themeRow);

  // Apply stored theme on load
  applyTheme(getTheme());

  // Toggle
  const btn = nav.querySelector('.sb-menu-btn');
  function toggle() {
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
    panel.classList.toggle('active');
  }
  btn.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('active')) {
      toggle();
    }
  });
})();
