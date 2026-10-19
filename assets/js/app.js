/* ══════════════════════════════════════════════════════════
   app.js — Theme toggle for the Security & Risk Management E-Portfolio.

   Persists the chosen theme ("light" / "dark") in localStorage under
   the key "srm-theme" and applies it via the data-theme attribute on
   <html>, which dark.css hooks into.
   ══════════════════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = "srm-theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (btn) {
        btn.textContent = "○ Light mode";
        btn.setAttribute("aria-pressed", "true");
      }
    } else {
      root.removeAttribute("data-theme");
      if (btn) {
        btn.textContent = "● Dark mode";
        btn.setAttribute("aria-pressed", "false");
      }
    }
  }

  // Apply saved preference (or default to light) on load.
  const saved = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(saved);

  if (btn) {
    btn.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();
