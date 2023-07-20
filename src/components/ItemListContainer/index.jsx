import {useState, useEffect} from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import datos from '../../productos.json';


const ItemListContainer = () => {

  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(datos.productos);
      }, 1000)
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(prod => prod.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }
  }, [categoriaId])

  return (
    <>
      <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;
