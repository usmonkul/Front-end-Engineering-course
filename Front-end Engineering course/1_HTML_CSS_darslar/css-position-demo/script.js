/**
 * CSS Position Interactive Demo
 * Senior Front-end Engineer — Educational Tool
 */

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target-element');
  const positionBtns = document.querySelectorAll('.position-buttons button');
  const topSlider = document.getElementById('top-slider');
  const leftSlider = document.getElementById('left-slider');
  const rightSlider = document.getElementById('right-slider');
  const bottomSlider = document.getElementById('bottom-slider');
  const topValue = document.getElementById('top-value');
  const leftValue = document.getElementById('left-value');
  const rightValue = document.getElementById('right-value');
  const bottomValue = document.getElementById('bottom-value');
  const codeContent = document.getElementById('code-content');
  const sandbox = document.getElementById('sandbox');

  let currentPosition = 'static';

  const isAuto = (val) => String(val) === '-1';

  function updateTarget() {
    target.style.position = currentPosition;
    target.style.top = currentPosition === 'static' ? '' : topSlider.value + 'px';
    target.style.left = currentPosition === 'static' ? '' : leftSlider.value + 'px';
    target.style.right = !isAuto(rightSlider.value) ? rightSlider.value + 'px' : '';
    target.style.bottom = !isAuto(bottomSlider.value) ? bottomSlider.value + 'px' : '';

    topValue.textContent = topSlider.value;
    leftValue.textContent = leftSlider.value;
    rightValue.textContent = isAuto(rightSlider.value) ? 'auto' : rightSlider.value + 'px';
    bottomValue.textContent = isAuto(bottomSlider.value) ? 'auto' : bottomSlider.value + 'px';

    updateCodeDisplay();
  }

  function updateCodeDisplay() {
    let css = `.target {\n  position: ${currentPosition};`;
    if (currentPosition !== 'static') {
      css += `\n  top: ${topSlider.value}px;`;
      css += `\n  left: ${leftSlider.value}px;`;
      if (!isAuto(rightSlider.value)) css += `\n  right: ${rightSlider.value}px;`;
      if (!isAuto(bottomSlider.value)) css += `\n  bottom: ${bottomSlider.value}px;`;
    }
    css += '\n}';
    codeContent.textContent = css;
  }

  positionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      positionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPosition = btn.dataset.position;

      topSlider.disabled = currentPosition === 'static';
      leftSlider.disabled = currentPosition === 'static';
      rightSlider.disabled = currentPosition === 'static';
      bottomSlider.disabled = currentPosition === 'static';

      if (currentPosition === 'static') {
        target.style.top = '';
        target.style.left = '';
        target.style.right = '';
        target.style.bottom = '';
        topSlider.value = 0;
        leftSlider.value = 0;
        rightSlider.value = -1;
        bottomSlider.value = -1;
      }

      updateTarget();
    });
  });

  [topSlider, leftSlider, rightSlider, bottomSlider].forEach(slider => {
    slider.addEventListener('input', updateTarget);
  });

  updateTarget();

  // Modal
  const modalOverlay = document.getElementById('modal-overlay');
  const openModalBtn = document.getElementById('open-modal');
  const closeModalBtn = document.getElementById('close-modal');

  openModalBtn?.addEventListener('click', () => {
    modalOverlay?.classList.add('visible');
  });

  function closeModal() {
    modalOverlay?.classList.remove('visible');
  }

  closeModalBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalOverlay?.querySelector('.modal-content')?.addEventListener('click', (e) => e.stopPropagation());

  // Dropdown
  const dropdownTrigger = document.getElementById('dropdown-trigger');
  const dropdownMenu = document.getElementById('dropdown-menu');

  dropdownTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu?.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    dropdownMenu?.classList.remove('open');
  });

  dropdownMenu?.addEventListener('click', (e) => e.stopPropagation());

  // Scroll-to-top button (fixed)
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
