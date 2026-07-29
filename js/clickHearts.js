document.addEventListener("click",(e)=>{

    const heart =
    document.createElement("div");

    heart.className="clickHeart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1000);

});