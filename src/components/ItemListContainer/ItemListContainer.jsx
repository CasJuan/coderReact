/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from "../Firebase/dbConection";
import { collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    let productsCollection = collection(db, "productos")

    if (categoryId) {
      productsCollection = query(productsCollection, where("color", categoryId));
    }
   
    getDocs(productsCollection)
    .then(({docs}) => {
      const prodFromDocs = docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      setProducts(prodFromDocs)
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
 
  }, [categoryId]);


  return (
        <main >
          {console.log("Renderizo el componente")}
            { loading 
              ? console.log('no carga')
              : <ItemList products={products} />}
        </main>
  );
};

export default ItemListContainer;
