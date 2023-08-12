import {useState, useEffect} from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(()=> {
    const querydb = getFirestore();
    const queryColletion = collection(querydb, 'items');
    if (categoriaId) {
      const queryFilter = query(queryColletion, where('category', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(p => ({id: p.id, ...p.data() }))))
    } else {
      getDocs(queryColletion)
        .then(res => setData(res.docs.map(p => ({id: p.id, ...p.data() }))))      
    }
    
  }, [categoriaId])

  return (
    <>
      <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;
