import {useState} from 'react';

//Me muestra cuantos productos quiere comprar el usuario
const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito= ()=>{
        onAdd(contador)}

    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
                {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className='btn btn-light' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
