import { useCartContex } from '../Context/CartContext';
import cart from '../img/cart.svg'

const CardWidget = () => {

  const {qtyItems} = useCartContex();

  return (
    <div>
        <img src={cart} alt='carritoCompras'/>
        <span>{qtyItems}</span>
    </div>
  )
}

export default CardWidget;
