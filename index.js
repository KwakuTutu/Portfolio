const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () =>{
        nav.classList.toggle('nav--visible');
})

function toggleMenu() {
        const navLinks = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
      
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('close');
}
function closeMenu() {
        const navVisible = document.querySelector('.nav--visible');
        const navLinks = document.querySelector('.section-link');
        const hamburger = document.querySelector('.hamburger');
      
        navLinks.classList.remove('show');
        hamburger.classList.remove('close');
        navVisible.classList.remove('nav--visible');
}

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
      document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.section-animate');
      
        function checkInView() {
          sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
      
            if (sectionTop < windowHeight - 100) {
              section.classList.add('animate');
            }
          });
        }
      
        window.addEventListener('scroll', checkInView);
      });
         

      