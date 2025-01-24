document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
  
    sliders.forEach((slider) => {
      const images = slider.querySelectorAll('img');
      let currentIndex = 0;
  
      // Show the first image
      images[currentIndex].classList.add('active');
  
      // Rotate images every 3 seconds
      setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 3000);
    });
  });
  