document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.info-image');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
  
    images.forEach(image => {
      observer.observe(image);
    });
  });
  