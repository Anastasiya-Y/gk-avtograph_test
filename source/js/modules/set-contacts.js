import {isEscapeKey} from '../vendor/utils.js';

const contactsOpenElements = document.querySelectorAll('[data-open-contacts]');
const body = document.querySelector('body');
const contacts = document.querySelector('[data-contacts]');
const contactsCloseElements = document.querySelectorAll('[data-close-contacts]');

const openContacts = () => {
  contacts.classList.add('is-open');
  body.classList.add('scroll-lock');
};

const closeContacts = () => {
  contacts.classList.remove('is-open');
  body.classList.remove('scroll-lock');
};

const setContacts = () => {
  // Добавляем слушатели событий на все элементы открытия контактов
  if (contactsOpenElements.length > 0) {
    for (let i = 0; i < contactsOpenElements.length; i++) {
      const contactsOpenElement = contactsOpenElements[i];
      contactsOpenElement.addEventListener('click', () => {
        openContacts();
      });
    }
  }

  // Добавляем слушатели событий на все элементы закрытия контактов
  if (contactsCloseElements.length > 0) {
    for (let i = 0; i < contactsCloseElements.length; i++) {
      const contactsCloseElement = contactsCloseElements[i];
      contactsCloseElement.addEventListener('click', () => {
        closeContacts();
      });
    }
  }

  // Добавляем закрытие контактов по клавише Esc
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      if (document.querySelector('.contacts-sidebar.is-open')) {
        closeContacts();
      }
    }
  });

  // Добавляем закрытие контактов по клику вне модалки
  contacts.addEventListener('click', (evt) => {
    if (!evt.target.closest('.contacts-sidebar__content')) {
      closeContacts();
    }
  });
};

export {setContacts};
