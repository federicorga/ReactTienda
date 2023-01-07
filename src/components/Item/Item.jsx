
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
//Generar la Card de Productos
const Item = ({prod}) => {
  const {darkMode} =useDarkModeContext();
    return (
        
        <div className="card" style={{width: '18rem'} }>
        <img src={prod.imagen} className="card-img-top" alt="..." /> 
        <div className= {`card-body cardio ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
          <h2 className="card-title">{prod.nombreJuego}</h2>
          <h3 className="card-text textoA">Plataforma: {prod.plataforma}</h3>
          <h3 className="card-text textoA">Genero: {prod.genero}</h3>
          <h4 className="card-text textoB">${prod.precio}</h4>
          <button className="btn btn-primary"><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link></button>
        </div>
      </div>

    );
}

export default Item;
