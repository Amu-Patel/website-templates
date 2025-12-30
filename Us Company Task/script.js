
  document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    }
    
    function updateSlider() {
      const offset = -currentSlide * 100;
      document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(nextSlide, 1000);
  });
