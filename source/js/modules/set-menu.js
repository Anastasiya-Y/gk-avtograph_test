import {isEscapeKey} from '../vendor/utils.js';

const menuOpenElement = document.querySelector('[data-open-menu]');
const body = document.querySelector('body');
const menu = document.querySelector('[data-menu]');

const menuToggle = () => {
  menu.classList.toggle('is-open');
  if (!menu.classList.contains('is-open')) {
    body.classList.remove('scroll-lock');
  } else {
    body.classList.add('scroll-lock');
  }
};

const closeMenu = () => {
  menu.classList.remove('is-open');
  body.classList.remove('scroll-lock');
};

const setMenu = () => {
  if (menuOpenElement) {
    menuOpenElement.addEventListener('click', () => {
      menuToggle();
    });
  }

  // Добавляем закрытие меню по клавише Esc
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      if (document.querySelector('.main-header__down.is-open')) {
        closeMenu();
      }
    }
  });

  // Добавляем закрытие меню по клику вне меню
  menu.addEventListener('click', (evt) => {
    if (!evt.target.closest('.main-header__down')) {
      closeMenu();
    }
  });
};

export {setMenu};
