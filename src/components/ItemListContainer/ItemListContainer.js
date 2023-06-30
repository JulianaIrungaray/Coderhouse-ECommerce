const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2>{greeting}</h2>
      <img src="https://wallpapers.com/images/featured/studio-ghibli-tykbiycf0hjhjo39.jpg" alt="Imagen" />
    </div>
  );
};

export default ItemListContainer;