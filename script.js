let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    
    


    /*==================== sticky navbar ====================*/
    sections.forEach((sec) => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');
     
     if (top >= offset && top < offset + height){
         navLinks.forEach((link) => {
         })
     }
 });
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky',window.scrollY > 100);
    


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    distance: '80px',
    durations: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});
/*==================== typed js ====================*/

const navLinks = document.querySelectorAll('.navbar a');

  // Loop setiap link dan tambahkan event listener
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Hapus class 'active' dari semua link
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Tambahkan class 'active' ke link yang diklik
      link.classList.add('active');
    });
  });