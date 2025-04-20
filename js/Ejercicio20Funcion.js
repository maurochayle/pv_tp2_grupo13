export const seleccionCapital = (paisSeleccionado,capitalSeleccionada) =>{
    const pais= paisSeleccionado.value;
    const capitales = {
        arg: "Buenos Aires",
        bra: "Brasilisa",
        uru: "Montevideo",
        chi: "Santiago de Chile",
        col: "Bogotá",
        bol: "Sucre",
    };
    const capital = capitales[pais];
    for (let i = 0; i < capitalSeleccionada.options.length; i++) {
        if (capitalSeleccionada.options[i].text === capital) {
          capitalSeleccionada.selectedIndex = i;
          break;
        }
      }
      console.log('Seleccionaste: ${pais.charAt(0).toUpperCase() + pais.slice(1)} - ${capital}');
}