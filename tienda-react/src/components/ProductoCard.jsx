function ProductoCard({ producto }) {
  const estaDisponible = producto.stock > 0;
  const estadoTexto = estaDisponible ? 'Disponible' : 'Agotado';
  const estadoClase = estaDisponible ? 'badge disponible' : 'badge agotado';

  return (
    <article className="producto-card">
      <div className="imagen-contenedor">
        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
        <span className={estadoClase}>{estadoTexto}</span>
      </div>
      
      <div className="producto-info">
        <span className="categoria-tag">{producto.categoria}</span>
        <h3 className="producto-titulo">{producto.nombre}</h3>
        
        <div className="producto-footer">
          <p className="producto-precio">${producto.precio.toLocaleString()}</p>
          <p className="producto-stock">Stock: {producto.stock}</p>
        </div>
        
        <button className="btn-comprar" disabled={!estaDisponible}>
          {estaDisponible ? 'Comprar' : 'Sin Stock'}
        </button>
      </div>
    </article>
  );
}

export default ProductoCard;