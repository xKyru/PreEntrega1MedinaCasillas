import { Link } from "react-router-dom";
import formatPrice from "../helpers/formatPrice";
const Item = ({item}) => {
    const {name, price, cat, img, shortDesc, id, stock} = item;
  return (
    <>
        <li className={`product-item ${cat.replace(" ", "-").toLowerCase()} ${stock === 0 ? "agotado" : ""}`}>
            <div className="product-img">
                <Link to={stock === 0 ? "/" : `/item/${id}`}>
                    <img src={img} alt="Producto" />
                </Link>
            </div>
            <div className="product-body">
                <h3>{name}</h3>
                <p className="product-price">{formatPrice(price)}</p>
                <p className="product-description">{shortDesc}</p>
                <Link to={stock === 0 ? "/" : `/item/${id}`} className="product-btn"><span>Ver más</span></Link>
            </div>
        </li>
    </>
  )
}
export default Item;