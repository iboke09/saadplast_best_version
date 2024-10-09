document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonial-slider", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    focus: "left",
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    gap: "0px",
    pagination: false,
    arrows: false,
    breakpoints: {
      767: {
        type: "slide",
      },
    },
  }).mount();
});

// function updateActiveState() {
//   if (window.matchMedia("(max-width: 767px)").matches) {
//     const activeElements = document.querySelectorAll('.splide__slide.is-active');
//     activeElements.forEach(function (el) {
//       el.classList.remove('is-active');
//     });
//   }
// }

// updateActiveState();
// window.addEventListener("resize", updateActiveState);

let burgerMenu = document.getElementById("burger-menu");
let navMenu = document.getElementById("navMenu");
let clicked = document.getElementById("clicked");
let hoverEffect = document.getElementById("hover-effect");
let olurmu = document.getElementById("olurmu");
hoverEffect.addEventListener("click", () => {
  if (olurmu.style.display === "none") {
    olurmu.style.display = "block";
} else {
    olurmu.style.display = "none";
}

});
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
