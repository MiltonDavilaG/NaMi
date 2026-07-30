const stars = document.getElementById("stars");

const estrellaEspecial = document.createElement("div");

estrellaEspecial.classList.add("star", "star-love");

estrellaEspecial.style.left = "40%";   // Horizontal
estrellaEspecial.style.top = "18%";    // Vertical

stars.appendChild(estrellaEspecial);

for(let i = 0; i < 180; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDuration = (Math.random()*5+2) + "s";
    star.style.animationDelay = Math.random()*5 + "s";

    stars.appendChild(star);

}