const swiper = new Swiper('.popular-swiper', {

  slidesPerView: 3,
  spaceBetween: 24,

  loop: true,

  autoplay: {
    delay: 5000,
  },

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  }
});

const requestDishBtn = document.querySelector('.request-dish-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const cancelBtn = document.querySelector('.cancel-btn');
const requestForm = document.querySelector('.request-form');

modalOverlay.classList.add('hidden');

requestDishBtn.addEventListener('click', () => {

  modalOverlay.classList.remove('hidden');

  document.body.classList.add('modal-open');
});

function closeModal() {

  modalOverlay.classList.add('hidden');

  document.body.classList.remove('modal-open');
}

cancelBtn.addEventListener('click', closeModal);

requestForm.addEventListener('submit', (e) => {

  e.preventDefault();

  closeModal();
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target === modalOverlay) {
    closeModal();
  }
});

window.addEventListener('keydown', (e) => {

  if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});

const video = document.querySelector('.custom-video');
const playButton = document.querySelector('.play-button');

function toggleVideo() {

  if (video.paused) {

    video.play();

    playButton.style.display = 'none';

  } else {

    video.pause();

    playButton.style.display = 'flex';
  }
}

video.addEventListener('click', toggleVideo);

playButton.addEventListener('click', toggleVideo);

video.addEventListener('pause', () => {
  playButton.style.display = 'flex';
});

video.addEventListener('play', () => {
  playButton.style.display = 'none';
});