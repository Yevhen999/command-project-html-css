(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchise-open]"),
    modal: document.querySelector("[data-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
