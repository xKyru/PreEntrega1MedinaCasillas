const CartWidget = ({cartCount}) => {
    return (
        <a href="#">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="cart-counter">{cartCount}</span>
        </a>
    )
}

export default CartWidget