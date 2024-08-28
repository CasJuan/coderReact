/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ stock, initial, handleOnBuy }) => {

    const navigate = useNavigate();
    const [qty,setQty] = useState(initial);
    const [iteamAdded, setItemAdded] = useState(false);

    const handleClick = (op) => {
      op === "-" ? clickMenos() : clickMas();
    };
  
    const clickMenos = () => {
      if (qty === 1) {
        alert("No se puede seleccionar menos de 1 producto");
        return;
      }
      setQty(qty - 1);
    };
  
    const clickMas = () => {
      if (qty === stock) {
        alert("No hay mas stock");
        return;
      }
      setQty(qty + 1);
    };
  
    const handleAddToCart = () =>{
      handleOnBuy(qty)
      setItemAdded(true)
    }
  
    const handleGoToCheckout = () =>{
      setItemAdded(false)
      navigate("/cart")
    }

  return (
    <>
    { iteamAdded ? (
        <Button variant="primary" onClick={handleGoToCheckout}>Pagar!</Button>
    ) : (
        <>
        <div>
        <button onClick={() => handleClick("-")}>-</button>
        <span>{qty}</span>
        <button onClick={() => handleClick("+")}>+</button>
      </div> 
        <Button variant="primary" onClick={handleAddToCart}>Agregar al Carrito</Button> 
        </> 
        )
    }
    </>
  )
}

export default ItemCount;