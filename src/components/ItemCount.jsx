import {useState} from 'react';
import {toast} from 'react-toastify';
const ItemCount = ({startValue, stock, onAdd}) => {
    const [counter, setCounter] = useState(startValue);

    const counterAdd = () => (counter < stock) && setCounter(counter + 1); 
    const counterSub = () => (counter > startValue) && setCounter(counter - 1);
    const addToCart = () => {
        onAdd(counter);
        toast.success("Producto agregado al carrito");
    }

    return (
        <>
            <div className="item-count-wrap">
                <button
                    className="count-btn count-btn-sub"
                    onClick={() => counterSub()}
                ><span>-</span></button>
                <span className="item-qty">{counter}</span>
                <button 
                    className="count-btn count-btn-add"
                    onClick={() => counterAdd()}
                ><span>+</span></button>
            </div>
            <button 
                className="item-detail-submit"
                onClick={() => addToCart()}
            ><span>Agregar al carrito</span></button>
        </>
    )
}

export default ItemCount;