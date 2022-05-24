const buttonLoadMoreWork = document.querySelector(
  ".work>.container>.button-load-more"
);
const workImages = document.querySelectorAll(
  ".work>.container>.images-grid-container>.work-img"
);
const loading = document.querySelector(".centered");
const listWork = document.querySelectorAll(".work>.container>.list>.list-item");
listWork.forEach((e) => {
  e.addEventListener("click", (e) => {
    listWork.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
    if (!e.target.closest(".list-item-link")) {
      workImages.forEach((elem) => {
        elem.classList.remove("filter");
        if (elem.dataset.filter === e.target.dataset.filter) {
          elem.classList.add("filter");
        } else if (e.target.dataset.filter === "all") {
          workImages.forEach((e) => e.classList.add("filter"));
        }
      });
    }
  });
});

buttonLoadMoreWork.addEventListener("click", (e) => {
  loading.classList.add("active");
  buttonLoadMoreWork.classList.add("hide");

  setTimeout(() => {
    loading.classList.remove("active");
    workImages.forEach((e) => {
      if (!e.classList.contains("load-active")) {
        e.classList.add("load-active");
      }
    });
  }, 1500);
});
