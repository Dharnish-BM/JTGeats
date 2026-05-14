const foodItems = [
  {
    name: 'Home made pizza',
    price: 190,
    img: 'assets/item1.png',
    rating: 4.7,
    time: '50-79 min',
    discount: '50%'
  },
  {
    name: 'Home made pizza',
    price: 123,
    img: 'assets/item2.png',
    rating: 4.3,
    time: '50-79 min'
  },
  {
    name: 'Italian Pizza',
    price: 190,
    img: 'assets/item3.png',
    rating: 4.7,
    time: '50-79 min',
    discount: '20%'
  },
  {
    name: 'Spicy Pizza',
    price: 190,
    img: 'assets/item4.png',
    rating: 4.7,
    time: '50-79 min'
  },
  {
    name: 'Home made pizza',
    price: 199,
    img: 'assets/item5.png',
    rating: 4.6,
    time: '40-50 min'
  },
  {
    name: 'Veg Pizza',
    price: 220,
    img: 'assets/item6.png',
    rating: 4.5,
    time: '40-60 min'
  },
  {
    name: 'Healthy Meal',
    price: 150,
    img: 'assets/item7.png',
    rating: 4.8,
    time: '30-40 min'
  },
  {
    name: 'Chicken Grill',
    price: 290,
    img: 'assets/item8.png',
    rating: 4.9,
    time: '60-80 min'
  },
  {
    name: 'Home made pizza',
    price: 190,
    img: 'assets/item1.png',
    rating: 4.7,
    time: '50-79 min',
    discount: '50%'
  },
  {
    name: 'Chocolate Cake',
    price: 123,
    img: 'assets/item2.png',
    rating: 4.3,
    time: '50-79 min'
  },
  {
    name: 'Italian Pizza',
    price: 190,
    img: 'assets/item3.png',
    rating: 4.7,
    time: '50-79 min',
    discount: '20%'
  },
  {
    name: 'Spicy Pizza',
    price: 190,
    img: 'assets/item4.png',
    rating: 4.7,
    time: '50-79 min'
  }
];

function renderFoodCards() {
  const foodGrid = document.getElementById('foodGrid');
  foodGrid.innerHTML = foodItems.map(item => `
    <article class="food-card">
      ${item.discount ? `<div class="discount-badge">${item.discount}</div>` : ''}
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="card-content">
        <div class="card-top">
          <h3>${item.name}</h3>
          <span>&#8377;${item.price}</span>
        </div>
        <div class="card-bottom">
          <div class="rating-box">⭐ ${item.rating}</div>
          <div class="time-box">${item.time}</div>
          <button class="add-btn">+</button>
        </div>
      </div>
    </article>
  `).join('');
}
const popularItems = [
  {
    name: 'Home made pizza',
    price: 190,
    img: 'assets/slider1.png',
    rating: 4.7,
    time: '50-79 min'
  },
  {
    name: 'Tandoori Chicken',
    price: 184,
    img: 'assets/slider2.png',
    rating: 4.3,
    time: '15-29 min',
    discount: '20%'
  },
  {
    name: 'Chilli Chicken',
    price: 116,
    img: 'assets/slider3.png',
    rating: 4.1,
    time: '30-40 min',
    discount: '50%'
  },
  {
    name: 'Chicken Burger',
    price: 140,
    img: 'assets/slider4.jpg',
    rating: 4.5,
    time: '20-30 min'
  }
];

function renderPopularItems() {
  const wrapper = document.getElementById('popularItemsWrapper');
  wrapper.innerHTML = popularItems.map(item => `
    <article class="swiper-slide popular-card${item.discount ? ' active-slide' : ''}">
      ${item.discount ? `<div class="discount-badge">${item.discount}</div>` : ''}
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="card-content">
        <div class="card-top">
          <h3>${item.name}</h3>
          <span>&#8377;${item.price}</span>
        </div>
        <div class="card-bottom">
          <div class="rating-box">⭐ ${item.rating}</div>
          <div class="time-box">${item.time}</div>
          <button class="add-btn">+</button>
        </div>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderFoodCards();
  renderPopularItems();
});
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