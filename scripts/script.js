// Toggle Icon Nav Bar

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navBar.classList.toggle("active")
}

// Sroll section active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >=offset && top < offset + height) {
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // REMOVE TOGGLE ICON AND NAV BAR
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
}

// SCROLL REVEAL
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home__content, heading', {
    origin: "top"
});
ScrollReveal().reveal(".home__img, .services__container, .portfolio__box, .contact form", {
    origin: "bottom"
});
ScrollReveal().reveal(".home__content h1, .about__img", {
    origin: "left"
});
ScrollReveal().reveal(".home__content p, .about__content", {
    origin: "right"
});


// TYPED JS
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Data Analyst', 'Learner'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000, 
    loop: true
});


