/*
Capturar los botones para usarlos (plantea usar un forEach) y hacer evento click
Crear una función obtenerResultado 
Crear una función mostrarResultado
Crear una función actualizarPuntuacion  
*/

const opciones = ["piedra", "papel", "tijera"];
let puntosUser = 0; 
let puntosOrdenador = 0; 

const btn = document.querySelectorAll(".boton-jugada"); 
//console.log(btn);


let resultadoUser = btn.forEach((element) => console.log(element.dataset.jugada));
console.log("este es el resultado" + resultadoUser);
/* 

btn.addEventListener("click", function(){
    if (btn.dataset.jugada === "piedra"){
        resultadoUser = "piedra";  
    } else if (btn.dataset.jugada === "papel"){
        resultadoUser = "papel";  
    }else{
        resultadoUser = "tijera";   
    }
});

console.log(resultadoUser);


/*if () {
    puntosUser ++
} else { console.log("empate")}*/





/*


let resultados = document.getElementById("resultados");
resultados.textContent = "Hola";
console.log(resultados.textContent);

let contadorUsuario = document.getElementById("contador-usuario");
let contadorOrdenador = document.getElementById("contador-ordenador");


function getRandom() {
    return Math.floor(Math.random()*3);
  }

let resultadoOrdenador = console.log(opciones[getRandom()]);
console.log(getRandom());

*/


