jQuery(function ($) {
  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
  });
});

const gridItem = document.querySelectorAll(".grid-item");

const btnLoadMore = document.querySelector(
  ".gallery>.container>.button-load-more"
);

const loadingGallery = document.querySelector(".gallery>.container>.centered");

btnLoadMore.addEventListener("click", (e) => {
  loadingGallery.classList.add("active");
  btnLoadMore.classList.add("hide");
  setTimeout(() => {
    loadingGallery.classList.remove("active");
    gridItem.forEach((e) => {
      if (!e.classList.contains("active")) {
        e.classList.add("active");
        jQuery(function ($) {
          $(".grid").masonry({
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",
          });
        });
      }
    });
  
  }, 1500);
});
