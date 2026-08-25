function ProductoCard({ producto }) {
  const {
    nombre,
    precio,
    categoria,
    stock,
    imagen
  } = producto;

  const estado =
    stock > 0
      ? "Disponible"
      : "Agotado";

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <article className="producto-card">

      <div className="imagen-contenedor">
        <img
          src={imagen}
          alt={nombre}
          className="producto-imagen"
        />

        <span
          className={
            stock > 0
              ? "badge disponible"
              : "badge agotado"
          }
        >
          {estado}
        </span>
      </div>

      <div className="producto-info">

        <span className="categoria-tag">
          {categoria}
        </span>

        <h3 className="producto-titulo">
          {nombre}
        </h3>

        <div className="producto-footer">

          <p className="producto-precio">
            ${formatearPrecio(precio)}
          </p>

          <p className="producto-stock">
            Stock: {stock}
          </p>

        </div>

        <button
          className="btn-comprar"
          onClick={mostrarProducto}
          disabled={stock === 0}
        >
          {
            stock > 0
              ? "Ver producto"
              : "Agotado"
          }
        </button>

      </div>

    </article>
  );
}

export default ProductoCard;