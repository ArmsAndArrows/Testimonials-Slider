"use strict";

const testimonials = document.querySelectorAll(".testimonial");
const slider = document.querySelector(".slider");
const lButton = document.querySelectorAll(".slider__btn--left");
const rButton = document.querySelectorAll(".slider__btn--right");

let curSlide = 0;
let maxSlide = testimonials.length;

//setting slides offset

testimonials.forEach(function (slide, i) {
  slide.style.transform = `translateX(${i * 120}% )`;
});

//function

const goToSlide = function (slide) {
  testimonials.forEach(
    (s, i) => (s.style.transform = `translateX(${120 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

//listeners

rButton.forEach((e) => e.addEventListener("click", nextSlide));
lButton.forEach((e) => e.addEventListener("click", prevSlide));

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
