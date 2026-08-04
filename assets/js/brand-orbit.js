(() => {
  'use strict';

  const stage = document.querySelector('[data-brand-orbit]');
  const toggleButton = document.querySelector('[data-orbit-toggle]');

  if (!stage || !toggleButton) {
    return;
  }

  const icon = toggleButton.querySelector('[data-orbit-icon]');
  const label = toggleButton.querySelector('[data-orbit-label]');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const updateControl = (isPaused) => {
    stage.classList.toggle('is-paused', isPaused);
    toggleButton.setAttribute('aria-pressed', String(isPaused));
    toggleButton.setAttribute(
      'aria-label',
      isPaused ? 'Putar animasi brand' : 'Jeda animasi brand'
    );

    if (icon) {
      icon.textContent = isPaused ? '▶' : 'Ⅱ';
    }

    if (label) {
      label.textContent = isPaused ? 'Putar animasi' : 'Jeda animasi';
    }
  };

  updateControl(reduceMotionQuery.matches);

  toggleButton.addEventListener('click', () => {
    updateControl(!stage.classList.contains('is-paused'));
  });

  reduceMotionQuery.addEventListener?.('change', (event) => {
    updateControl(event.matches);
  });
})();
