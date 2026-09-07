import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Inventario from "./pages/Inventario";
import NuevoProducto from "./pages/NuevoProducto";
import DetalleProducto from "./pages/DetalleProducto";
import Acerca from "./pages/Acerca";
import NoEncontrado from "./pages/NoEncontrado";
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
    localStorage.setItem("inventario", JSON.stringify(productos));
  }, [productos]);

  const restaurarInventario = () => {
    localStorage.removeItem("inventario");
    setProductos(productosIniciales);
    setProductoEditando(null);
  };

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const actualizarProducto = (actualizado) => {
    const nuevaLista = productos.map((producto) =>
      producto.id === actualizado.id ? actualizado : producto
    );
    setProductos(nuevaLista);
    setProductoEditando(null);
  };

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
    if (productoEditando && productoEditando.id === id) {
      setProductoEditando(null);
    }
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, producto.stock + cambio),
        };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  return (
    <main className="contenedor">
      <h1>🛒 Tienda Tecnológica</h1>

      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/inventario"
          element={
            <Inventario
              productos={productos}
              onEliminar={eliminarProducto}
              onModificarStock={modificarStock}
              onEditar={(p) => setProductoEditando(p)}
              onRestaurar={restaurarInventario}
            />
          }
        />

        <Route
          path="/nuevo"
          element={
            <NuevoProducto
              onAgregar={agregarProducto}
              productoEditando={productoEditando}
              onActualizar={actualizarProducto}
            />
          }
        />

        <Route 
          path="/productos/:id" 
          element={<DetalleProducto productos={productos} />} 
        />

        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </main>
  );
}

export default App;