document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("openInvitation");

    if (boton) {
        boton.addEventListener("click", () => {

            document.querySelector(".hero").style.display = "none";
            document.getElementById("contenido").style.display = "block";

            const musica = document.getElementById("music");

            if (musica) {
                musica.play().catch(() => {});
            }

            window.scrollTo(0, 0);

        });
    }

    const fechaEvento = new Date("2026-10-03T18:00:00").getTime();

    setInterval(() => {

        const ahora = new Date().getTime();
        const diferencia = fechaEvento - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        if (d) d.textContent = dias;
        if (h) h.textContent = horas;
        if (m) m.textContent = minutos;
        if (s) s.textContent = segundos;

    }, 1000);

});
