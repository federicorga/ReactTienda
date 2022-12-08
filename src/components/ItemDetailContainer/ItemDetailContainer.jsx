//Muestra el contenido de la card al poner ver producto
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


import { consultarBDD } from "../../assets/funciones";
import ItemDetailRender from "../ItemDetailRender/ItemDetailRender";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id}=useParams()
    useEffect(() => {
    consultarBDD('../json/catalogoJuegos.json').then(producten=>{ //then(luego) recoger de esta consulta la lista de juegos (uno por uno).
        const prod = producten.find(producten => producten.id === parseInt(id)) //y de esta lista busco el que tenga id igual a 1 y meterlo en una constante
       setProducto(prod); //luego esa constante la meto en productos.
    })
    }, [id]);
    //Si quieres ejecutar un efecto y sanearlo solamente una vez (al montar y desmontar), 
    //puedes pasar un array vacío ([]) como segundo argumento. Esto le indica a React que el 
    //efecto no depende de ningún valor proveniente de las props o el estado, 
    //de modo que no necesita volver a ejecutarse.
    return (
        
            <div className="card mb-3 container itemDetail">
            <ItemDetailRender item={producto} />
        </div>
            
        
    );
}

export default ItemDetailContainer;
