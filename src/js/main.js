const body = document.body;
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
});

//swiper 

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 22,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // centeredSlides: true,
  breakpoints: {
    510: {
      slidesPerView: 2,
    },
    762: {
      slidesPerView: 4,
    }
  }
});