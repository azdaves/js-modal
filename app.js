const modalEl = document.querySelector(".modal");
const modalTriggerEl = document.querySelector(".trigger");
const closeModalEl = document.querySelector(".close");


function toggleModal() {
  modalTriggerEl.addEventListener("click", function() {
    modalEl.classList.add("open");
   
  })
  closeModalEl.addEventListener("click", function() {
    modalEl.classList.remove("open");
   
  })

  window.addEventListener("click", function(e) {
    if (e.target === modalEl) {
              modalEl.classList.remove("open");
            }
  })
}

toggleModal();