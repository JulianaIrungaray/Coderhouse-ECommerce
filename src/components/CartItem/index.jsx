import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(item.id); 
  };

  return (
    <div className='card mb-4 cart-item'>
      <div className=''>
        <div>
          <img src={item.image} className='img-fluid rounded-start cart-item-image' alt={item.name} />
        </div>
        <div className=''>
          <div className='card-body'>
            <h1 className='card-title'>{item.title}</h1>
            <p className='card-text'>Cantidad: {item.quantity}</p>
            <p className='card-text'>Precio unitario: US${item.price}</p>
            <p className='card-text'>Subtotal: US${item.price * item.quantity}</p><br />
            <button className='btn btn-danger' onClick={handleRemoveItem}>
              Eliminar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

