import {isEscapeKey} from '../vendor/utils.js';

const catalogOpenElements = document.querySelectorAll('[data-open-catalog]');
const body = document.querySelector('body');
const catalog = document.querySelector('[data-catalog]');
const catalogCloseElements = document.querySelectorAll('[data-close-catalog]');

const openCatalog = () => {
  catalog.classList.add('is-open');
  body.classList.add('scroll-lock');
};

const closeCatalog = () => {
  catalog.classList.remove('is-open');
  body.classList.remove('scroll-lock');
};

const setCatalog = () => {
  // Добавляем слушатели событий на все элементы открытия каталога
  if (catalogOpenElements.length > 0) {
    for (let i = 0; i < catalogOpenElements.length; i++) {
      const catalogOpenElement = catalogOpenElements[i];
      catalogOpenElement.addEventListener('click', () => {
        openCatalog();
      });
    }
  }

  // Добавляем слушатели событий на все элементы закрытия каталога
  if (catalogCloseElements.length > 0) {
    for (let i = 0; i < catalogCloseElements.length; i++) {
      const catalogCloseElement = catalogCloseElements[i];
      catalogCloseElement.addEventListener('click', () => {
        closeCatalog();
      });
    }
  }

  // Добавляем закрытие каталога по клавише Esc
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      if (document.querySelector('.catalog-sidebar.is-open')) {
        closeCatalog();
      }
    }
  });

  // Добавляем закрытие каталога по клику вне модалки
  catalog.addEventListener('click', (evt) => {
    if (!evt.target.closest('.catalog-sidebar__content')) {
      closeCatalog();
    }
  });
};

export {setCatalog};
