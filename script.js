let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;
const buttons = document.querySelectorAll(".project");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay__inner img");

function open(e) {
    overlay.classList.add("open");
    const src = e.currentTarget.querySelector("img").src;
    overlayImage.src = src;
}

function close() {
    overlay.classList.remove("open");
}

buttons.forEach((button) => button.addEventListener("click", open));
overlay.addEventListener("click", close);