  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
      
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-xmark');
        }
      });

     
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
          const icon = menuBtn.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
          }
        });
      });
    }
  });
