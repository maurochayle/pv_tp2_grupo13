import { mostrarResultado } from './Ejercicio23-función.js';

let seleccion = document.querySelector("#mostrarValor");
let radios = document.querySelectorAll('input[name="lenguaje"]');

radios.forEach((radio)=>{
    radio.addEventListener("change", () =>{
        mostrarResultado(radio,seleccion);
    });
});