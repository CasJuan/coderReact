/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '10rem' }} className='m-2'>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/product/${product.id}`} >
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
