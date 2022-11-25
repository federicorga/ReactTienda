import './CartWidget.css'

const CartWidget = () => {
    return (
        <ul className="liCarrito">
        <span className="iconNumCarrito">0</span>
        <li>
        <button className="btnCarritoCompra" title="Carrito de Compra">
          <span className="iconCarrito" />
        </button>
        </li>
        </ul>
    );
}

export default CartWidget;
