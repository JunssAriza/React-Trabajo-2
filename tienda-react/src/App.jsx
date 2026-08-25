import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
  );

  return (
    <main className="contenedor">
      <h1>🛒 Tienda Tecnológica</h1>

      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">Total Productos</span>
          <span className="resumen-valor">{productos.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Disponibles</span>
          <span className="resumen-valor">{disponibles.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Valor del Inventario</span>
          <span className="resumen-valor">${valorInventario.toLocaleString()}</span>
        </div>
        
        {hayAgotados && (
          <div className="alerta-agotados">
            ⚠️ Atención: Hay productos agotados en el inventario.
          </div>
        )}
      </div>

      <h2>Catálogo Completo</h2>
      <section className="productos">
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>

      <hr />

      <h2>Solo Productos Disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;