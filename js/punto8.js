let calcularMayor=(num1,num2)=> {
    if (num1 > num2){
        alert("El número mayor entre "+ num1 + " y "+ num2  + " es: "+ num1);
    }
    else if (num2>num1){
        alert("El número mayor entre "+ num1 + " y "+ num2 + " es: "+ num2);
    }
    else{
        alert("Tanto "+ num1 + " como "+ num2 +" son iguales.");
    }

}

calcularMayor(2, 5);
calcularMayor(10, 3);
calcularMayor(15, 15);