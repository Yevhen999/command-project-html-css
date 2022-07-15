    var swiper = new Swiper('.mySwiper', {
      // cssMode: true,
      // navigation: {
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
      // },
      speed: 1500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
      mousewheel: true,
      keyboard: true,
    });
