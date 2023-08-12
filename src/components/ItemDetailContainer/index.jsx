import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); 
  const { detalleId } = useParams();

  // FIRESTORE
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'items', detalleId);
    getDoc(queryDoc)
      .then(res => {
        setData({ id: res.id, ...res.data() });
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, [detalleId]);

  return (
    <div className='container'>
      {loading ? (
        <Spinner 
          animation='border' 
          role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </Spinner>
      ) : (
        <ItemDetail data={data} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
