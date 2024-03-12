let containerSliderBefore = document.querySelector(".example__logo-cat-before");
let containerSliderAfter = document.querySelector(".example__logo-cat-after");
let rightArrow = document.querySelector(".example__silder-after");
let leftArrow = document.querySelector(".example__silder-before");


rightArrow.addEventListener("click", function(evt){
    evt.preventDefault();
    if(containerSliderAfter.classList.contains("visually-hidden")){
    containerSliderAfter.classList.remove("visually-hidden");
    containerSliderBefore.classList.add("visually-hidden");
      if(leftArrow.classList.contains("example__slider-text--current")){
      leftArrow.classList.remove("example__slider-text--current");
      rightArrow.classList.add("example__slider-text--current");
    }
  }
})


leftArrow.addEventListener("click", function(evt){
    evt.preventDefault();
    if(containerSliderBefore.classList.contains("visually-hidden")){
    containerSliderBefore.classList.remove("visually-hidden");
    containerSliderAfter.classList.add("visually-hidden");
      if(rightArrow.classList.contains("example__slider-text--current")){
      rightArrow.classList.remove("example__slider-text--current");
      leftArrow.classList.add("example__slider-text--current");
    }
  }
})


// Меню навигации

let openNav = document.querySelector(".logo__burger");
let closeNav = document.querySelector(".logo__exit");
let confitionNav = document.querySelector(".nav");


closeNav.addEventListener("click", function(evt){
    evt.preventDefault();
      confitionNav.classList.remove("nav--opened");
      confitionNav.classList.add("nav--closed");
      closeNav.classList.remove("toggle--active");
      closeNav.classList.add("toggle--inactive");
      openNav.classList.remove("toggle--active");
      openNav.classList.add("toggle--active");
})

openNav.addEventListener("click", function(evt){
  evt.preventDefault();
    confitionNav.classList.remove("nav--closed");
    confitionNav.classList.add("nav--opened");
    openNav.classList.remove("toggle--active");
    openNav.classList.add("toggle--inactive");
    closeNav.classList.add("toggle--active");
})

