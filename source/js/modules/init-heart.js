const hearts = document.querySelectorAll('[data-heart]');

const initHeart = () => {
  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    heart.addEventListener('click', () => {
      heart.classList.toggle('is-active');
    });
  }
};

export {initHeart};
