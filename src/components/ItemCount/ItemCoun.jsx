import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';

const ItemCoun = ({stock,initial,handleOnBuy}) => {

    const navigate = useNavigate();
    const [qty,setQty] = useState(initial);
    const [iteamAdded, setIteamAdded] = useState(false);

    const handleClick = (op) => {
        op === "-" ? clickMenos : clickMas
    }


    const clickMenos = () => {
        if (qty === 1) {
            alert("No se puede seleccionar menos de 1 producto");
            return;
          }
          setQty(qty - 1);
    }

    const clickMas = () => {
        if (qty === stock) {
            alert("No hay mas stock");
            return;
          }
          setQty(qty + 1);
    }

    const handleAddToCart = () => {
        handleOnBuy(qty);
        setIteamAdded(true)
    }

    const handleGoToCheckout = () => {
        setIteamAdded(false)
        navigate("/cart")
    }



  return (
    <>
    { iteamAdded ? (
        <Button variant="primary" onClick={handleGoToCheckout}>Checkout</Button>
    ) : (
        <>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => handleClick}>-</Button>
          <span>{qty}</span>
          <Button variant="secondary" onClick={() => handleClick}>+</Button>
        </ButtonGroup>
        <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button> 
        </> 
        )
    }
    </>
  )
}

export default ItemCoun