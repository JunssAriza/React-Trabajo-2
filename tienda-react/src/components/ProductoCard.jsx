// src/components/ProductoCard.jsx

// Comentario de sustentación (Misión 6): 
// Usamos filter() en lugar de find() porque filter() genera un nuevo arreglo excluyendo el objeto eliminado, mientras que find() solo retorna la primera coincidencia sin modificar el arreglo.

function ProductoCard({ producto, onEliminar, onModificarStock }) {
  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      
      {/* Misión 7: Botones para modificar stock */}
      <div className="stock-control">
        <button onClick={() => onModificarStock(producto.id, -1)}>-</button>
        <span> Stock: {producto.stock} </span>
        <button onClick={() => onModificarStock(producto.id, 1)}>+</button>
      </div>

      {/* Misión 6: Botón para eliminar */}
      <button onClick={() => onEliminar(producto.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default ProductoCard;