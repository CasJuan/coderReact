import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductById} from '../utils/getProducts';
import ItemDetail from './ItemDetail/IteamDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(id)
          .then((res) => {
            setProduct(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });

    },[id])

    return (
      <main>
          { loading 
            ? console.log('no responde')
            : <ItemDetail product={product}  />}

      </main>
    )
}

export default ItemDetailContainer;

