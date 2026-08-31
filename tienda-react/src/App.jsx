import { useState } from "react";
import ProductoCard from "./components/ProductoCard";
import { productos } from "./data/productos";
import "./App.css";

function App() {
  // Estado del buscador
  const [busqueda, setBusqueda] = useState("");

  // Estado de categoría
  const [categoria, setCategoria] = useState("Todas");

  // Estado para mostrar solamente disponibles
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // 1. PRIMERO FILTRAMOS LOS PRODUCTOS
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  // 2. AHORA CALCULAMOS EL RESUMEN BASÁNDONOS EN LOS PRODUCTOS FILTRADOS
  // Productos disponibles del inventario filtrado
  const disponibles = productosFiltrados.filter(
    producto => producto.stock > 0
  );

  // Productos agotados del inventario filtrado
  const productosAgotados = productosFiltrados.filter(
    producto => producto.stock === 0
  );

  // Valor total del inventario filtrado
  const valorInventario = productosFiltrados.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>🛒 Tienda Tecnológica</h1>

      {/* RESUMEN DEL INVENTARIO (Ahora dinámico) */}
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

      {/* AVISO DE AGOTADOS */}
      {productosAgotados.length > 0 && (
        <div className="alerta-agotados">
          ⚠️ Atención: Hay productos agotados en esta búsqueda.
        </div>
      )}

      <h2>Catálogo de Productos</h2>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      {/* FILTRO POR CATEGORÍA */}
      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Periféricos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
        <option value="Audio">Audio</option>
        <option value="Mobiliario">Mobiliario</option>
        <option value="Video">Video</option>
      </select>

      {/* SOLO DISPONIBLES */}
      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      {/* BOTÓN LIMPIAR */}
      <button onClick={limpiarFiltros}>Limpiar filtros</button>

      {/* CONTADOR TEXTUAL */}
      <p>Productos encontrados: {productosFiltrados.length}</p>

      {/* MENSAJE SI NO HAY RESULTADOS */}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      {/* CATÁLOGO FILTRADO */}
      <section className="productos">
        {productosFiltrados.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;