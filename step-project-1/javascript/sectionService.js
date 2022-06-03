const serviceListItem = document.querySelectorAll(
  ".service>.container>.list>.list-item"
);
const serviceDescription = document.querySelectorAll(
  ".service>.container>.service-description-wrapper"
);

serviceListItem.forEach((e, index) => {
  e.addEventListener("click", (e) => {
    serviceListItem.forEach((e) => {
      e.classList.remove("active");
      e.children[0].classList.remove("active");
    });
    serviceDescription.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    e.target.children[0].classList.add("active");
    serviceDescription[index].classList.add("active");
  });
});
