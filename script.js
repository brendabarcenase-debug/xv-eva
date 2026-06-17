document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("openInvitation");
    const musica = document.getElementById("music");

    boton.addEventListener("click", async () => {

        document.querySelector(".hero").style.display = "none";
        document.getElementById("contenido").style.display = "block";

        try {
            musica.currentTime = 0;
            musica.volume = 0.35; // volumen al 35%
            await musica.play();
            console.log("🎵 Música reproduciéndose");
        } catch (error) {
            console.error("No se pudo reproducir:", error);
        }

        iniciarContador();

    });
/*==============================
ANIMACIÓN AL HACER SCROLL
==============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});
    /*==============================
PÉTALOS
==============================*/

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "%";

    petal.style.animationDuration =
        (6 + Math.random()*6) + "s";

    petal.style.opacity =
        .3 + Math.random()*.5;

    petal.style.transform =
        `scale(${0.5 + Math.random()})`;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,500);
    const swiper = new Swiper(".gallerySwiper",{

    loop:true,

    centeredSlides:true,

    spaceBetween:30,

    autoplay:{
        delay:3500,
        disableOnInteraction:false
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    breakpoints:{

        768:{
            slidesPerView:2
        },

        1024:{
            slidesPerView:3
        }

    }

});
});

function iniciarContador(){

    const fechaEvento = new Date("2026-10-03T18:00:00").getTime();

    setInterval(() => {

        const ahora = new Date().getTime();
        const diferencia = fechaEvento - ahora;

        document.getElementById("days").textContent =
            Math.floor(diferencia/(1000*60*60*24));

        document.getElementById("hours").textContent =
            Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

        document.getElementById("minutes").textContent =
            Math.floor((diferencia%(1000*60*60))/(1000*60));

        document.getElementById("seconds").textContent =
            Math.floor((diferencia%(1000*60))/1000);

    },1000);

}
