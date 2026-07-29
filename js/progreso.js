const barra = document.getElementById("progreso");

window.addEventListener("scroll",()=>{

    const altura =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const porcentaje =
        (window.scrollY/altura)*100;

    barra.style.width =
        porcentaje+"%";

});