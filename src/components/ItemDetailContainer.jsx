import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setproduct] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
      (async () => {
        const item = await getProduct(id);
        setproduct(item);
      })();

  }, []);
  return (
    <div className="container container-lg">
        <ItemDetail item={product}/>  
    </div>
  )
}

export default ItemDetailContainer;