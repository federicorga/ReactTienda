import './Logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (

    <>
        <button className="navbar-brand logo"><Link className='nav-item' to={"/"}><img src="../img/tendgame.png" alt="icono" className="imgPrincipal"/>
        <h1>GAMER-ZONE</h1></Link> 
        </button>
    </>
    );
}

export default Logo;
