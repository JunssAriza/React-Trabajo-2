import { useState } from "react";
import ProductoCard from "../components/ProductoCard";

function Inventario({
  productos,
  onEliminar,
  onModificarStock,
  onEditar,
  onRestaurar,
}) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [criterioOrden, setCriterioOrden] = useState("nombre-asc");

  // Filtrado de productos
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    let coincideEstado = true;
    if (filtroEstado === "disponibles") {
      coincideEstado = producto.stock > 0;
    } else if (filtroEstado === "agotados") {
      coincideEstado = producto.stock === 0;
    }

    return coincideNombre && coincideCategoria && coincideEstado;
  });

  // Ordenamiento
  const productosProcesados = [...productosFiltrados].sort((a, b) => {
    switch (criterioOrden) {
      case "nombre-asc":
        return a.nombre.localeCompare(b.nombre);
      case "precio-asc":
        return a.precio - b.precio;
      case "precio-desc":
        return b.precio - a.precio;
      case "stock-asc":
        return a.stock - b.stock;
      case "stock-desc":
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

  // Cálculos para las métricas del panel
  const disponibles = productosFiltrados.filter(
    (producto) => producto.stock > 0
  );

  const productosAgotados = productosFiltrados.filter(
    (producto) => producto.stock === 0
  );

  const valorInventario = productosFiltrados.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setFiltroEstado("todos");
    setCriterioOrden("nombre-asc");
  };

  return (
    <div>
      {/* Panel de Resumen */}
      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">Total Productos</span>
          <span className="resumen-valor">{productosFiltrados.length}</span>
        </div>

        <div className="resumen-item">
          <span className="resumen-label">Disponibles</span>
          <span className="resumen-valor">{disponibles.length}</span>
        </div>

        <div className="resumen-item">
          <span className="resumen-label">Agotados</span>
          <span className="resumen-valor">{productosAgotados.length}</span>
        </div>

        <div className="resumen-item">
          <span className="resumen-label">Valor del Inventario</span>
          <span className="resumen-valor">
            ${valorInventario.toLocaleString("es-CO")}
          </span>
        </div>
      </div>

      {productosAgotados.length > 0 && (
        <div className="alerta-agotados">
          ⚠️ Atención: Hay productos agotados en esta búsqueda.
        </div>
      )}

      <h2>Catálogo de Productos</h2>

      {/* Controles de Filtros */}
      <div
        className="controles-filtros"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}
      >
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Pantallas">Pantallas</option>
          <option value="Audio">Audio</option>
          <option value="Mobiliario">Mobiliario</option>
          <option value="Video">Video</option>
        </select>

        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="todos">Todos los estados</option>
          <option value="disponibles">Disponibles</option>
          <option value="agotados">Agotados</option>
        </select>

        <select
          value={criterioOrden}
          onChange={(e) => setCriterioOrden(e.target.value)}
        >
          <option value="nombre-asc">Nombre A-Z</option>
          <option value="precio-asc">Precio: Menor a Mayor</option>
          <option value="precio-desc">Precio: Mayor a Menor</option>
          <option value="stock-asc">Stock: Menor a Mayor</option>
          <option value="stock-desc">Stock: Mayor a Menor</option>
        </select>

        <button type="button" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      <p>Productos encontrados: {productosProcesados.length}</p>

      {productosProcesados.length === 0 ? (
        <p>No se encontraron productos con los criterios seleccionados.</p>
      ) : null}

      {/* Cuadrícula de Tarjetas */}
      <section className="productos">
        {productosProcesados.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={onEliminar}
            onModificarStock={onModificarStock}
            onEditar={onEditar}
          />
        ))}
      </section>

      <button
        type="button"
        className="btn-restaurar-flotante"
        onClick={onRestaurar}
      >
        🔄 Restaurar inventario
      </button>
    </div>
  );
}

export default Inventario;