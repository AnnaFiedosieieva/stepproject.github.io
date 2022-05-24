const sliderTop = document.querySelectorAll(".slider-item-top");
console.log(sliderTop);
const sliderBottom = document.querySelectorAll(".slider-item");
console.log(sliderBottom);

sliderBottom.forEach((e, index) => {
  e.addEventListener("click", (elem) => {
    sliderBottom.forEach((e) => {
      e.classList.remove("active");
    });
    sliderTop.forEach((e) => {
      e.classList.remove("active");
    });
    elem.target.classList.add("active");
    sliderTop[index].classList.add("active");
  });
});
