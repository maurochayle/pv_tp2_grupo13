import {textoEspejo} from "./Ejercicio22-funcion.js"
let input = document.querySelector("#ingresoDatos");
let output = document.querySelector("#parrafo");
input.addEventListener("input",()=>{
    textoEspejo(input, output);
})