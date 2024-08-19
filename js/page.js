document.addEventListener('DOMContentLoaded', () => {
    // Get the current page's URL
    const currentPage = window.location.pathname.split("/").pop();
  
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Loop through each link and check if it matches the current page
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  });
  