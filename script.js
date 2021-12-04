"use strict";
// try and catch && Error handeling : ----------------------------------
const show = document.querySelector(".start");
const dark = document.querySelector(".dark");
const modal = document.querySelector(".modal");
const close =document.querySelector(".modal .title button");

show.addEventListener('click', () => {
    modal.style.opacity = '1';
    modal.style.transform = "translateY(5vh)";
    modal.style.transition = "transition: transform .5s ease-out;"
    dark.style.opacity = '1';
    show.style.zIndex = "0";
})
close.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.transform = "translateY(-100vh)";
    dark.style.opacity = '0';
    show.style.zIndex = "11";
})