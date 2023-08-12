import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'; 
import './Cart.css';
import CartItem from '../CartItem';

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className='cart-container'>
      {cart.length === 0 ? (
        <h2>No hay productos en el carrito (╥_╥)</h2>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className='total-price'>
            <p>Precio total: US${totalPrice()}</p>
          </div>
          <button className='btn btn-danger' onClick={handleClearCart}>
            Vaciar Carrito
          </button><br></br>
          <Link to='/checkout'> 
            <button className='btn btn-success btncompra'>Finalizar Compra</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;







