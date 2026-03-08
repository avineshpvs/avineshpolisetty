/**
 * Giscus setup — loads the reactions-only Giscus widget.
 * Uses custom theme CSS URLs that @import the built-in Giscus theme
 * and hide the comments section, so only the emoji reactions bar shows.
 * emit_metadata: 1 broadcasts reaction counts back to the like button.
 */

(function () {
  const giscusContainer = document.getElementById("giscus_thread");
  if (!giscusContainer) return;

  const base = window.location.origin + (window.location.pathname.startsWith("/avineshpolisetty") ? "/avineshpolisetty" : "");
  const lightTheme = base + "/assets/css/giscus-reactions-light.css";
  const darkTheme = base + "/assets/css/giscus-reactions-dark.css";

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function createGiscus() {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "avineshpvs/avineshpolisetty");
    script.setAttribute("data-repo-id", "R_kgDORRtg-A");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDORRtg-M4C32Vw");
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", isDark() ? darkTheme : lightTheme);
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    giscusContainer.appendChild(script);
  }

  // Relay theme changes to the Giscus iframe
  function sendThemeToGiscus() {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: isDark() ? darkTheme : lightTheme } } }, "https://giscus.app");
  }

  // Listen for metadata messages (emit_metadata: 1) and update the like button count
  window.addEventListener("message", function (event) {
    if (event.origin !== "https://giscus.app") return;
    const data = event.data;
    if (!data || !data.giscus || !data.giscus.discussion) return;

    const reactions = data.giscus.discussion.reactions;
    if (!reactions) return;

    const total = Object.values(reactions).reduce(function (sum, val) {
      return sum + (typeof val === "number" ? val : 0);
    }, 0);

    const countEl = document.querySelector(".share-like-btn .share-count");
    if (countEl && total > 0) {
      countEl.textContent = total >= 1000 ? (total / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(total);
    }
  });

  // Watch for theme toggle and relay to Giscus
  new MutationObserver(sendThemeToGiscus).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  createGiscus();
})();
