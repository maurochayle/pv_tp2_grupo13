export const textoEspejo = (input, output)=>{
    output.textContent=input.value;
    if(output.textContent.length>20){
        output.style.backgroundColor="lightcoral";
    }else{
        output.style.backgroundColor="lightblue";
    }
}