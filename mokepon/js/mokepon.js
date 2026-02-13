let ataqueJugador;
let ataqueEnemigo;
let mascotaJugador;
let mascotaEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    // Ocultar secciones al inicio
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar');
    sectionSeleccionarReiniciar.style.display = 'none';

    // Botones de mascota y ataques
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    document.getElementById('boton-fuego').addEventListener('click', ataqueFuego);
    document.getElementById('boton-agua').addEventListener('click', ataqueAgua);
    document.getElementById('boton-tierra').addEventListener('click', ataqueTierra);
    
    // Botón de reiniciar
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
    
    // Mostrar vidas iniciales
    actualizarVidas();
}

function seleccionarMascotaJugador() {
    // Mostrar sección de ataques
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex';

    // Ocultar sección de selección de mascota
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

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
        // Volver a mostrar la sección de mascota si no seleccionó
        sectionSeleccionarMascota.style.display = 'block';
        sectionSeleccionarAtaque.style.display = 'none';
        return;
    }

    document.getElementById("mascota-jugador").innerHTML = mascotaJugador;
    seleccionarMascotaEnemiga();
}

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

function ataqueFuego() { 
    asignarAtaqueJugador('FUEGO'); 
}

function ataqueAgua() { 
    asignarAtaqueJugador('AGUA'); 
}

function ataqueTierra() { 
    asignarAtaqueJugador('TIERRA'); 
}

function asignarAtaqueJugador(tipo) {
    ataqueJugador = tipo;
    ataqueAleatorioEnemigo();
}

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
    
    actualizarVidas();
    crearMensaje(resultado);
    revisarVidas();
}

function actualizarVidas() {
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
    let containerMensaje = document.createElement("div");
    containerMensaje.style.cssText = "background-color: rgba(255, 255, 255, 0.1); padding: 15px; border-radius: 10px; margin: 10px 0; width: 100%; text-align: center; border: 2px solid rgba(255, 255, 255, 0.2);";
    
    let resultadoRound = document.createElement("p");
    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");

    resultadoRound.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = "🎮 Tu mascota atacó con: " + ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = "🤖 Enemigo atacó con: " + ataqueEnemigo;
    
    // Estilo del resultado (grande y destacado)
    resultadoRound.style.margin = "0 0 15px 0";
    resultadoRound.style.fontSize = "1.8em";
    resultadoRound.style.fontWeight = "bold";
    resultadoRound.style.padding = "10px";
    resultadoRound.style.borderRadius = "8px";
    
    nuevoAtaqueJugador.style.margin = "5px 0";
    nuevoAtaqueEnemigo.style.margin = "5px 0";
    
    // Color y fondo según resultado
    if (resultado === "GANASTE") {
        resultadoRound.style.color = "#90EE90";
        resultadoRound.style.backgroundColor = "rgba(144, 238, 144, 0.2)";
    } else if (resultado === "PERDISTE") {
        resultadoRound.style.color = "#FF6B6B";
        resultadoRound.style.backgroundColor = "rgba(255, 107, 107, 0.2)";
    } else {
        resultadoRound.style.color = "#FFD700";
        resultadoRound.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
    }
    
    // Agregar en orden: resultado primero (grande), luego los ataques
    containerMensaje.appendChild(resultadoRound);
    containerMensaje.appendChild(nuevoAtaqueJugador);
    containerMensaje.appendChild(nuevoAtaqueEnemigo);
    
    // Usar prepend para agregar al principio
    document.getElementById("mensaje").prepend(containerMensaje);
}

function crearMensajeFinal(resultadoFinal) {
    let containerFinal = document.createElement("div");
    containerFinal.className = "container-final";
    
    let mensajeFinal = document.createElement("div");
    
    // Aplicar clase según ganaste o perdiste
    let esGanador = resultadoFinal.includes("GANASTE");
    mensajeFinal.className = esGanador ? "mensaje-final-victoria" : "mensaje-final-derrota";
    mensajeFinal.innerHTML = resultadoFinal;
    
    // Crear botón de reiniciar con clase CSS
    let botonReiniciar = document.createElement("button");
    botonReiniciar.className = "boton-reiniciar-mejorado";
    botonReiniciar.innerHTML = "🔄 Jugar de Nuevo";
    botonReiniciar.onclick = reiniciarJuego;
    
    // Agregar mensaje y botón al contenedor
    containerFinal.appendChild(mensajeFinal);
    containerFinal.appendChild(botonReiniciar);
    
    // Insertar al principio del área de mensajes
    document.getElementById("mensaje").prepend(containerFinal);
    
    // Deshabilitar botones de ataque
    deshabilitarBotones();
    
    // Ocultar el botón de reiniciar original
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar');
    sectionSeleccionarReiniciar.style.display = 'none';
}

function deshabilitarBotones() {
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
}

function habilitarBotones() {
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    
    botonFuego.disabled = false;
    botonAgua.disabled = false;
    botonTierra.disabled = false;
}

function reiniciarJuego() {
    // Reiniciar vidas
    vidasJugador = 3;
    vidasEnemigo = 3;
    
    // Reiniciar variables
    ataqueJugador = undefined;
    ataqueEnemigo = undefined;
    mascotaJugador = undefined;
    mascotaEnemigo = undefined;
    
    // Limpiar mensajes
    document.getElementById("mensaje").innerHTML = "";
    
    // Limpiar selección de mascotas
    document.getElementById("mascota-jugador").innerHTML = "";
    document.getElementById("mascota-enemigo").innerHTML = "";
    
    // Desmarcar radio buttons
    let inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });
    
    // Habilitar botones de ataque
    habilitarBotones();
    
    // Actualizar vidas en pantalla
    actualizarVidas();
    
    // Mostrar sección de selección de mascota
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'block';
    
    // Ocultar sección de ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';
    
    // Ocultar sección de reiniciar
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar');
    sectionSeleccionarReiniciar.style.display = 'none';
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

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);