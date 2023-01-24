import NavbarNavigation from "./NavbarNavigation";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="navbar-wrap">
      <div className="container container-sm">
        <div className="nav-container">
          <NavbarNavigation/>
        </div>
        <div className="cart-container">
          <CartWidget cartCount={5}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;