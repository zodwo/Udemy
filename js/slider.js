const sliderWrapper = document.querySelector(".slider-wrapper");
const slideContent = document.querySelectorAll(".slide");
const sliderImg = document.querySelector(".slimg");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let counter = 0;
let interval;

next.addEventListener("click", NextButton);
prev.addEventListener("click", PrevButton);

function NextButton() {
  if (counter > slideContent.length - 1) {
    counter = 0;
  }
  Next();
  ClearInterval();
  createInterval();
  counter++;
}

function PrevButton() {
  counter--;
  if (counter < 0) {
    counter = slideContent.length - 1;
  }
  Prev();
  ClearInterval();
  createInterval();
}

const sliderContent = document.querySelector(".slider-main");

function Next() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderContent.style.transform = "translateX(0%)";
    } else {
      sliderContent.style.transform = "translateX(-50%)";
    }
  });
}

function Prev() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderContent.style.transform = "translateX(-50%)";
    } else {
      sliderContent.style.transform = "translateX(0%)";
    }
  });
}

function createInterval() {
  interval = setInterval(NextButton, 4500);
}

function ClearInterval() {
  clearInterval(interval);
}

window.addEventListener("DOMContentLoaded", () => {
  createInterval();
});

const page2Slider = document.querySelector(".card-slide-wrapper");
const sldierContent2 = document.querySelectorAll(".shopcart");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");

next2.addEventListener("click", NextSlider);
prev2.addEventListener("click", PrevSlider);

let width = 0;

counter = 0

function NextSlider() {
  counter++;

  sldierContent2.forEach((item, index) => {
    if (counter > index) {
      counter = 0;
      console.log(index);
    }
    if (counter == index) {
        
      width += item.offsetWidth + 30;
      page2Slider.style.transform = "translateX(0%)";
    } else {
      page2Slider.style.transform = `translateX(-${width}px)`;
    }
  });
  console.log(width);
}

function PrevSlider() {
  counter--;

  sldierContent2.forEach((item, index) => {
    if (0 > counter) {
      counter = index;
    }
    if (counter == index) {
      width -= item.offsetWidth - 30;
      page2Slider.style.transform = `translateX(-${width}px)`;
    } else {
      page2Slider.style.transform = "translateX(0%)";
    }
  });
  console.log(width);
}
