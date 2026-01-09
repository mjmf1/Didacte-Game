function seleccionarMascota() {

    if (hipoge.checked) {
        alert("Has seleccionado a Hipodoge");
    } else if (capipepo.checked) {
        alert("Has seleccionado a Capipepo");
    } else if (ratigueya.checked) {
        alert("Has seleccionado a Ratigueya");
    } else if (langoatelvis.checked) {
        alert("Has seleccionado a Langoatelvis");
    } else if (tucapalma.checked) {
        alert("Has seleccionado a Tucapalma");
    } else if (pydos.checked) {
        alert("Has seleccionado a Pydos");
    } else {
        alert("Por favor selecciona una mascota antes de continuar.");
    }
}

let mascotaSeleccionada = document.getElementById("boton-mascota");
mascotaSeleccionada.addEventListener("click", seleccionarMascota);

let hipoge = document.getElementById("hipodoge");
let capipepo = document.getElementById("capipepo");
let ratigueya = document.getElementById("ratigueya");
let langoatelvis = document.getElementById("langoatelvis");
let tucapalma = document.getElementById("tucapalma");
let pydos = document.getElementById("pydos");