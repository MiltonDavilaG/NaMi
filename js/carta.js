const carta = `
Estoy contento de tenerte muy cerca de mi.
Que me des besos.
Y que te rias de mi.
Eres lo mas bonito que he visto en toda mi vida.
Ya no puedo vivir sin ti.
Te amo.
Estas loca como yo. 
❤️
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