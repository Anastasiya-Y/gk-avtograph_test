import {isEscapeKey} from '../vendor/utils.js';

const searchOpenElements = document.querySelectorAll('[data-open-search]');
const body = document.querySelector('body');
const search = document.querySelector('[data-search]');
const searchCloseElements = document.querySelectorAll('[data-close-search]');

const openSearch = () => {
  search.classList.add('is-open');
  body.classList.add('scroll-lock');
};

const closeSearch = () => {
  search.classList.remove('is-open');
  body.classList.remove('scroll-lock');
};

const setSearch = () => {
  // Добавляем слушатели событий на все элементы открытия контактов
  if (searchOpenElements.length > 0) {
    for (let i = 0; i < searchOpenElements.length; i++) {
      const searchOpenElement = searchOpenElements[i];
      searchOpenElement.addEventListener('click', () => {
        openSearch();
      });
    }
  }

  // Добавляем слушатели событий на все элементы закрытия контактов
  if (searchCloseElements.length > 0) {
    for (let i = 0; i < searchCloseElements.length; i++) {
      const searchCloseElement = searchCloseElements[i];
      searchCloseElement.addEventListener('click', () => {
        closeSearch();
      });
    }
  }

  // Добавляем закрытие контактов по клавише Esc
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      if (document.querySelector('.search.is-open')) {
        closeSearch();
      }
    }
  });

  // Добавляем закрытие контактов по клику вне модалки
  search.addEventListener('click', (evt) => {
    if (!evt.target.closest('.search__form')) {
      closeSearch();
    }
  });
};

export {setSearch};
