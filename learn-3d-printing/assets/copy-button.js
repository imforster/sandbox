document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    const copyIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    const checkIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    button.className = 'copy-btn';
    button.innerHTML = copyIcon;
    button.setAttribute('aria-label', 'Copy code to clipboard');
    button.setAttribute('title', 'Copy to clipboard');

    button.addEventListener('click', async () => {
      const source = pre.querySelector('code') || pre;
      await navigator.clipboard.writeText(source.textContent);
      button.innerHTML = checkIcon;
      button.classList.add('copied');
      setTimeout(() => {
        button.innerHTML = copyIcon;
        button.classList.remove('copied');
      }, 2000);
    });

    pre.appendChild(button);
  });
});
