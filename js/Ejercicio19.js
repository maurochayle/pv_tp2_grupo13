import { datosIngresado} from "./Ejercicio19Función.js";
let name = document.querySelector("#nombre");
let surname = document.querySelector("#apellido");
let number = document.querySelector("#libretaUniversitaria");
let buttom = document.querySelector("#boton");

buttom.addEventListener("click",()=> {
    datosIngresado(name,surname,number);

})

 