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

/*const modalOpenElements = document.querySelectorAll('[data-open-modal]');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const modal = document.querySelector('[data-modal]');
const modalCloseElements = document.querySelectorAll('[data-close-modal]');

let unlock = true;

const timeout = 300;

function modalOpen(currentModal) {
  if (currentModal && unlock) {
    const modalActive = document.querySelector('.modal.is-open');

    if (modalActive) {
      modalClose(modalActive, false);
    } else {
      lockBody();
    }

    currentModal.classList.add('is-open');
    currentModal.addEventListener('click', (evt) => {
      if (!evt.target.closest('.modal__content')) {
        modalClose(evt.target.closest('.modal'));
      }
    });
  }
}

function modalClose(modalActive, doUnlock = true) {
  if (unlock) {
    modalActive.classList.remove('is-open');

    if (doUnlock) {
      unlockBody();
    }
  }
}

function lockBody() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const elem = lockPadding[i];
      elem.computedStyleMap.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('scroll-lock');

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function unlockBody() {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const elem = lockPadding[i];
        elem.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('scroll-lock');
  }, timeout);

  unlock = false;

  setTimeout(() => {
    unlock = true;
  }, timeout);
}

const setModal = () => {
  if (modalOpenElements.length > 0) {
    for (let i = 0; i < modalOpenElements.length; i++) {
      const modalOpenElement = modalOpenElements[i];
      modalOpenElement.addEventListener('click', () => {
        modalOpen(modal);
      });
    }
  }

  if (modalCloseElements.length > 0) {
    for (let i = 0; i < modalCloseElements.length; i++) {
      const modalCloseElement = modalCloseElements[i];
      modalCloseElement.addEventListener('click', () => {
        modalClose(modalCloseElement.closest('.modal'));
      });
    }
  }

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      const modalActive = document.querySelector('.modal.is-open');
      modalClose(modalActive);
    }
  });
};

export {setModal};*/
