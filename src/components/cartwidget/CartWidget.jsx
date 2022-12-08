import './CartWidget.css'
import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <ul className="liCarrito">
        <span className="iconNumCarrito">0</span>
        <li>
        <Link className='nav-item' to={"/Cart"}><button className="btnCarritoCompra" title="Carrito de Compra">
       <span className="iconCarrito" />
        </button></Link>
        </li>
        </ul>
    );
}

export default CartWidget;
