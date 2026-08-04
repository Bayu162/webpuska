// Render kartu "Ekosistem Brand" di index.html dari data BRAND (data-brand.js).
// Struktur dibuat ringkas: logo, fokus brand, peserta, event utama, dan satu aksi.
(function () {
  const grid = document.getElementById('ekosistemGrid');
  if (!grid || typeof BRAND === 'undefined') return;

  const urutan = ['puskanas', 'presmanesia', 'fosnas', 'gemanesia'];
  const warnaBrand = {
    puskanas: {
      accent: '#e97f19',
      
      ring: 'rgba(233, 127, 25, 0.09)'
    },
    presmanesia: {
      accent: '#0b7087',
      
      ring: 'rgba(11, 112, 135, 0.09)'
    },
    fosnas: {
      accent: '#0864a5',
      
      ring: 'rgba(8, 100, 165, 0.09)'
    },
    gemanesia: {
      accent: '#10a3b5',
      
      ring: 'rgba(16, 163, 181, 0.09)'
    }
  };

  grid.innerHTML = urutan.map((id, index) => {
    const brand = BRAND[id];
    const warna = warnaBrand[id];
    const eventUtama = brand.contohEvent[0];
    const nomor = String(index + 1).padStart(2);

    return `
      <article class="ekosistem-card ekosistem-card--${id}"
        style="--brand-accent:${warna.accent}; --brand-soft:${warna.soft}; --brand-ring:${warna.ring};">
        <a class="ekosistem-card-link" href="brand/${id}.html" aria-label="Lihat profil brand ${brand.nama}">
          <div class="ekosistem-card-top">
            <div class="ekosistem-logo-shell">
              <img class="ekosistem-logo" src="${brand.logo}" alt="Logo ${brand.nama}" loading="lazy" decoding="async">
            </div>
            <span class="ekosistem-index" aria-hidden="true">${nomor}</span>
          </div>

          <div class="ekosistem-card-copy">
            <h3>${brand.nama}</h3>
            <p class="ekosistem-tagline">${brand.tagline}</p>
            <div class="ekosistem-meta">
              <span class="ekosistem-meta-item">${brand.targetPeserta}</span>
              <span class="ekosistem-meta-item">${eventUtama}</span>
            </div>
          </div>

          <span class="ekosistem-card-action">
            <span>Kenali brand</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a>
      </article>`;
  }).join('');
})();
