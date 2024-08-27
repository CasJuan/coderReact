/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { useCartContex } from '../Context/CartContext';

const ItemDetail = ({id,name,image,description,price,stock}) => {   

    const {addToCart} = useCartContex();

    const handleOnBuy = (qty) => {
      console.log(`Se agregaron ${qty}`)
      const item = {id, name,description,price};
      addToCart(item, qty);
    }

    return (
      <Card className="text-center m-2" style={{ width: '18rem' }}>
        <Card.Header>{name}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <ItemCount stock={stock} initial = {1} handleOnBuy={handleOnBuy} />
        </Card.Body>
      </Card>    
  )
}

export default ItemDetail;

/* id: 1,
name: 'Lukather',
image: 'guitarra_01',
description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
price: 299,
color:'Red' */