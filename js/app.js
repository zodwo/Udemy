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

const sliderContent = document.querySelector(".slider-main")

function Next() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderContent.style.transform = "translateX(0%)"
    } else {
      sliderContent.style.transform = "translateX(-50%)"

    }
  });
}

function Prev() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderContent.style.transform = "translateX(-50%)"
    } else {
      sliderContent.style.transform = "translateX(0%)"
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

const arr = [1,2,3,4,5,6,7,8,9]
let log = 1

arr.forEach((item)=>{
  log *= item
  console.log(log);
})