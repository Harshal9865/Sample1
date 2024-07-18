/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
      });
    }
  };
  
  showMenu('nav-toggle', 'nav-menu');
  
  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction));
  
  /*=============== ADD BLUR HEADER ===============*/
  const blurHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the blur-header class
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
  };
  
  window.addEventListener('scroll', blurHeader);
  
  /*=============== EMAIL JS ===============*/
  // Replace with your EmailJS user ID and template ID
  emailjs.init('YOUR_USER_ID');
  
  const sendEmail = (event) => {
    event.preventDefault();
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
      .then(() => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send the message, please try again later.');
      });
  };
  
  document.getElementById('contact-form').addEventListener('submit', sendEmail);
  
  /*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    this.scrollY >= 560 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
  };
  
  window.addEventListener('scroll', scrollUp);
  
  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  }
  
  window.addEventListener('scroll', scrollActive);
  
  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
  });
  
  sr.reveal(`.home__data, .home__img, 
             .about__data, .about__img,
             .services__content, .menu__content,
             .app__data, .app__img,
             .contact__data, .contact__button`, {
    interval: 200
  });
  