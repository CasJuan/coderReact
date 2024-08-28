import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import {db} from '../../Firebase/dbConection';
import {collection, getDoc, doc} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, id)

        getDoc(refDoc)
          .then((doc) => {
            setProduct({id: doc.id, ...doc.data})
            setLoading(false);
          })
          .catch((error)=>{
            setLoading(false);
            console.log('ERROR',error);
          })
    },[id])

    return (
      <main>
          { loading 
            ? console.log('no responde')
            : <ItemDetail {...product}  />}

      </main>
    )
}

export default ItemDetailContainer;

