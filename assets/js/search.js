/* ══════════════════════════════════════════════════════════
   search.js — Filters the sidebar nav links as you type.

   Matches against the visible link text and against a
   data-keywords attribute on each <li>, so a search for
   "dread" can surface the Threat Modelling unit even if the
   word "dread" isn't in the link's visible label.
   ══════════════════════════════════════════════════════════ */

(function () {
  const input = document.getElementById("nav-search-input");
  if (!input) return;

  const items = Array.from(document.querySelectorAll(".nav-links li"));

  input.addEventListener("input", function () {
    const q = input.value.trim().toLowerCase();

    items.forEach(function (li) {
      if (!q) {
        li.hidden = false;
        return;
      }
      const label = (li.textContent || "").toLowerCase();
      const keywords = (li.getAttribute("data-keywords") || "").toLowerCase();
      const match = label.includes(q) || keywords.includes(q);
      li.hidden = !match;
    });
  });
})();
