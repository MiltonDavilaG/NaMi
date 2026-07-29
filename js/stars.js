const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const tamaño = Math.random()*3+1;

star.style.width=tamaño+"px";

star.style.height=tamaño+"px";

    star.style.animationDuration=(Math.random()*5+2)+"s";

    star.style.animationDelay=Math.random()*5+"s";

    stars.appendChild(star);

}