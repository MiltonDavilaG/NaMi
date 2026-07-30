const carta = `
Eres especial.
Eres linda.
Eres una angelita.
Eres el "San" de mi "Valentin".
Me muero por escucharte.
No hay nadie como tu.
Eres Importante para mi. 
Tienes un gran corazon y todo lo respaldas con pruebas.
Las horas de las noches me parecen solitarias sin ti.
Haria cualquier cosa con tal de que me quieras.
Eres la chica numero uno en mis ojos. 
Tu unico amor verdadero.
Tienes una grandeza que eres humilde y amigable ❤️.
Te acepto en cada una de tus etapas.
Te necesito.
Te amo.
Vales la pena y eres suficiente.
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