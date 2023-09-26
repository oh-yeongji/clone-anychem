window.addEventListener("load", function () {
  const modal = this.document.querySelector(".modal-dim");
  const closeBtn = this.document.querySelector(".modal-close");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
