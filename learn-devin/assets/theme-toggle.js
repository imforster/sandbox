/**
 * theme-toggle.js — self-contained light/dark toggle.
 * This workspace lives outside /sandbox/, so the shared nav.js toggle panel is
 * unreachable. This mirrors house behavior: sets [data-theme] on <html> and
 * persists to localStorage under the house key "sb-theme" (light|dark|system).
 * The house style.css already defines both palettes, so we only flip the attribute.
 */
(function () {
  var KEY = "sb-theme";
  var root = document.documentElement;

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function stored() { return localStorage.getItem(KEY); }
  function effective() {
    var s = stored();
    if (s === "light" || s === "dark") return s;
    return systemDark() ? "dark" : "light";
  }
  function apply(theme) { root.setAttribute("data-theme", theme); }
  function icon(t) { return t === "dark" ? "\u2600\ufe0f" : "\uD83C\uDF19"; }
  function label(t) { return t === "dark" ? "Switch to light mode" : "Switch to dark mode"; }

  function build() {
    var current = effective();
    apply(current);

    var btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";
    btn.textContent = icon(current);
    btn.title = label(current);
    btn.setAttribute("aria-label", label(current));

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(KEY, next);
      apply(next);
      btn.textContent = icon(next);
      btn.title = label(next);
      btn.setAttribute("aria-label", label(next));
    });

    document.body.appendChild(btn);

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (stored()) return;
        var t = e.matches ? "dark" : "light";
        apply(t); btn.textContent = icon(t); btn.title = label(t);
        btn.setAttribute("aria-label", label(t));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else { build(); }
})();
