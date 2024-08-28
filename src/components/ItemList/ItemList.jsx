/* eslint-disable react/prop-types */
import Item from "../Item/Iteam";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
/* import Col from 'react-bootstrap/Col'; */

const ItemList = ({ products }) => {
  
    return (
    <>
        <Container>
          <Row>
          {products.map((product) => {
            return <Item key={product.id} product={product} />
          /* return <Col> <Item key={product.id} product={product} /> </Col>; */
        })}
          </Row>
        </Container>
    </>
  );
};

export default ItemList;
