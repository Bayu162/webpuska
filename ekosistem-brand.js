// Render kartu "Ekosistem Brand" di index.html dari data BRAND (data-brand.js).
// Struktur dibuat ringkas: logo, fokus brand, peserta, event utama, dan satu aksi.
(function () {
  const grid = document.getElementById('ekosistemGrid');
  if (!grid || typeof BRAND === 'undefined') return;

  const urutan = ['puskanas', 'presmanesia', 'fosnas', 'gemanesia', 'porosnas'];
  const warnaBrand = {
    puskanas: {
    },
    presmanesia: {
    },
    fosnas: {
    },
    gemanesia: {
    },
    porosnas: {
    }
  };

  grid.innerHTML = urutan.map((id, index) => {
    const brand = BRAND[id];
    const warna = warnaBrand[id];
    const eventUtama = brand.contohEvent?.[0];
    const nomor = String(index + 1).padStart(2);
    const metaItems = Array.isArray(brand.meta) && brand.meta.length
      ? brand.meta
      : [brand.targetPeserta, eventUtama].filter(Boolean);
    const metaMarkup = metaItems.length
      ? `<div class="ekosistem-meta">${metaItems.map(item => `<span class="ekosistem-meta-item">${item}</span>`).join('')}</div>`
      : '';
    const detailUrl = brand.detailUrl === null ? null : (brand.detailUrl || `brand/${id}.html`);

    const cardContent = `
          <div class="ekosistem-card-top">
            <div class="ekosistem-logo-shell">
              <img class="ekosistem-logo" src="${brand.logo}" alt="Logo ${brand.nama}" loading="lazy" decoding="async">
            </div>
            <span class="ekosistem-index" aria-hidden="true">${nomor}</span>
          </div>

          <div class="ekosistem-card-copy">
            <h3>${brand.nama}</h3>
            <p class="ekosistem-tagline">${brand.tagline}</p>
            ${metaMarkup}
          </div>

          <span class="ekosistem-card-action">
            <span>${detailUrl ? 'Kenali brand' : 'Ekosistem PUSKANAS'}</span>
            ${detailUrl ? `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}
          </span>`;

    return `
      <article class="ekosistem-card ekosistem-card--${id}"
        style="--brand-accent:${warna.accent}; --brand-soft:${warna.soft || warna.ring}; --brand-ring:${warna.ring};">
        ${detailUrl
          ? `<a class="ekosistem-card-link" href="${detailUrl}" aria-label="Lihat profil brand ${brand.nama}">${cardContent}</a>`
          : `<div class="ekosistem-card-link ekosistem-card-link--static" aria-label="Brand ${brand.nama}">${cardContent}</div>`}
      </article>`;
  }).join('');
})();
