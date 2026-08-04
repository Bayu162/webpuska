// Populate halaman detail brand. Tiap brand/<id>.html menaruh <body data-brand="id">,
// script ini yang mengisi kontennya dari data BRAND (data-brand.js) — pola sama dengan
// detail.js/pengumuman.js: satu sumber data, satu script render.
(function () {
  const id = document.body.getAttribute('data-brand');
  const b = BRAND[id];
  if (!b) return;

  document.title = b.nama + ' — Ekosistem PUSKANAS';

  document.getElementById('logo').src = b.logo;
  document.getElementById('logo').alt = 'Logo ' + b.nama;
  document.getElementById('nama').textContent = b.nama;
  document.getElementById('tagline').textContent = b.tagline;
  document.getElementById('tentang').textContent = b.tentang;
  document.getElementById('positioning').textContent = b.positioning;
  document.getElementById('targetPeserta').textContent = b.targetPeserta;

  document.getElementById('eventUtama').innerHTML = b.eventUtama.map(ev =>
    `<li><strong>${ev.nama}</strong><span>${ev.info}</span></li>`
  ).join('');

  document.getElementById('bidangKompetisi').innerHTML = b.bidangKompetisi
    .map(bid => `<span class="ekosistem-chip">${bid}</span>`).join('');

  document.getElementById('capaian').innerHTML = b.capaian.map(c =>
    `<div class="brand-stat"><strong>${c.angka}</strong><span>${c.label}</span></div>`
  ).join('');

  document.getElementById('testimoniIsi').textContent = '“' + b.testimoni.isi + '”';
  document.getElementById('testimoniNama').textContent = b.testimoni.nama;
  document.getElementById('testimoniPeran').textContent = b.testimoni.peran;

  document.getElementById('sosialInstagram').href = b.sosial.instagram;
  document.getElementById('sosialTiktok').href = b.sosial.tiktok;
  document.getElementById('sosialYoutube').href = b.sosial.youtube;
})();
