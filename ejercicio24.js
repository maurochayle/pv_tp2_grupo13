const colores = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A8", "#33FFF3"];
const boton = document.getElementById("colorButton");

// Agregar un evento click al botón
boton.addEventListener("click", () => {
    // Seleccionar un color aleatorio de la lista
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    // Cambiar el color 
    document.body.style.backgroundColor = colorAleatorio;
});