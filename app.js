document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonial-slider', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    focus: 0, // لجعل المربع الأول هو المحور
    // autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    gap: '0px', // المسافة بين البطاقات
    pagination: false,
    arrows: false, // إخفاء أزرار التبديل
  }).mount();
});
