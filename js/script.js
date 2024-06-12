// opciones en un array
const opciones = ["piedra", "papel", "tijera"];
// variables puntos usuario
let puntosUser = 0; 
//variables puntos ordenador
let puntosOrdenador = 0; 
//capturar los botones para usarlos (plantea usar forEach) y hacer evento click
const botones = document.querySelectorAll(".boton-jugada"); 



botones.forEach(function(btn){
    btn.addEventListener("click", function(){
        let eleccionUser = this.dataset.jugada; 
        let eleccionCompu = opciones[Math.floor(Math.random()*3)];
        let resultado = obtenerResultado(eleccionUser, eleccionCompu);

    })})

//capturar resultados
let resultados = document.getElementById("resultados");
//capturar contador-usuario
let contadorUser = document.getElementById("contador-usuario");
//capturar contador-ordenador
let contadorOrdenador = document.getElementById("contador-ordenador");


function obtenerResultado (eleccionUser, eleccionCompu) {
    if (eleccionUser === eleccionCompu){
        resultados.innerHTML = "¡Es un empate!";
    } else if (
        (eleccionUser ==="papel" && eleccionCompu === "piedra") ||
        (eleccionUser ==="tijera" && eleccionCompu === "papel") ||
        (eleccionUser ==="piedra" && eleccionCompu === "tijera") 
    ) {
        resultados.innerHTML = `¡Ganaste! La compu eligió ${eleccionCompu} y tú elegiste ${eleccionUser}`;
        puntosUser++;
        contadorUser.innerHTML = `Tus puntos: ${puntosUser}`;

    } else {
        resultados.innerHTML = `¡Perdiste! La compu eligió ${eleccionCompu} y tú elegiste ${eleccionUser}`
        puntosOrdenador++;
        contadorOrdenador.innerHTML = `Puntos de la máquina: ${puntosOrdenador}`;

     }}

