document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonial-slider", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    focus: "left",
    autoplay: true,
    interval: 7000,
    pauseOnHover: true,
    gap: "0px",
    pagination: false,
    arrows: false,
  }).mount();
});

let burgerMenu = document.getElementById("burger-menu");
let navMenu = document.getElementById("navMenu");
let clicked = document.getElementById("clicked");
burgerMenu.addEventListener("click", () => {
  clicked.style.cssText = "display: block";
  burgerMenu.style.cssText = "display: none";
  navMenu.style.cssText = "display: block";
});
clicked.addEventListener("click", () => {
  clicked.style.cssText = "display: none";
  burgerMenu.style.cssText = "display: block";
  navMenu.style.cssText = "display: none";
});

