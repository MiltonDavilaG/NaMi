const fondo = document.querySelector(".background");
const luna = document.querySelector(".moon");
const estrellas = document.getElementById("stars");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    fondo.style.transform =
        `translateY(${y*0.10}px)`;

    estrellas.style.transform =
        `translateY(${y*0.20}px)`;

    luna.style.transform =
        `translateY(${y*0.05}px)`;

});