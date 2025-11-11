// Navigation animation and mobile menu handler
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  // Hamburger menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
  }
  
  // Navigation animation handler
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      
      // Add rollOut animation to the clicked link
      this.classList.add('animate__animated', 'animate__rollOut');
      
      // Navigate to the new page after animation completes
      this.addEventListener('animationend', function() {
        window.location.href = targetUrl;
      }, { once: true });
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (menuToggle && navLinksContainer.classList.contains('active')) {
      if (!event.target.closest('.main-nav')) {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      }
    }
  });
});
