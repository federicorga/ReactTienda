import "./Navbar.css";
import Logo from "./logo/Logo";
import CartWidget from "../cartwidget/CartWidget";
import MyMenu from "./mymenu/MyMenu";

const Navbar = () => {
  return (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg myNav">
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
        <div className="collapse navbar-collapse liMenu">
        <MyMenu/>
        </div>
      <CartWidget/>
    </div>
  </nav>
  );
};
export default Navbar;