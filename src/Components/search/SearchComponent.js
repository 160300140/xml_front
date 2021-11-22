import React from "react";

/**
Necesita:
const searchOptions = {
    titulo: "Gestión de ventas",
    filter1: "Nombre:",
    filter2: "Clave:",
    filter3: "Fecha inicio:",
    filter4: "Fecha final:",
    filter5: "No. nota:",
    filter6: "Estatus:",
    filter7: "Categoría:",
    filter8: "Empresa:",
    filter9: "Sucursal",
    buttom: "Buscar"

};
Uso:
<SearchComponent options={searchOptions}/>
 */

export default function SearchComponent(props){
    const {options} = props;
    //Todos los campos posibles del objeto
    const {
        titulo, 
        filter1 = "Sin detalles",
        filter2 = "Sin detalles",
        filter3 = "Sin detalles",
        filter4 = "Sin detalles",
        filter5 = "Sin detalles",
        filter6 = "Sin detalles",
        filter7 = "Sin detalles",
        filter8 = "Sin detalles",
        filter9 = "Sin detalles",
        filter10 = "Sin detalles",
        buttom = "Buscar"
    } = options;

    return(
        <div>
            <h1>
                Hola
            </h1>
        <div/>
    )
}