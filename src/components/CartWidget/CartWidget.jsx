import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContex';
const CartWidget = () => {
    const{getItemQuantity}=useCarritoContext();

    return (
        <ul className="liCarrito">
       {getItemQuantity()>0 && <span className="iconNumCarrito">{getItemQuantity()}</span>}
        <li>
        
        <Link className='nav-item' to={"/Cart"}><button className="btnCarritoCompra" title="Carrito de Compra">
       <span className="iconCarrito" />
        </button></Link>
        
        </li>
        </ul>
    );
}

export default CartWidget;
