let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let slides = document.getElementsByClassName('slider__item');
let currentSlide = 0;

function slideSwitch(slideNumber) {
  if (typeof slideNumber === 'number') {
    for (let i = 0; i < slides.length; i++) {
      if (i != slideNumber) {
        slides[i].classList.remove('slider__item_active');
      } else {
        slides[i].classList.add('slider__item_active');
      }
    }
  }
}
function validSlideNumberCheck(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = slides.length - 1;
  } else if (slideNumber > slides.length - 1) {
    validNumber = 0;
  }

  currentSlide = validNumber;

  return currentSlide;
}

btnLeft.onclick = function () {
  let newSlide = currentSlide - 1;
  slideSwitch(validSlideNumberCheck(newSlide));
}

btnRight.onclick = function () {
  let newSlide = currentSlide + 1;
  slideSwitch(validSlideNumberCheck(newSlide));
}