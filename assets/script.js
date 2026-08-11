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
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',         
    perPage: 3,          
    perMove: 1,           
    gap: '1.5rem',         
    breakpoints: {
      1024: { perPage: 2 }, 
      640:  { perPage: 1 }, 
    },
  }).mount();
});
