const promoContainer = document.querySelector('.promo__container');
const newItemsContainer = document.querySelector('.new-items__container');
const brandsContainer = document.querySelector('.brands__container');

const initSwiper = () => {
  const promoSwiper = new Swiper(promoContainer, {
    speed: 1500,
    navigation: {
      nextEl: '.promo__swiper-button--next',
      prevEl: '.promo__swiper-button--prev',
    },
    pagination: {
      el: '.promo__pagination',
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'promo__bullet',
      bulletActiveClass: 'promo__bullet--active',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
      },
    },
  });

  const newItemsSwiper = new Swiper(newItemsContainer, {
    navigation: {
      nextEl: '.new-items__swiper-button--next',
      prevEl: '.new-items__swiper-button--prev',
    },
    watchSlideProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      375: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });

  const brandsSwiper = new Swiper(brandsContainer, {
    navigation: {
      nextEl: '.brands__swiper-button--next',
      prevEl: '.brands__swiper-button--prev',
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 26,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 73,
      },
    },
  });
};

export {initSwiper};
