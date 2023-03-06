import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { getProducts } from "../firebase/firebase";
const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const {idCat} = useParams();

  useEffect(() => {
    if(idCat){
      (async () => {
        const items = await getProducts();
        const products = items.filter(prod => prod.cat.replace(" ", "-").toLowerCase() == idCat);
        const productsList = ItemList({products});    
        setProductsList(productsList);
      })();
    }
    else{
      (async () => {
        const products = await getProducts();
        const productsList = ItemList({products});
        setProductsList(productsList);
      })();
    }
  }, [idCat]);
  return (
    <div className="container container-lg">
      <ul className="products-list">
        {productsList}    
      </ul>
    </div>
  )
}

export default ItemListContainer