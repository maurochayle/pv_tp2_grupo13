export const  mostrarResultado = (radio,seleccion) =>{
    seleccion.textContent = `Elegiste la opción ${radio.value}`;
    console.log(`Elegiste la opción ${radio.value}`);
};
