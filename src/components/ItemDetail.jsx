import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { useCartContext } from "../context/CartContext";
import formatPrice from "../helpers/formatPrice";


const ItemDetail = ({item}) => {
    const {addItem, cart} = useCartContext();
    const {name, fullDesc, img, cat, price, stock} = item;

    const onAdd = (qty) => {
        addItem(item, qty);
    }

  return (
    <div className="item-detail-wrap">
        <div className="item-detail-img">
            <img src={img} alt="Producto" />
        </div>
        <div className="item-detail-info">
            <h1 className="item-detail-name">{name}</h1>
            <p className="item-detail-price">{formatPrice(price)}</p>
            <p className="item-detail-desc">{fullDesc}</p>
            <p className="item-detail-cat">{cat}</p>
            <p className="item-detail-stock">Disponibles: <span>{stock}</span></p>
            <ItemCount
                startValue={1}
                stock={stock}
                onAdd={onAdd}
            />
            {
                cart.length > 0 &&
                <Link to="/cart" className="item-detail-checkout">Finalizar compra</Link>
            }
        </div>
    </div>
  )
}

export default ItemDetail