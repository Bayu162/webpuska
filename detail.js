const id = new URLSearchParams(location.search).get('id');
const data = KOMPETISI[id];

if (!data) {
  document.getElementById('notFound').hidden = false;
} else {
  document.title = data.title + ' — PUSKANAS';
  document.getElementById('detailContent').hidden = false;

  document.getElementById('posterBox').setAttribute('aria-label', 'Poster ' + data.title);
  document.getElementById('posterBox').querySelector('.placeholder-text').innerHTML =
    'Taruh file <strong>poster-' + id + '.jpg</strong> (rasio 4:5) di sini';

  const badge = document.getElementById('badge');
  badge.className = 'komp-badge ' + data.badgeClass;
  badge.textContent = data.badgeText;

  document.getElementById('judul').innerHTML = data.title + ' <span class="abbr">(' + data.abbr + ')</span>';
  document.getElementById('brandLine').textContent = 'Diselenggarakan oleh ' + data.brand;

  document.getElementById('tagRow').innerHTML = [
    'Jenjang ' + data.jenjang,
    'Tingkat ' + data.tingkat,
    data.metode
  ].map(t => '<span class="tag">' + t + '</span>').join('');

  document.getElementById('lede').textContent = data.lede;

  const ctaText = 'Daftar melalui Aplikasi ' + data.brand;
  document.getElementById('ctaDaftar').textContent = ctaText;
  document.getElementById('ctaDaftarBawah').textContent = ctaText;
  document.getElementById('finalCtaTitle').textContent = 'Siap ikut ' + data.abbr + '?';
}
