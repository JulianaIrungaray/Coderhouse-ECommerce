import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import datos from '../../productos.json';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(datos.productos);
      }, 1000);
    });
    getData.then(res => setData(res.find(prod => prod.id === parseInt(detalleId))));
  }, [detalleId])

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer;