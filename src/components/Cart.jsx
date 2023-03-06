import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import formatPrice from '../helpers/formatPrice';

import { useCartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, totalPrice, emptyCart } = useCartContext();
  return (
    <div className="cart">
      <div className="container container-sm">
        {
          cart.length === 0 ?
            <div className="empty-cart">
              <h2>Carrito Vacio</h2>
              <p>Para continuar agrega productos a tu carrito</p>
              <Link to={`/`} className="empty-cart-btn"><span>Ir a la tienda</span></Link>
            </div>
            :
            <>
              <h2>Carrito</h2>
              <div className="cart-wrap">
                <ul className="cart-list">
                  <ItemList products={cart} template="cartItem" />
                </ul>
                <div className="cart-resumen">
                  <p>Total: <span>{formatPrice(totalPrice())}</span></p>
                </div>
                <div className="cart-actions">
                  <Link
                    className="btn-cart-resumen-pay"
                    to={"/checkout"}
                  > <span>Proceder al pago</span></Link>
                  <Link
                    className="btn-cart-resumen-continue"
                    to={"/"}
                  > Continuar comprando</Link>
                  <button
                    className="btn-cart-resumen-empty"
                    onClick={() => emptyCart()}
                  >Vaciar carrito</button>
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default Cart