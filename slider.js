let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function slideShow() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(slideShow, 3000);