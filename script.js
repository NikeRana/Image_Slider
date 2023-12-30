var i = 0;
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
var pause = false;
function moveRight() {
  slides[i].className = "slide";
  i = (i + 1) % slides.length;
  slides[i].className = "slide active";
  let Xvalue = -160 * i;
  slider.style.transform = `translateX(${Xvalue}px)`;
}
function moveLeft() {
  slides[i].className = "slide";
  i = (i - 1 + slides.length) % slides.length;
  slides[i].className = "slide active";
  let Xvalue = -160 * i;
  slider.style.transform = `translateX(${Xvalue}px)`;
}

const interval = setInterval(() => {
  if (!pause) {
    moveRight();
  }
}, 2000);

function playPause() {
  let state = document.querySelector(".icon");
  if (state.innerHTML == "pause") {
    state.innerHTML = "play_arrow";
    pause = true;
  } else {
    state.innerHTML = "pause";
    pause = false;
  }
}