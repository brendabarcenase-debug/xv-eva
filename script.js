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
