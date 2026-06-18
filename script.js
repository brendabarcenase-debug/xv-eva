/*==================================================
    XV AÑOS DE EVA
    SCRIPT.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
        ELEMENTOS
    ==============================================*/

    const hero = document.querySelector(".hero");

    const contenido = document.getElementById("contenido");

    const openButton = document.getElementById("openInvitation");

    const music = document.getElementById("music");

    const musicButton = document.getElementById("musicButton");

    const loader = document.getElementById("loader");

    /*==============================================
        LOADER
    ==============================================*/

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 700);

        }, 1200);

    });

    /*==============================================
        ABRIR INVITACIÓN
    ==============================================*/

    openButton.addEventListener("click", () => {

        hero.style.display = "none";

        contenido.style.display = "block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        music.play().catch(() => {});

        musicButton.classList.add("playing");

    });

    /*==============================================
        BOTÓN MÚSICA
    ==============================================*/

    musicButton.addEventListener("click", () => {

        if(music.paused){

            music.play();

            musicButton.classList.add("playing");

        }else{

            music.pause();

            musicButton.classList.remove("playing");

        }

    });
    /*==============================================
        CUENTA REGRESIVA
    ==============================================*/

    const eventDate = new Date("2026-10-03T18:00:00").getTime();

    function updateCountdown(){

        const now = new Date().getTime();

        const difference = eventDate - now;

        if(difference <= 0){

            ["days","hours","minutes","seconds"].forEach(id=>{

                const el=document.getElementById(id);

                if(el) el.textContent="00";

            });

            return;

        }

        const days = Math.floor(difference / (1000*60*60*24));

        const hours = Math.floor(

            (difference % (1000*60*60*24)) /

            (1000*60*60)

        );

        const minutes = Math.floor(

            (difference % (1000*60*60)) /

            (1000*60)

        );

        const seconds = Math.floor(

            (difference % (1000*60)) /

            1000

        );

        document.getElementById("days").textContent =
            String(days).padStart(2,"0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2,"0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2,"0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2,"0");

    }

    updateCountdown();

    setInterval(updateCountdown,1000);

    /*==============================================
        PÉTALOS
    ==============================================*/

    const petalsContainer = document.getElementById("petals");

    function createPetal(){

        if(!petalsContainer) return;

        const petal = document.createElement("div");

        petal.classList.add("petal");

        petal.style.left = Math.random()*100 + "vw";

        petal.style.opacity = 0.4 + Math.random()*0.6;

        petal.style.width = 12 + Math.random()*12 + "px";

        petal.style.height = petal.style.width;

        petal.style.animationDuration =
            6 + Math.random()*7 + "s";

        petal.style.animationDelay =
            Math.random()*2 + "s";

        petalsContainer.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },14000);

    }

    setInterval(createPetal,450);
