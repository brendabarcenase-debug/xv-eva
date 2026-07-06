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

            if (loader) {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

}

        }, 1200);

    });

    /*==============================================
        ABRIR INVITACIÓN
    ==============================================*/

    if (openButton) {

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

}

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
    /*==============================================
        SWIPER GALERÍA
    ==============================================*/

    const gallerySwiper = new Swiper(".gallerySwiper", {

    loop: true,

    centeredSlides: true,

    spaceBetween: 20,

    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }

    }

});

    /*==============================================
    LIGHTBOX
==============================================*/

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const prevImage = document.getElementById("prevImage");

const nextImage = document.getElementById("nextImage");

const galleryImages = document.querySelectorAll(".gallerySwiper img");

let currentImage = 0;

function showImage(index){

    currentImage = index;

    lightboxImage.src = galleryImages[currentImage].src;

}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        showImage(index);

    });

});

nextImage.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage(currentImage);

});

prevImage.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage(currentImage);

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

document.addEventListener("keydown",(event)=>{

    if(lightbox.style.display==="flex"){

        if(event.key==="ArrowRight"){

            nextImage.click();

        }

        if(event.key==="ArrowLeft"){

            prevImage.click();

        }

        if(event.key==="Escape"){

            lightbox.style.display="none";

        }

    }

});

    /*==============================================
        ANIMACIONES AL HACER SCROLL
    ==============================================*/

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:0.20

    });

    document.querySelectorAll(".section").forEach(section=>{

        section.classList.add("fade-in");

        observer.observe(section);

    });
    /*==============================================
        CERRAR LIGHTBOX CON ESC
    ==============================================*/

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape" && lightbox){

            lightbox.style.display="none";

        }

    });

    /*==============================================
        PAUSAR SWIPER AL ABRIR LIGHTBOX
    ==============================================*/

    document.querySelectorAll(".gallerySwiper img").forEach(image=>{

        image.addEventListener("click",()=>{

            if(gallerySwiper.autoplay){

                gallerySwiper.autoplay.stop();

            }

        });

    });

    function closeGallery(){

        if(lightbox){

            lightbox.style.display="none";

        }

        if(gallerySwiper.autoplay){

            gallerySwiper.autoplay.start();

        }

    }

    if(closeLightbox){

        closeLightbox.addEventListener("click",closeGallery);

    }

    if(lightbox){

        lightbox.addEventListener("click",(e)=>{

            if(e.target===lightbox){

                closeGallery();

            }

        });

    }

    /*==============================================
        PRECARGA DE IMÁGENES
    ==============================================*/

    document.querySelectorAll(".gallerySwiper img").forEach(img=>{

        const preload=new Image();

        preload.src=img.src;

    });

    /*==============================================
        EFECTO PARALLAX SUAVE EN PORTADA
    ==============================================*/

    window.addEventListener("mousemove",(e)=>{

        if(!hero) return;

        const x=(e.clientX/window.innerWidth)-0.5;

        const y=(e.clientY/window.innerHeight)-0.5;

        hero.style.backgroundPosition=

            `${50+x*2}% ${50+y*2}%`;

    });

    /*==============================================
        DETENER MÚSICA SI SE CIERRA LA PESTAÑA
    ==============================================*/

    document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        music.pause();

    } else {

        if (!music.paused) {

            music.play().catch(() => {});

        }

    }

});

/*==============================================
    FIN
==============================================*/

});
