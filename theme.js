/* Apply saved theme before first paint to avoid a flash.
   External (not inline) so the site's Content-Security-Policy can stay
   strict: script-src 'self' with no unsafe-inline exception. */
(function () {
  var t = null;
  try { t = localStorage.getItem("td-theme"); } catch (e) { /* ignore */ }
  if (t !== "dark" && t !== "light") {
    t = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }
  document.documentElement.dataset.theme = t;
})();
