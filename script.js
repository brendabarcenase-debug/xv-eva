function abrirInvitacion() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';

    const musica = document.getElementById('bgMusic');

    if (musica) {
        musica.play().catch(() => {
            console.log("El navegador requiere interacción del usuario");
        });
    }
}

const fechaEvento = new Date("October 3, 2026 18:00:00").getTime();

const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );

    const d = document.getElementById("dias");
    const h = document.getElementById("horas");
    const m = document.getElementById("minutos");
    const s = document.getElementById("segundos");

    if (d) d.innerHTML = dias;
    if (h) h.innerHTML = horas;
    if (m) m.innerHTML = minutos;
    if (s) s.innerHTML = segundos;

    if (distancia < 0) {

        clearInterval(contador);

        if (d) d.innerHTML = "0";
        if (h) h.innerHTML = "0";
        if (m) m.innerHTML = "0";
        if (s) s.innerHTML = "0";
    }

}, 1000);
