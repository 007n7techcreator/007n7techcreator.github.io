const gatito = document.getElementById('gatito');
const tablero = document.getElementById('tablero');
const puntajeSpan = document.getElementById('puntaje');
const botonInicio = document.getElementById('botonInicio');
const finJuegoDiv = document.getElementById('finJuego');
const puntajeFinalSpan = document.getElementById('puntajeFinal');
const botonReiniciar = document.getElementById('botonReiniciar');
const menuDiv = document.getElementById('menu');
const juegoDiv = document.getElementById('juego');
const botonPlay = document.getElementById('botonPlay');
const botonHardmode = document.getElementById('botonHardmode'); // Añade esta línea

let puntaje = 0;
let jugando = false;

function moverGatito() {
    if (!jugando) return;

    const tableroAncho = tablero.offsetWidth - gatito.offsetWidth;
    const tableroAlto = tablero.offsetHeight - gatito.offsetHeight;

    const randomX = Math.floor(Math.random() * tableroAncho);
    const randomY = Math.floor(Math.random() * tableroAlto);

    gatito.style.left = randomX + 'px';
    gatito.style.top = randomY + 'px';
}

function sumarPunto() {
    puntaje++;
    puntajeSpan.textContent = puntaje;
}

function iniciarJuego() {
    puntaje = 0;
    puntajeSpan.textContent = puntaje;
    jugando = true;
    finJuegoDiv.classList.add('oculto');
    juegoDiv.classList.remove('oculto');
    menuDiv.classList.add('oculto');
    botonInicio.classList.add('oculto')
    moverGatito(); // Mueve el gatito inmediatamente al iniciar
}

function terminarJuego() {
    jugando = false;
    finJuegoDiv.classList.remove('oculto');
}
async function onClick() {
    const estado = gatito.getAttribute('data-estado');
    if (estado === 'normal') {
        gatito.src = 'gatito_llorando.png';
        gatito.setAttribute('data-estado', 'llorando');
        sumarPunto();
        gatito.style.visibility = 'hidden';//Oculta el gatito
        await sleep(1000)
        gatito.src = 'gatito.png';
        gatito.setAttribute('data-estado', 'normal');
        moverGatito(); // Mueve el gatito a una nueva posición
        gatito.style.visibility = 'visible'; //Hace visible al gatito
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
botonInicio.addEventListener('click', iniciarJuego);
botonReiniciar.addEventListener('click', iniciarJuego);
botonPlay.addEventListener('click', iniciarJuego);
botonHardmode.addEventListener('click', function() { // Añade este evento
    window.location.href = 'https://007n7techcreator.github.io/CatchTheKitten/Hardmode';
});

// Mueve el gatito cada segundo
setInterval(moverGatito, 1000);

// Termina el juego después de 30 segundos (opcional)
setTimeout(terminarJuego, 30000);
