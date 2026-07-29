const enlaces = document.querySelectorAll("#menuLateral a");

const secciones = [

    document.getElementById("bienvenida"),

    document.getElementById("recuerdos"),

    document.getElementById("carta"),

    document.getElementById("final")

];

window.addEventListener("scroll",()=>{

    let actual = 0;

    secciones.forEach((seccion,index)=>{

        if(window.scrollY >= seccion.offsetTop-200){

            actual=index;

        }

    });

    enlaces.forEach(e=>e.classList.remove("activo"));

    enlaces[actual].classList.add("activo");

});