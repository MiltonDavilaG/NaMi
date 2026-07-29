const mensaje = document.getElementById("mensaje");

const texto = "Para la persona importante en mi vida ❤️";

let i = 0;

function escribir() {

    if(i < texto.length){

        mensaje.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,80);

    }

}

escribir();