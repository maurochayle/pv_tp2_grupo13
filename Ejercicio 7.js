
const nombres = ["Carlos", "Mariana", "Alejandro", "Sofía", "Fernando", "Isabel"];

let maxlength = nombres [0].length; // Longitud del primer nombre 
let nombreMaxlength; // Variable para almacenar el nombre más largo

    nombres.forEach( (x) => {
        if(maxlength < x.length){
            maxlength = x.length;
            nombreMaxlength = x;
        }
    }); 
console.log("El nombre más largo es:" + nombreMaxlength);
console.log("Tiene "+ maxlength + " letras.");