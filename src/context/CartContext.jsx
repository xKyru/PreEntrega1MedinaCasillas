import {createContext, useContext, useState} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartProvider = props => {
    const [cart, setCart] = useState([]);

    //Add poduct
    const addItem = (prod, qty) => {
        if(isInCart(prod.id)){
            const productExists = cart.findIndex(productFound => productFound.id === prod.id);
            const tempCart = [...cart];
            tempCart[productExists].qty = qty;
            setCart(tempCart);
        }else{
            const cartProduct = {...prod, qty};
            setCart([...cart, cartProduct]);
        }
    }

    //Delete product
    const removeItem = id => setCart(cart.filter( prod => prod.id !== id ));
    
    //Empty cart
    const emptyCart = () => setCart([]);

    //Total products
    const getItemQuantity = () => cart.reduce((acum, prod) => acum += prod.qty, 0);

    //If product exists
    const isInCart = id => cart.find(prod => prod.id === id);

    //Total price
    const totalPrice = () => cart.reduce((acum, prod) => acum += (prod.qty * prod.price), 0);

    return(
        <CartContext.Provider 
            value={{cart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}
        >
            {props.children}
        </CartContext.Provider>
    )

}
  

export{useCartContext, CartProvider}


