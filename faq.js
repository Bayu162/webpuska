(function () {
  const list = document.getElementById('faqList');
  const empty = document.getElementById('faqEmpty');

  function render(kategori) {
    const data = kategori === 'semua' ? FAQ : FAQ.filter(f => f.kategori === kategori);
    list.innerHTML = '';
    empty.hidden = data.length > 0;

    data.forEach(f => {
      const item = document.createElement('div');
      item.className = 'faq-item';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'faq-question';
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span>' + f.pertanyaan + '</span><span class="faq-icon">+</span>';

      const answer = document.createElement('div');
      answer.className = 'faq-answer';
      answer.hidden = true;
      const p = document.createElement('p');
      p.textContent = f.jawaban;
      answer.appendChild(p);

      btn.addEventListener('click', () => {
        const isOpen = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
        answer.hidden = !isOpen;
      });

      item.append(btn, answer);
      list.appendChild(item);
    });
  }

  document.getElementById('faqFilter').addEventListener('click', e => {
    const btn = e.target.closest('.testimoni-chip');
    if (!btn) return;
    document.querySelectorAll('#faqFilter .testimoni-chip').forEach(c => c.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.dataset.kategori);
  });

  render('semua');
})();
