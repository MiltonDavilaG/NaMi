const boton =
document.getElementById("btnComenzar");


boton.addEventListener("click",()=>{

    iniciarMusica();

    irHistoria();

});

const contenedor =
document.getElementById("recuerdos");


recuerdos.forEach(recuerdo => {


    const tarjeta = document.createElement("section");

tarjeta.classList.add("recuerdo");


    tarjeta.innerHTML = `

<div class="polaroid">

    <img src="img/${recuerdo.imagen}" alt="Recuerdo">

    <div class="descripcion">

        ${recuerdo.texto}

    </div>

</div>

`;


    contenedor.appendChild(tarjeta);

    const grados = Math.random()*8-4;

tarjeta.querySelector(".polaroid").style.transform =
`rotate(${grados}deg)`;


});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.35
});

document.querySelectorAll(".recuerdo").forEach(recuerdo=>{

    observer.observe(recuerdo);

});

const btnReiniciar = document.getElementById("btnReiniciar");

btnReiniciar.addEventListener("click", () => {

    document.getElementById("bienvenida").scrollIntoView({
        behavior: "smooth"
    });

});