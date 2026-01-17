let ataqueJugador;
let ataqueEnemigo;
let mascotaJugador;
let mascotaEnemigo;
let vidasJugador = 3; // Vidas iniciales del jugador
let vidasEnemigo = 3; // Vidas iniciales del enemigo

function iniciarJuego() {
    // Botones de mascota y ataques
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    document.getElementById('boton-fuego').addEventListener('click', ataqueFuego);
    document.getElementById('boton-agua').addEventListener('click', ataqueAgua);
    document.getElementById('boton-tierra').addEventListener('click', ataqueTierra);
    
    // Mostrar vidas iniciales
    actualizarVidas();
}

// Selección de mascota del jugador
function seleccionarMascotaJugador() {
    let hipoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo");
    let ratigueya = document.getElementById("ratigueya");
    let langoatelvis = document.getElementById("langoatelvis");
    let tucapalma = document.getElementById("tucapalma");
    let pydos = document.getElementById("pydos");

    if (hipoge.checked) mascotaJugador = "Hipodoge";
    else if (capipepo.checked) mascotaJugador = "Capipepo";
    else if (ratigueya.checked) mascotaJugador = "Ratigueya";
    else if (langoatelvis.checked) mascotaJugador = "Langoatelvis";
    else if (tucapalma.checked) mascotaJugador = "Tucapalma";
    else if (pydos.checked) mascotaJugador = "Pydos";
    else {
        alert("Por favor selecciona una mascota antes de continuar.");
        return;
    }

    document.getElementById("mascota-jugador").innerHTML = mascotaJugador;
    seleccionarMascotaEnemiga();
}

// Selección de mascota enemiga
function seleccionarMascotaEnemiga() {
    let mascotaAleatorio = aleatorio(1, 6);
    
    switch (mascotaAleatorio) {
        case 1: mascotaEnemigo = "Hipodoge"; break;
        case 2: mascotaEnemigo = "Capipepo"; break;
        case 3: mascotaEnemigo = "Ratigueya"; break;
        case 4: mascotaEnemigo = "Langoatelvis"; break;
        case 5: mascotaEnemigo = "Tucapalma"; break;
        case 6: mascotaEnemigo = "Pydos"; break;
    }

    document.getElementById("mascota-enemigo").innerHTML = mascotaEnemigo;
}

// Ataques del jugador
function ataqueFuego() { asignarAtaqueJugador('FUEGO'); }
function ataqueAgua() { asignarAtaqueJugador('AGUA'); }
function ataqueTierra() { asignarAtaqueJugador('TIERRA'); }

function asignarAtaqueJugador(tipo) {
    ataqueJugador = tipo;
    ataqueAleatorioEnemigo();

    // Mostrar en consola los ataques actuales
    console.log("Ataque del jugador:", ataqueJugador);
    console.log("Ataque del enemigo:", ataqueEnemigo);
}

// Ataque aleatorio del enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) ataqueEnemigo = 'FUEGO';
    else if (ataqueAleatorio == 2) ataqueEnemigo = 'AGUA';
    else ataqueEnemigo = 'TIERRA';

    combate();
}

function combate() {
    let resultado = determinarGanador();
    
    // Disminuir vidas según el resultado
    if (resultado == "GANASTE") {
        vidasEnemigo--;
    } else if (resultado == "PERDISTE") {
        vidasJugador--;
    }
    // Si es empate, no se pierden vidas
    
    actualizarVidas();
    crearMensaje(resultado);
    revisarVidas();
}

function actualizarVidas() {
    // Actualizar la visualización de vidas en el HTML
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    
    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("¡PERDISTE LA BATALLA! 😢");
    } else if (vidasEnemigo == 0) {
        crearMensajeFinal("¡GANASTE LA BATALLA! 🎉");
    }
}

function crearMensaje(resultado) {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + 
                       ", la mascota del enemigo atacó con " + ataqueEnemigo + 
                       " - " + resultado;
    document.getElementById("mensaje").appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal;
    document.getElementById("mensaje").appendChild(parrafo);
    
    // Deshabilitar botones de ataque cuando termina el juego
    deshabilitarBotones();
}

function deshabilitarBotones() {
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
}

function determinarGanador() {
    let resultado = "";

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "EMPATE";
    } else if (
        (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
        (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
        (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
    ) {
        resultado = "GANASTE";  
    } else {
        resultado = "PERDISTE";
    }
    
    return resultado;
}

// Función para generar números aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Iniciar juego al cargar la página
window.addEventListener("load", iniciarJuego);