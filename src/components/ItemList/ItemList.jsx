
import ItemRender from "../ItemRender/ItemRender";


//ItemList transforma mis objetos que estan dentro del array en ItemListContainer en JSX
const ItemList = ({productsList}) => {
    return (
        <>

            {productsList.map(producto=> <ItemRender key={producto.id} game={producto}/>)}
        </>
    );
}

export default ItemList;
