
import { useCartContext } from "../context/CartContext";
import formatPrice from "../helpers/formatPrice";
const CartItem = ({item}) => {
  const {removeItem} = useCartContext();
  const {name, price, shortDesc, fullDesc, img, cat, stock, id, qty} = item;
  
  return (
    <li className='cart-product'>
      <div className="product-cart-info-container">
        <div className="product-cart-img">
          <img src={img} alt="Producto" />
        </div>
        <div className="product-cart-specs">
          <h3>{name}</h3>
          {/* <p className='product-cart-description'>{shortDesc}</p> */}
          <p>Cantidad: <span>{qty}</span></p>
          <button
            onClick={() => removeItem(id)}
          >Eliminar</button>
        </div>
        <div className="product-cart-item-price">
          <p>Precio: <span>{formatPrice(price)}</span></p>
        </div>
      </div>
      {/* <div className="product-cart-total-price-container">
        <p className="product-cart-total">Total: </p>
      </div> */}
      <div className="product-cart-subtotal">
        <p>Subtotal: <span>{formatPrice(price * qty)}</span></p>
      </div>
    </li>
  )
}

export default CartItem