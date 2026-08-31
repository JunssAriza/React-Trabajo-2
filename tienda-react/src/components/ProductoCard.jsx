// src/components/ProductoCard.jsx

// Pregunta obligatoria (Misión 6):
// Usamos filter() en lugar de find() porque filter() crea un nuevo arreglo excluyendo el objeto eliminado, mientras que find() solo retorna la primera coincidencia sin modificar el arreglo.

function ProductoCard({ producto, onEliminar, onModificarStock }) {
  // Si el producto no trae propiedad imagen en data/productos.js, usa esta por defecto:
  const imagenMostrar = producto.imagen || "https://picsum.photos/300/200";

  return (
    <div className="producto-card">
      <img 
        src={imagenMostrar} 
        alt={producto.nombre} 
        className="producto-imagen"
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
      />

      <h3>{producto.nombre}</h3>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio.toLocaleString("es-CO")}</p>

      {/* Misión 7: Controles de stock */}
      <div className="stock-control">
        <button onClick={() => onModificarStock(producto.id, -1)}>-</button>
        <span> Stock: {producto.stock} </span>
        <button onClick={() => onModificarStock(producto.id, 1)}>+</button>
      </div>

      {/* Misión 6: Botón eliminar */}
      <button onClick={() => onEliminar(producto.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default ProductoCard;