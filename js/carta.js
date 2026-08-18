const carta = `
Quiero que te quedes hasta que este en la tumba.
Porque siempre fuiste tu.
Debemos permanecer juntos, lo se.
Puede que no sea para siempre, pero si es para siempre sera aun mejor.
Cariño, hasta el dia que muera.
Quiero que me veas, como te ves para mi.
No me lo creerias si te lo dijera. 
Rendirnos?.
No quiero decir adios.
Te conoci en otra vida.
Te amo, no te hagas la sorprendida. 
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