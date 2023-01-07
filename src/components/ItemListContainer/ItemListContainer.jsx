import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import {getProductos} from '../../assets/firebase.js';
//import { cargarBDD } from '../../assets/firebase.js;
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.genero === category)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos);
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }

              //cargarBDD().then(productos => console.log(productos))


    },[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
