export const textoEspejo = (input, output)=>{
    output.textContent=input.value;
    if(output.textContent.length>20){
        output.style.backgroundcolor="lightcoral";
    }else{
        output.style.backgroundcolor="beige";
    }
}