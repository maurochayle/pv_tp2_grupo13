import { seleccionCapital } from "./Ejercicio20Función.js"

const paisSeleccionado = document.querySelector("#pais");
const capitalSeleccionada = document.querySelector("#capital");

paisSeleccionado.addEventListener("change", ()=>{
    seleccionCapital(paisSeleccionado,capitalSeleccionada);


})
