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
  buttonClose()
});

const page2Slider = document.querySelector(".card-slide-wrapper");
const sldierContent2 = document.querySelectorAll(".card");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");

next2.addEventListener("click", NextSlider);
prev2.addEventListener("click", PrevSlider);

let width = 0;

let Counter = 0;

function buttonClose(){
  if(Counter <= 0){
    prev2.style.visibility = "hidden"
  }else{
    prev2.style.visibility = "visible"
  }

  if(Counter >= sldierContent2.length -2){
    next2.style.display = "none"
  }else{
    next2.style.display = "block"
  }
  console.log( Counter);
}

function NextSlider() {
  if(width < 0) width = 0

  Counter++

  sldierContent2.forEach((item, index) => {
    if (Counter > sldierContent2.length -1 ) {
      Counter = 0;
    }
    if (Counter == index) {
      console.log("Counter " + Counter);
      width += item.offsetWidth + 10;
      page2Slider.style.transform = "translateX(0%)";
    } else {
      page2Slider.style.transform = `translateX(-${width}px)`;
    }
  });
  console.log(width);
  buttonClose()
}

function PrevSlider() {
  if(width < 0) width = 0

  Counter--;
  sldierContent2.forEach((item, index) => {
    if (Counter <= 0 || width < 0) {
      Counter = 0;
      width = 0
    }
    if (Counter == index) {
      console.log("Counter " + Counter);
      width -= item.offsetWidth + 10;
      page2Slider.style.transform = "translateX(0%)";
    } else {
      page2Slider.style.transform = `translateX(-${width}px)`;
    }
  });
  console.log(width);
  buttonClose()
}
