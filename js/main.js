const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.navlist');
//menu bar for small device
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};


window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

// content reveal slowly

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.skills,.about,.project,.exp,.contact',{delay:200, origin:'bottom'})