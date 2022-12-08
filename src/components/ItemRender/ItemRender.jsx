
import { Link } from "react-router-dom";

//Generar la Card de Productos
const ItemRender = ({game}) => {
    return (
        
        <div className="card" style={{width: '18rem'}}>
        <img src={`../${game.imagen}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{game.nombreJuego}</h2>
          <h3 className="card-text">Plataforma: {game.plataforma}</h3>
          <h3 className="card-text">Genero: {game.genero}</h3>
          <h4 className="card-text">${game.precio}</h4>
          <button className="btn btn-primary"><Link className="nav-link" to={`/product/${game.id}`}>Ver Producto</Link></button>
        </div>
      </div>

    );
}

export default ItemRender;
