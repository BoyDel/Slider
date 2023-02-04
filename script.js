"use strict";

const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
const imgs = document.querySelectorAll("img");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
const close = document.querySelector(".close");

let currSlide = 0;
let eventHappened = false;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;

  slide.addEventListener("click", () => {
    close.style.opacity = "1";
    container.style.width = "90%";
    container.style.height = "90%";
  });
});

imgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    if (!eventHappened) {
      eventHappened = true;
    }
  });
  img.addEventListener("mouseout", () => {
    eventHappened = false;
  });
});

leftBtn.addEventListener("click", () => {
  currSlide -= 1;
  changeSlide();
});

rightBtn.addEventListener("click", () => {
  currSlide += 1;
  changeSlide();
});

function changeSlide() {
  if (currSlide > 3) {
    currSlide = 0;
  } else if (currSlide < 0) {
    currSlide = 3;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currSlide) * 100}%)`;
  });
}

window.addEventListener("keydown", (e) => {
  if (eventHappened) {
    if (e.code === "ArrowRight") {
      currSlide += 1;
      changeSlide();
    } else if (e.code === "ArrowLeft") {
      currSlide -= 1;
      changeSlide();
    }
  }
});

close.addEventListener("click", () => {
  container.style.width = "60%";
  container.style.height = "60%";
  close.style.opacity = "0";
});
