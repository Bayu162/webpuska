(function () {
  const table = document.getElementById('kurasiTable');
  if (!table) return;

  Object.keys(KOMPETISI).forEach(id => {
    const k = KOMPETISI[id];

    const row = document.createElement('div');
    row.className = 'kurasi-row';

    const info = document.createElement('div');
    info.className = 'kurasi-row-info';
    const title = document.createElement('div');
    title.className = 'kurasi-row-title';
    title.textContent = k.title;
    const meta = document.createElement('div');
    meta.className = 'kurasi-row-meta';
    meta.textContent = k.brand + ' · ' + k.tingkat + ' · ' + k.pelaksanaan;
    info.append(title, meta);

    const status = document.createElement('span');
    status.className = 'papan-badge is-informasi kurasi-status';
    status.textContent = 'Dalam Proses Pengajuan Kurasi';

    row.append(info, status);
    table.appendChild(row);
  });
})();
