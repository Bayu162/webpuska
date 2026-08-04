(function () {
  const grid = document.getElementById('testimoniGrid');
  const empty = document.getElementById('testimoniEmpty');
  const SUMBER_LABEL = { peserta: 'Peserta', orangtua: 'Orang Tua', guru: 'Guru', sekolah: 'Sekolah', mitra: 'Mitra', alumni: 'Alumni' };

  function render(sumber) {
    const list = sumber === 'semua' ? TESTIMONI : TESTIMONI.filter(t => t.sumber === sumber);
    grid.innerHTML = '';
    empty.hidden = list.length > 0;

    list.forEach(t => {
      const card = document.createElement('article');
      card.className = 'testimoni-card';

      const head = document.createElement('div');
      head.className = 'testimoni-card-head';

      if (t.foto) {
        const img = document.createElement('img');
        img.src = t.foto;
        img.alt = t.nama;
        img.loading = 'lazy';
        img.className = 'testimoni-foto';
        head.appendChild(img);
      } else {
        const avatar = document.createElement('div');
        avatar.className = 'testimoni-avatar';
        avatar.textContent = t.nama.charAt(0);
        head.appendChild(avatar);
      }

      const nama = document.createElement('div');
      nama.className = 'testimoni-nama';
      nama.textContent = t.nama;
      head.appendChild(nama);
      card.appendChild(head);

      const badge = document.createElement('span');
      badge.className = 'testimoni-badge';
      badge.textContent = SUMBER_LABEL[t.sumber] || t.sumber;
      card.appendChild(badge);

      const isi = document.createElement('p');
      isi.className = 'testimoni-isi';
      isi.textContent = '“' + t.isi + '”';
      card.appendChild(isi);

      const statusAsal = document.createElement('div');
      statusAsal.className = 'testimoni-status';
      statusAsal.textContent = t.statusAsal;
      card.appendChild(statusAsal);

      const meta = document.createElement('div');
      meta.className = 'testimoni-meta';
      meta.textContent = t.event + ' · ' + t.tahun;
      card.appendChild(meta);

      grid.appendChild(card);
    });
  }

  function renderBg() {
    const bg = document.getElementById('testimoniBg');
    if (!bg) return;
    const COLS = 6;
    const REPEAT = 3; // ulang data per kolom biar cukup tinggi menutupi section

    for (let c = 0; c < COLS; c++) {
      const col = document.createElement('div');
      col.className = 'testimoni-bg-col' + (c % 2 === 1 ? ' is-reverse' : '');

      let unit = [];
      for (let r = 0; r < REPEAT; r++) {
        TESTIMONI.forEach((_, i) => unit.push(TESTIMONI[(i + c) % TESTIMONI.length]));
      }

      unit.concat(unit).forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimoni-bg-card';

        const avatar = document.createElement('div');
        avatar.className = 'testimoni-bg-avatar';
        avatar.textContent = t.nama.charAt(0);

        const nama = document.createElement('div');
        nama.className = 'testimoni-bg-nama';
        nama.textContent = t.nama;

        const isi = document.createElement('div');
        isi.className = 'testimoni-bg-isi';
        isi.textContent = t.isi;

        card.append(avatar, nama, isi);
        col.appendChild(card);
      });

      bg.appendChild(col);
    }
  }

  document.getElementById('testimoniFilter').addEventListener('click', e => {
    const btn = e.target.closest('.testimoni-chip');
    if (!btn) return;
    document.querySelectorAll('.testimoni-chip').forEach(c => c.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.dataset.sumber);
  });

  render('semua');
  renderBg();
})();
