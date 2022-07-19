(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-milk-open]'),
    closeModalBtn: document.querySelector('[data-modal-milk-close]'),
    modal: document.querySelector('[data-modal-milk]'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
