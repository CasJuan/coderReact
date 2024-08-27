import cart from './img/cart.svg'
import { useCartContex } from './Context/CartContext'

export const CardWidget = () => {

  const {qtyItems} = useCartContex();

  return (
    <div>
        <img src={cart} alt='carritoCompras'/>
        <span>{qtyItems}</span>
    </div>
  )
}
