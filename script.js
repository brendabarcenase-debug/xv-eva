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
