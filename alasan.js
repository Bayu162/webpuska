(function () {
  const grid = document.getElementById('alasanGrid');
  if (!grid) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  grid.querySelectorAll('.alasan-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${y * -14}deg) rotateY(${x * 14}deg) scale(1.03)`;
    });

    card.addEventListener('mouseenter', () => card.classList.add('is-hovered'));

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
      card.style.transform = '';
    });
  });
})();
