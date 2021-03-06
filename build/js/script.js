'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });


let anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(evt) {
    evt.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.slider__dot');

// на каком активном слайде мы сейчас находимся

let index = 0;

// в n количество слайдов на странице

const activeSlide = function(n) {
  for(let slide of slides) {
    slide.classList.remove('slider__slide--active');
  }
  slides[n].classList.add('slider__slide--active');
};

const activeDot = n => {
  for(let dot of dots) {
    dot.classList.remove('slider__dot--active');
  }
  dots[n].classList.add('slider__dot--active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = function() {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = function() {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

// item - одна кнопка (dot)

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
    clearInterval(interval);
  })
});

next.addEventListener('click', function() {
  nextSlide();
  clearInterval(interval);
});

prev.addEventListener('click', function() {
  prevSlide();
  clearInterval(interval);
});

const delay = setTimeout(nextSlide, 2500);
const interval = setInterval(nextSlide, 2500);

//

const close = document.querySelector('.destination__close');
const adress = document.querySelector('.destination__adress');
const adressContainer = document.querySelector('.destination__container');

close.addEventListener('click', function() {
  close.classList.toggle('destination__close--active');
  adress.classList.toggle('destination__adress--active');
  adressContainer.classList.toggle('destination__container--active');
});

//

const priceGym = document.querySelector('.price__item--gym');
const gym = document.querySelector('.gym');
const gymClose = document.querySelector('.gym__close');

priceGym.addEventListener('click', function() {
  gym.classList.add('gym--show');
});

gymClose.addEventListener('click', function() {
  gym.classList.remove('gym--show');
});

// гамбургер

const menuToggle = document.querySelector('.header__menu-toggle');
const menuToggleBar = document.querySelector('.header__menu-toggle-bar');
const menuHamburger = document.querySelector('.header__hamburger');

menuToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  menuToggleBar.classList.toggle('header__menu-toggle-bar--active');
  menuHamburger.classList.toggle('header__hamburger--active');
});
