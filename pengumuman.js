const id = new URLSearchParams(location.search).get('id');
const data = PENGUMUMAN[id];

if (!data) {
  document.getElementById('notFound').hidden = false;
} else {
  document.title = data.judul + ' — PUSKANAS';
  document.getElementById('detailContent').hidden = false;

  const badge = document.getElementById('badge');
  badge.className = 'papan-badge ' + data.badgeClass;
  badge.textContent = data.badgeText;

  const tanggal = document.getElementById('tanggal');
  tanggal.textContent = data.tanggal;
  tanggal.setAttribute('datetime', data.tanggalISO);

  document.getElementById('judul').textContent = data.judul;
  document.getElementById('brand').textContent = data.brand;
  document.getElementById('brandInisial').textContent = data.brand.charAt(0);
  document.getElementById('isi').textContent = data.isi;
}
