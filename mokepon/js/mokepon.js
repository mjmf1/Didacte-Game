let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    // Botones de mascota y ataques
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    document.getElementById('boton-fuego').addEventListener('click', ataqueFuego);
    document.getElementById('boton-agua').addEventListener('click', ataqueAgua);
    document.getElementById('boton-tierra').addEventListener('click', ataqueTierra);
}

// Selección de mascota del jugador
function seleccionarMascotaJugador() {
    let hipoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo");
    let ratigueya = document.getElementById("ratigueya");
    let langoatelvis = document.getElementById("langoatelvis");
    let tucapalma = document.getElementById("tucapalma");
    let pydos = document.getElementById("pydos");

    let mascotaJugador = "";

    if (hipoge.checked) mascotaJugador = "Hipodoge";
    else if (capipepo.checked) mascotaJugador = "Capipepo";
    else if (ratigueya.checked) mascotaJugador = "Ratigueya";
    else if (langoatelvis.checked) mascotaJugador = "Langoatelvis";
    else if (tucapalma.checked) mascotaJugador = "Tucapalma";
    else if (pydos.checked) mascotaJugador = "Pydos";
    else {
        alert("Por favor selecciona una mascota antes de continuar.");
        return; // Sale de la función si no hay selección
    }

    document.getElementById("mascota-jugador").innerHTML = mascotaJugador;
    seleccionarMascotaEnemiga();
}

// Selección de mascota enemiga
function seleccionarMascotaEnemiga() {
    let mascotaAleatorio = aleatorio(1, 6);
    let mascotaEnemigo = "";

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
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) ataqueEnemigo = 'FUEGO';
    else if (ataqueAleatorio == 2) ataqueEnemigo = 'AGUA';
    else ataqueEnemigo = 'TIERRA';

    crearMensaje();
}

function crearMensaje() {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + ".";
    document.getElementById("mensaje").appendChild(parrafo);
    
}

// Función para generar números aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Iniciar juego al cargar la página
window.addEventListener("load", iniciarJuego);
