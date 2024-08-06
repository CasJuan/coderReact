/* eslint-disable react/prop-types */
import Item from "./Iteam";

const ItemList = ({ products }) => {
  
    return (
    <>
      <div className={``}>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
