let closeNav = document.querySelector(".logo__exit");
let openNav = document.querySelector(".logo__burger");
let confitionNav = document.querySelector(".nav");

closeNav.addEventListener("click", function (evt) {
  let openNav = document.querySelector(".logo__burger");
  evt.preventDefault();
  confitionNav.classList.remove("nav--opened");
  confitionNav.classList.add("nav--closed");
  closeNav.classList.remove("toggle--active");
  closeNav.classList.add("toggle--inactive");
  openNav.classList.remove("toggle--active");
  openNav.classList.add("toggle--active");
});

openNav.addEventListener("click", function (evt) {
  let openNav = document.querySelector(".logo__burger");
  evt.preventDefault();
  confitionNav.classList.remove("nav--closed");
  confitionNav.classList.add("nav--opened");
  openNav.classList.remove("toggle--active");
  openNav.classList.add("toggle--inactive");
  closeNav.classList.add("toggle--active");
});
