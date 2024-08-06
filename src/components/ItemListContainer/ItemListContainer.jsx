/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { getProducts } from "../../utils/fetchData";
import { useParams } from "react-router-dom";




const ItemListContainer = ({ title, otroTitle }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Se termino de montar el componente");
    setLoading(true);
    getProducts(categoryId) 
      .then((res) => {
        console.log("Se resolvio la promesa");
        setProducts(res);
        console.log("Se actualizaron los productos");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finalizo la promesa");
        setLoading(false);
      });


      return () => {
        console.log("Se desmonto el componente");
      }

  }, [categoryId]);

  let titleToShow;
  if (title != undefined) {
    titleToShow = title;
  } else {
    titleToShow = otroTitle;
  }
  
  return (
        <main >
          {console.log("Renderizo el componente")}
            <div>{titleToShow}</div>
            { loading 
              ? console.log('no carga')
              : <ItemList products={products} />}
        </main>
  );
};

export default ItemListContainer;
