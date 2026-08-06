(() => {
  "use strict";

  const scriptElement = document.currentScript || document.querySelector('script[src*="components.js"]');
  if (!scriptElement) return;

  const scriptUrl = new URL(scriptElement.src, window.location.href);
  const siteRootUrl = new URL("../../", scriptUrl);
  const rootHref = siteRootUrl.href;

  const normalizedPath = window.location.pathname.replace(/\/+$/, "");
  const isIndexPage =
    normalizedPath === "" ||
    normalizedPath === "/" ||
    normalizedPath.endsWith("/index.html");

  document.body.classList.toggle("is-index-page", isIndexPage);
  document.body.classList.toggle("is-inner-page", !isIndexPage);

  const resolveTemplate = (html) => html.replaceAll("{{ROOT}}", rootHref);

  async function mountComponent(mountId, componentName, afterMount) {
    const mountPoint = document.getElementById(mountId);
    if (!mountPoint) return;

    try {
      const componentUrl = new URL(`components/${componentName}.html`, siteRootUrl);
      const response = await fetch(componentUrl, { cache: "no-cache" });

      if (!response.ok) {
        throw new Error(`Gagal memuat ${componentName}: ${response.status}`);
      }

      const template = document.createElement("template");
      template.innerHTML = resolveTemplate(await response.text()).trim();
      const component = template.content.firstElementChild;

      if (!component) {
        throw new Error(`Komponen ${componentName} kosong.`);
      }

      mountPoint.replaceWith(component);
      if (typeof afterMount === "function") afterMount(component);
    } catch (error) {
      console.error(error);
      mountPoint.setAttribute("hidden", "");
    }
  }

  mountComponent("site-navbar", "navbar", (navbar) => {
    const homeButton = navbar.querySelector("[data-non-index-only]");
    if (isIndexPage && homeButton) homeButton.remove();
  });

  mountComponent("site-footer", "footer", (footer) => {
    const year = footer.querySelector("[data-current-year]");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
