const serviceListItem = document.querySelectorAll(
  ".service>.container>.list>.list-item"
);
const serviceDescription = document.querySelectorAll(
  ".service>.container>.service-description"
);

serviceListItem.forEach((e, index) => {
  e.addEventListener("click", (e) => {
    if (!e.target.closest(".list-item-link")) {
      serviceListItem.forEach((e) => {
        e.classList.remove("active");
        e.children[1].classList.remove("active");
      });
      serviceDescription.forEach((e) => {
        e.classList.remove("active");
      });
      e.target.classList.add("active");
      e.target.children[1].classList.add("active");
      serviceDescription[index].classList.add("active");
    }
  });
});

