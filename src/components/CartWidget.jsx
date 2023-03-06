import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
const CartWidget = () => {
    const {getItemQuantity} = useCartContext();
    return (
        <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="cart-counter">{getItemQuantity() > 0 ? getItemQuantity() : 0}</span>
        </Link>
    )
}

export default CartWidget