import Item from "./Item";
import CartItem from "./CartItem";
const ItemList = ({ products, template }) => {
  return (
    <>
      {
        template === "cartItem" 
        ?
        products.map(product => <CartItem item={product} key={product.id} />)
        :
        products.map(product => <Item item={product} key={product.id} />)
      }
    </>
  )
}

export default ItemList