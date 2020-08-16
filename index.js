const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_humburger = document.querySelector('.header .navbar .nav-list ul');
const item_menu = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('#header');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
})

hamburger.addEventListener('click', ()=> {
    mobile_humburger.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    }else {
        header.style.backgroundColor = 'transparent';
    }
});

item_menu.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_humburger.classList.toggle('active');
    });
});