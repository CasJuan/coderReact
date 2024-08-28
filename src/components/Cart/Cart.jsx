import Table from 'react-bootstrap/Table';
import { useCartContex } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/dbConection';



const Cart = () => {

  const {cart, total, removeItem, clearCart} = useCartContex();
  const [formData, setFromData] = useState({naem:"", tel:"", email:""});

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id,price,qty);
  }

  const handleClearCart = () => {
    clearCart();
  }

  const handleOnChange = (e) => {
    setFromData({...formData, [e.target.name]: e.target.value})
  }

  const handleSaveCart = () => {
    console.log("Saving in Database")
    console.log("formData", formData)
    console.log("cart". cart)

    const orderCollectio = collection(db, "orders")
    const newOrder = {
      buyer:formData,
      items:cart,
      date:new Date(),
      total: total
    }

    addDoc(orderCollectio, newOrder)
      .then((doc) => {
        alert("Orden registrada" + doc.id)
        console.log("Orden registrada" + doc.id)
        clearCart();
        setFromData({name:"",tel:"",email:""})
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart?.map(({id,name,price,qty},index) => {
          return (
            <tr key={index} >
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{qty}</td>
              <td>
                <button onClick={() => handleRemoveItem(id,price,qty)}>
                  Remove Item
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={4}>Total Precio</td>
          <td>${total}</td>
        </tr>
      </tbody>
    </Table>

    {/* <button onClick={handleClearCart}>Limpiar Carro</button> */}
    <Button variant="outline-warning" onClick={handleClearCart}>Limpiar Carro</Button>{' '}

    {/* <input type='text' name='name' id='name' placeholder='Ingrese su Nombre' onChange={(e) => handleOnChange(e)} ></input>
    <input type='number' name='tel' id='tel' placeholder='Ingrese su Telefono' onChange={(e) => handleOnChange(e)} ></input>
    <input type='email' name='email' id='email' placeholder='Ingrese su Email' onChange={(e) => handleOnChange(e)} ></input>
    <button onClick={handleSaveCart}>Finalizar Compra</button> */}

    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            onChange={(e) => handleOnChange(e)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            onChange={(e) => handleOnChange(e)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => handleOnChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Colocar email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button type="submit" onClick={handleSaveCart} >Finalizar Compra</Button>
    </Form>


    </>
  )
}

export default Cart;