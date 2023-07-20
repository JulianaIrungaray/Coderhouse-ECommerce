import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className='item prod'>
      <img src={info.image} alt='prod'/>
      <p>{info.title}</p>
    </Link>
  )
}

export default Item;