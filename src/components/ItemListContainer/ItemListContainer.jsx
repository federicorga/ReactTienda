import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


import ItemList from "../ItemList/ItemList.jsx";
import {consultarBDD} from "../../assets/funciones.js";


//ItemListContainer solo consulta a la base de datos
const ItemListContainer = () => {
    const [productos, setProductos]= useState([])
    const {category} = useParams()
    useEffect(() =>{
        if(category){
            consultarBDD('../json/catalogoJuegos.json').then(products=>{
                const productsList= products.filter(prod => prod.stock > 0).filter(prod=> prod.genero === category);
                console.log(productsList);
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })

        }else{
            consultarBDD('./json/catalogoJuegos.json').then(products=>{
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })

        }
  
    }, [category]);
    
  //Esto me lleva un tiempo, muestro esos productos en la consola

    return (
        
        <div className= 'cardProductoss' >
            {productos}
        </div>
            
        
    );
}

export default ItemListContainer;
