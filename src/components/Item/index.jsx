import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ info }) => {
  return (
    <div className='container'>
      <Link to={`/detalle/${info.id}`} className='item prod'>
        <img src={info.image} alt='prod' />
        <p>{info.title}</p>
        <p>US${info.price}</p>
      </Link>
    </div>
  );
}

export default Item;
