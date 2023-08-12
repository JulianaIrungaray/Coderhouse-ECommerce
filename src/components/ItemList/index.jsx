import React from 'react';
import Item from '../Item';

const ItemList = ({data = []}) => {
  return (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gap: '10px',
      marginBottom: '320px'
    }}>
      {data.map(productos => <Item key={productos.id} info={productos} />)}
    </div>
  );
}

export default ItemList;