const newItemsContainer = document.querySelector('.new-items__container');

const initSwiper = () => {
  const newItemsSwiper = new Swiper(newItemsContainer, {
    // containerModifierClass: 'new-items__',
    // wrapperClass: 'new-items__wrapper',
    effect: 'coverflow',
    // watchSlidesProgress: true,
    centerInsufficientSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      // scale: 0.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.new-items__swiper-button--next',
      prevEl: '.new-items__swiper-button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
};

export {initSwiper};
