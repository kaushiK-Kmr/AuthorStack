// Slideshow Script with Auto-Play and Pause on Hover
const slides = document.querySelectorAll(".slide");
const slideshow = document.querySelector(".slideshow");
let currentSlide = 0;
let slideInterval;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Start auto-play
function startSlideshow() {
  slideInterval = setInterval(showNextSlide, 4000);
}

// Stop auto-play
function pauseSlideshow() {
  clearInterval(slideInterval);
}

// Start immediately on page load
startSlideshow();

// Pause on hover, resume on mouse leave
slideshow.addEventListener("mouseenter", pauseSlideshow);
slideshow.addEventListener("mouseleave", startSlideshow);
