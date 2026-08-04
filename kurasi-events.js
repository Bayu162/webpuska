(function () {
  const wrap = document.getElementById('kurasiEvents');
  if (!wrap || typeof KURASI_EVENTS === 'undefined') return;

  const STATUS_LABEL = {
    belum: 'Belum Diajukan',
    proses: 'Dalam Proses',
    revisi: 'Perlu Revisi',
    selesai: 'Terkurasi'
  };

  KURASI_EVENTS.forEach(k => {
    const status = k.status || 'proses';

    const row = document.createElement('div');
    row.className = 'kurasi-event-row';

    const info = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'kurasi-event-title';
    title.textContent = k.judul;
    const meta = document.createElement('div');
    meta.className = 'kurasi-event-meta';
    meta.textContent = k.sub + ' · ' + k.kategori + ' · ' + k.negara;
    info.append(title, meta);

    const badge = document.createElement('span');
    badge.className = 'kurasi-event-badge kurasi-badge--' + status;
    badge.textContent = STATUS_LABEL[status] || STATUS_LABEL.proses;

    row.append(info, badge);
    wrap.appendChild(row);
  });
})();
