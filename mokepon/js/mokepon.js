 let ataqueJugador

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {

    let hipoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo");
    let ratigueya = document.getElementById("ratigueya");
    let langoatelvis = document.getElementById("langoatelvis");
    let tucapalma = document.getElementById("tucapalma");
    let pydos = document.getElementById("pydos");
    

    if (hipoge.checked) {
        document.getElementById("mascota-jugador").innerHTML = "Hipodoge";
        
    } else if (capipepo.checked) {
        document.getElementById("mascota-jugador").innerHTML = "Capipepo";
    } else if (ratigueya.checked) {
        document.getElementById("mascota-jugador").innerHTML = "Ratigueya";
    } else if (langoatelvis.checked) {
        document.getElementById("mascota-jugador").innerHTML = "Langoatelvis";
    } else if (tucapalma.checked) {
        document.getElementById("mascota-jugador").innerHTML = "Tucapalma";
    } else if (pydos.checked) {
        document.getElementById("mascota-jugador").innerHTML = "Pydos";
    } else {
        alert("Por favor selecciona una mascota antes de continuar.");
    }

    seleccionarMascotaEnemiga();
}

function seleccionarMascotaEnemiga() {
    let ataqueAleatorio = aleatorio(1, 6);
    let mascotaEnemigo = "";

    if (ataqueAleatorio == 1) {
        document.getElementById("mascota-enemigo").innerHTML = "Hipodoge";
    } else if (ataqueAleatorio == 2) {
        document.getElementById("mascota-enemigo").innerHTML = "Capipepo";
    } else if (ataqueAleatorio == 3) {
        document.getElementById("mascota-enemigo").innerHTML = "Ratigueya";
    } else if (ataqueAleatorio == 4) {
        document.getElementById("mascota-enemigo").innerHTML = "Langoatelvis";
    } else if (ataqueAleatorio == 5) {
        document.getElementById("mascota-enemigo").innerHTML = "Tucapalma";
    } else {
        document.getElementById("mascota-enemigo").innerHTML = "Pydos";
    }
}

 function ataqueFuego(){
    ataqueJugador = 'FUEGO|'
    alert(ataqueJugador)
 }

 function ataqueAgua(){
    ataqueJugador = 'AGUA|'
     alert(ataqueJugador)
 }

 function ataqueTierra(){
    ataqueJugador = 'TIERRA|'
     alert(ataqueJugador)
 }

  function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

let mascotaSeleccionada = document.getElementById("boton-mascota");
mascotaSeleccionada.addEventListener("click", seleccionarMascotaJugador);

