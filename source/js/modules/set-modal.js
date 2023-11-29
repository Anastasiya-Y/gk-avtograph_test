import {isEscapeKey} from '../vendor/utils.js';

const modalOpenElements = document.querySelectorAll('[data-open-modal]');
const body = document.querySelector('body');
const modal = document.querySelector('[data-modal]');
const modalCloseElements = document.querySelectorAll('[data-close-modal]');
const form = document.querySelector('[data-form]');

const openModal = () => {
  modal.classList.add('is-open');
  body.classList.add('scroll-lock');
};

const closeModal = () => {
  modal.classList.remove('is-open');
  const menu = document.querySelector('[data-menu]');
  if (!menu.classList.contains('is-open')) {
    body.classList.remove('scroll-lock');
  }
};

const setModal = () => {
  // Добавляем слушатели событий на все элементы открытия модалки
  if (modalOpenElements.length > 0) {
    for (let i = 0; i < modalOpenElements.length; i++) {
      const modalOpenElement = modalOpenElements[i];
      modalOpenElement.addEventListener('click', () => {
        openModal();
      });
    }
  }

  // Добавляем слушатели событий на все элементы закрытия модалки
  if (modalCloseElements.length > 0) {
    for (let i = 0; i < modalCloseElements.length; i++) {
      const modalCloseElement = modalCloseElements[i];
      modalCloseElement.addEventListener('click', () => {
        closeModal();
      });
    }
  }

  // Добавляем закрытие модалки по клавише Esc
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      if (document.querySelector('.modal.is-open')) {
        closeModal();
      }
    }
  });

  // Добавляем закрытие модалки по клику вне модалки
  modal.addEventListener('click', (evt) => {
    if (!evt.target.closest('.modal__content')) {
      closeModal(evt.target.closest('.modal'));
    }
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    closeModal();
  });
};

export {setModal};
