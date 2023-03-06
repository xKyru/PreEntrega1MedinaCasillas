import Navigation from "./Navigation";
import CartWidget from "./CartWidget";
import DarkModeButton from "./DarkModeButton";
const Navbar = () => {
  
  return (
    <nav className="navbar-wrap">
      <div className="container container-sm">
        <div className="nav-container">
          <Navigation/>
        </div>
        <div className="cart-container">
          <CartWidget/>
        </div>
        <div className="dark-mode-container">
          <DarkModeButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;