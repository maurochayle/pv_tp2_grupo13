const edades = [29, 15, 7, 13, 24, 25, 30, 45];
let promedio = edades.length;
let suma = 0;
for(let edad of edades ){
    suma = suma + edad;
}
console.log("El promedio es: "+ suma/promedio)