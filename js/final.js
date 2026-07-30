const contenedorCorazones =
document.getElementById("corazones");

setInterval(()=>{

    const corazon =
    document.createElement("div");

    corazon.innerHTML="❤️";

    corazon.classList.add("corazon");

    corazon.style.left=
        Math.random()*100+"%";

    corazon.style.fontSize=
        (Math.random()*20+20)+"px";

    contenedorCorazones.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },7000);

},500);