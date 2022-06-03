const sliderTop = document.querySelectorAll(".slider-item-top");
const sliderBottom = Array.from(document.querySelectorAll(".slider-item"));
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

sliderBottom.forEach((e, index) => {
  e.addEventListener("click", (elem) => {
    sliderBottom.forEach((e) => {
      e.classList.remove("active-img");
    });
    sliderTop.forEach((e) => {
      e.classList.remove("active");
    });
    elem.currentTarget.classList.add("active-img");
    sliderTop[index].classList.add("active");
  });
});

let currentImg = 0;
let newImg = 0;

const changeImg = () => {
  sliderBottom[currentImg].classList.remove("active-img");
  sliderBottom[newImg].classList.add("active-img");
  sliderTop[currentImg].classList.remove("active");
  sliderTop[newImg].classList.add("active");
};

prevBtn.addEventListener("click", (elem) => {
  sliderTop.forEach((e, i) => {
    if (e.classList.contains("active")) {
      currentImg = i;
      newImg = i - 1;
    }
  });
  if (currentImg == 0) {
    newImg = sliderTop.length - 1;
  }
  changeImg();
});

nextBtn.addEventListener("click", (elem) => {
  sliderTop.forEach((e, i) => {
    if (e.classList.contains("active")) {
      currentImg = i;
      newImg = i + 1;
    }
  });
  if (currentImg == (sliderTop.length- 1)) {
    newImg = 0;
  }
  changeImg();
});
