const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () =>{
        nav.classList.toggle('nav--visible');
})

document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('.section-link');
      
        links.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 30;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;
      
            window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
            });
          });
        });
      });
      