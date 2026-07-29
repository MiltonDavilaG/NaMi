const carta = `

Aquí escribirás tu carta.

Gracias por llegar a mi vida.

Gracias por hacer especiales los días más simples.

Espero seguir creando muchos recuerdos contigo.

Con mucho cariño ❤️

`;

const sobre = document.getElementById("sobre");

const papel = document.getElementById("papel");

const textoCarta = document.getElementById("textoCarta");

sobre.addEventListener("click",()=>{

    sobre.style.display="none";

    papel.style.display="block";

    escribirCarta();

});

let posicionCarta = 0;

function escribirCarta(){

    if(posicionCarta < carta.length){

        textoCarta.innerHTML += carta.charAt(posicionCarta);

        posicionCarta++;

        setTimeout(escribirCarta,45);

    }

}