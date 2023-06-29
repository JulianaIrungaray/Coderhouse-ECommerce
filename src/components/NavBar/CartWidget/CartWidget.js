import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
      <AiOutlineShoppingCart size={28} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;