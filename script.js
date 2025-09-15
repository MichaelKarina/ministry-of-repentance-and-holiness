// Main slider
let slides = document.querySelectorAll(".slide");
let index = 0;
function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 8000);

// Mini sliders in sections
let miniSliders = document.querySelectorAll(".mini-slider");
miniSliders.forEach(slider => {
  let miniSlides = slider.querySelectorAll(".mini-slide");
  let idx = 0;
  setInterval(() => {
    miniSlides.forEach((s, i) => {
      s.classList.remove("active");
      if (i === idx) s.classList.add("active");
    });
    idx = (idx + 1) % miniSlides.length;
  }, 5000);
});
