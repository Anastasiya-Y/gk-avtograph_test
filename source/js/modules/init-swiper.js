const newItemsContainer = document.querySelector('.new-items__container');

const initSwiper = () => {
  const newItemsSwiper = new Swiper(newItemsContainer, {
    navigation: {
      nextEl: '.new-items__button--next',
      prevEl: '.new-items__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
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
