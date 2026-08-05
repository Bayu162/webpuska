(function () {
  const grid = document.getElementById("ekosistemGrid");

  if (!grid || typeof BRAND === "undefined") {
    return;
  }

  const brandOrder = ["puskanas", "presmanesia", "fosnas", "gemanesia"];
  const brandColors = {
    puskanas: {
      accent: "#e97f19",
      soft: "rgba(233, 127, 25, 0.08)",
      ring: "rgba(233, 127, 25, 0.08)",
    },
    presmanesia: {
      accent: "#0b7087",
      soft: "rgba(11, 112, 135, 0.08)",
      ring: "rgba(11, 112, 135, 0.08)",
    },
    fosnas: {
      accent: "#0864a5",
      soft: "rgba(8, 100, 165, 0.08)",
      ring: "rgba(8, 100, 165, 0.08)",
    },
    gemanesia: {
      accent: "#10a3b5",
      soft: "rgba(16, 163, 181, 0.08)",
      ring: "rgba(16, 163, 181, 0.08)",
    },
  };

  const markup = brandOrder
    .map((brandId) => {
      const brand = BRAND[brandId];
      const color = brandColors[brandId];

      if (!brand || !color) {
        return "";
      }

      const primaryEvent =
        Array.isArray(brand.contohEvent) && brand.contohEvent.length
          ? brand.contohEvent[0]
          : "Informasi event segera hadir";

      return `
      <article
        class="ekosistem-card ekosistem-card--${brandId}"
        style="--brand-accent:${color.accent}; --brand-soft:${color.soft}; --brand-ring:${color.ring};"
      >
        <a
          class="ekosistem-card-link"
          href="brand/${brandId}.html"
          aria-label="Lihat profil brand ${brand.nama}"
        >
          <div class="ekosistem-card-top">
            <div class="ekosistem-logo-shell">
              <img
                class="ekosistem-logo"
                src="${brand.logo}"
                alt="Logo ${brand.nama}"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>

          <div class="ekosistem-card-copy">
            <h3>${brand.nama}</h3>
            <p class="ekosistem-tagline">${brand.tagline}</p>
            <div class="ekosistem-meta">
              <span class="ekosistem-meta-item">${brand.targetPeserta}</span>
              <span class="ekosistem-meta-item">${primaryEvent}</span>
            </div>
          </div>

          <span class="ekosistem-card-action">
            <span>Kenali brand</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10h11M11 6l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </a>
      </article>`;
    })
    .join("");

  grid.innerHTML = markup;
})();
