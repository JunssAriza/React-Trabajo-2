import { useState, useEffect } from "react";
import ProductoCard from "./components/ProductoCard";
import FormularioProducto from "./components/FormularioProducto";
import { productos as productosIniciales } from "./data/productos";
import "./App.css";

function App() {
  const obtenerProductosIniciales = () => {
    const guardados = localStorage.getItem("inventario");
    if (guardados) {
      return JSON.parse(guardados);
    }
    return productosIniciales;
  };

  const [productos, setProductos] = useState(obtenerProductosIniciales);
  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "inventario",
      JSON.stringify(productos)
    );
  }, [productos]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([
      ...productos,
      nuevoProducto
    ]);
  };

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter(producto => producto.id !== id);
    setProductos(nuevaLista);
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map(producto => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, producto.stock + cambio)
        };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const disponibles = productosFiltrados.filter(
    producto => producto.stock > 0
  );

  const productosAgotados = productosFiltrados.filter(
    producto => producto.stock === 0
  );

  const valorInventario = productosFiltrados.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>🛒 Tienda Tecnológica</h1>

      <div
        style={{
          marginBottom: "32px",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
        }}
      >
        <FormularioProducto onAgregar={agregarProducto} />
      </div>

      {productoEditando && (
        <div style={{ padding: "10px", background: "#fef3c7", borderRadius: "8px", marginBottom: "16px" }}>
          Editando actualmente: <strong>{productoEditando.nombre}</strong>
        </div>
      )}

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

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

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

      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      <button onClick={limpiarFiltros}>Limpiar filtros</button>

      <p>Productos encontrados: {productosFiltrados.length}</p>

      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      <section className="productos">
        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={eliminarProducto}
            onModificarStock={modificarStock}
            onEditar={(p) => setProductoEditando(p)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;