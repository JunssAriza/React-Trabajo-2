import { useState } from "react";
import ProductoCard from "./components/ProductoCard";
import FormularioProducto from "./components/FormularioProducto";
import { productos as productosIniciales } from "./data/productos";
import "./App.css";

function App() {
  // Misión 2: Convertimos los productos en estado
  const [productos, setProductos] = useState(productosIniciales);

  // Misión 5: Función para agregar nuevos productos
  const agregarProducto = (nuevoProducto) => {
    setProductos([
      ...productos,
      nuevoProducto
    ]);
  };

  // Misión 6: Función para eliminar producto
  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter(producto => producto.id !== id);
    setProductos(nuevaLista);
  };

  // Misión 7: Función para modificar el stock (evitando valores negativos)
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

  // Estado del buscador
  const [busqueda, setBusqueda] = useState("");

  // Estado de categoría
  const [categoria, setCategoria] = useState("Todas");

  // Estado para mostrar solamente disponibles
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // FILTRAMOS LOS PRODUCTOS
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

  // Misión 8: TABLERO DINÁMICO (calculado dinámicamente según el estado/filtros)
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

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>🛒 Tienda Tecnológica</h1>

      {/* FORMULARIO PARA AGREGAR PRODUCTOS */}
      <div
        style={{
          marginBottom: "32px",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
        }}
      >
        <FormularioProducto
          onAgregar={agregarProducto}
        />
      </div>

      {/* RESUMEN DEL INVENTARIO (Misión 8) */}
      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">
            Total Productos
          </span>
          <span className="resumen-valor">
            {productosFiltrados.length}
          </span>
        </div>

        <div className="resumen-item">
          <span className="resumen-label">
            Disponibles
          </span>
          <span className="resumen-valor">
            {disponibles.length}
          </span>
        </div>

        <div className="resumen-item">
          <span className="resumen-label">
            Agotados
          </span>
          <span className="resumen-valor">
            {productosAgotados.length}
          </span>
        </div>

        <div className="resumen-item">
          <span className="resumen-label">
            Valor del Inventario
          </span>
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
        onChange={(evento) =>
          setCategoria(evento.target.value)
        }
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
          onChange={(evento) =>
            setSoloDisponibles(evento.target.checked)
          }
        />
        Mostrar únicamente disponibles
      </label>

      {/* BOTÓN LIMPIAR */}
      <button onClick={limpiarFiltros}>
        Limpiar filtros
      </button>

      {/* CONTADOR TEXTUAL */}
      <p>
        Productos encontrados: {productosFiltrados.length}
      </p>

      {/* MENSAJE SI NO HAY RESULTADOS */}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      {/* CATÁLOGO FILTRADO (Misiones 6 y 7 pasando props) */}
      <section className="productos">
        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={eliminarProducto}
            onModificarStock={modificarStock}
          />
        ))}
      </section>
    </main>
  );
}

export default App;