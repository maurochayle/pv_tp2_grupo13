import { mostrarTexto} from './Ejercicio21-función.js';

const input = document.querySelector("#ingreso-texto");
const texto = document.querySelector("#texto-ingresado");

input.addEventListener("input", () =>{

    mostrarTexto(input, texto);
});