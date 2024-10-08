document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonial-slider', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    focus: 'left',
    autoplay: true,
    interval: 7000,
    pauseOnHover: true,
    gap: '0px', // المسافة بين البطاقات
    pagination: false,
    arrows: false, // إخفاء أزرار التبديل
  }).mount();
});

