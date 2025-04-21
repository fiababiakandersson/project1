const printButton = document.getElementById('printButton');
const printerContainer = document.querySelector('.printerContainer');
const closeButton = document.querySelector('.close-popup');
const cancelButton = document.getElementById('cancelButton');

function closePopup() {
  printerContainer.style.display = 'none';
  document.body.style.overflow = '';
}

printButton.addEventListener('click', () => {
  printerContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

cancelButton.addEventListener('click', closePopup);

printerContainer.addEventListener('click', (e) => {
  if (e.target === printerContainer) {
    closePopup();
  }
});