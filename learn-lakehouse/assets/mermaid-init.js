(function () {
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var themeSetting = document.documentElement.getAttribute('data-theme');
  var isDark = themeSetting === 'dark' || (themeSetting !== 'light' && prefersDark);
  mermaid.initialize({
    startOnLoad: false,
    theme: isDark ? 'dark' : 'neutral',
    flowchart: { curve: 'basis', padding: 16 },
    themeVariables: isDark ? {
      primaryColor: '#1c1c1e',
      primaryTextColor: '#f5f5f7',
      primaryBorderColor: '#64d2ff',
      lineColor: '#a1a1a6',
      secondaryColor: '#2c2c2e',
      tertiaryColor: '#1c1c1e'
    } : {}
  });
  mermaid.run({ querySelector: '.mermaid' });
})();
