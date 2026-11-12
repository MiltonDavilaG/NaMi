const carta = `
Te he estado buscando, eres el origen de mi sueño.
Mi mano llegando a ti es un destino decidido.
Somos totalmente diferentes porque somos los dos quienes encontraron el destino.
En la anterior vida, quizas en la proxima tambien, estaremos siempre juntos.
Quiero este amor, solo me contrentro en ti.
Esto es inevitable, nos amamos.
Somos los unicos verdaderos amantes.
Mi corazon corre hacia ti.
Somos para siempre, para siempre juntos.
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