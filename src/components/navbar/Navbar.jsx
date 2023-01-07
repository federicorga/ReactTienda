import "./Navbar.css";
import Logo from "./logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import MyMenu from "./mymenu/MyMenu";
import BotonDarkMode from './BotonDarkMode/BotonDarkMode'

//context
import { useDarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {
  const {darkMode} = useDarkModeContext()
  return (
  
     <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'myNav' : 'bg-dark'}`}>
    <div className="container-fluid">
      <Logo/>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse liMenu" id="navbarSupportedContent">
        <MyMenu/>
        <BotonDarkMode/>
        </div>
      <CartWidget/>
     
    </div>
  </nav>
  );
};
export default Navbar;