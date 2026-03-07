/**
 * Giscus setup — loads the Giscus iframe and relays theme changes.
 * emit_metadata: 1 is set so Giscus posts reaction counts back via postMessage,
 * which social-counts.js listens for to update the like button count.
 */

(function () {
  const giscusContainer = document.getElementById("giscus_thread");
  if (!giscusContainer) return;

  // Read config injected by the liquid template via data attributes on the container,
  // falling back to values baked in at build time.
  const repo = "avineshpvs/avineshpolisetty";
  const repoId = "R_kgDORRtg-A";
  const category = "General";
  const categoryId = "DIC_kwDORRtg-M4C32Vw";

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function createGiscus() {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", currentTheme());
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    giscusContainer.appendChild(script);
  }

  // Relay theme changes to the Giscus iframe
  function sendThemeToGiscus(theme) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, "https://giscus.app");
  }

  // Listen for metadata messages from Giscus (emit_metadata: 1)
  // and update the like button count with the real reaction total
  window.addEventListener("message", function (event) {
    if (event.origin !== "https://giscus.app") return;
    const data = event.data;
    if (!data || !data.giscus || !data.giscus.discussion) return;

    const reactions = data.giscus.discussion.reactions;
    if (!reactions) return;

    // Sum all reaction counts as the "like" total
    const total = Object.values(reactions).reduce(function (sum, val) {
      return sum + (typeof val === "number" ? val : 0);
    }, 0);

    const countEl = document.querySelector(".share-like-btn .share-count");
    if (countEl && total > 0) countEl.textContent = total >= 1000 ? (total / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(total);
  });

  // Watch for theme toggle and relay to Giscus
  const observer = new MutationObserver(function () {
    sendThemeToGiscus(currentTheme());
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  createGiscus();
})();
