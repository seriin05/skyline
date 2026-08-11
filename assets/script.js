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
const swiper = new Swiper('.div-opinions', {
  slidesPerView: 1,      
  spaceBetween: 16,
  loop: false,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 2,   
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,  
      spaceBetween: 32,
    }
  }
});
