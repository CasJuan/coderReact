import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductById} from '../../utils/fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';

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
          <div>ItemDetailContainer</div>
          { loading 
            ? console.log('no responde')
            : <ItemDetail {...product}  />}

      </main>
    )
}

export default ItemDetailContainer;

