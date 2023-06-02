const sliderWrapper = document.querySelector(".slider-wrapper");
const slideContent = document.querySelectorAll(".slide");
const sliderImg = document.querySelector(".slimg");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let counter = 0;
let interval; // interval değişkenini tanımla

next.addEventListener("click", NextButton);
prev.addEventListener("click", PrevButton);

function NextButton() {
  counter++;
  if (counter > slideContent.length - 1) {
    counter = 0;
  }
  Next();
  ClearInterval();
  createInterval();
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

function Next() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      item.style.width = "100%";
      sliderWrapper.style.flexDirection = "row";
    } else {
      item.style.width = 0;
      sliderWrapper.style.flexDirection = "row-reverse";
    }
  });
}

function Prev() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderWrapper.style.flexDirection = "row-reverse";
      item.style.width = "100%";
    } else {
      item.style.width = 0;
      sliderWrapper.style.flexDirection = "row";
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
  Next();
  createInterval();
});

let winWIDTH = window.innerWidth;
let itemHeight = 400;

window.addEventListener("resize", () => {
  const thisWIDTH = window.innerWidth;
  const height = thisWIDTH / thisWIDTH;
  let sum = itemHeight - height;

  slideContent.forEach((item) => {

    if (thisWIDTH < winWIDTH) {
      item.style.height = sum + "px";
    }

    
  });

  winWIDTH = thisWIDTH;
});
