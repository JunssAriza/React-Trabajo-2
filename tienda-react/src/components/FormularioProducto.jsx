// src/components/FormularioProducto.jsx
import { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: ""
  });

  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    // Validación mínima (Misión 5)
    if (
      !formulario.nombre.trim() ||
      !formulario.categoria.trim() ||
      Number(formulario.precio) <= 0 ||
      Number(formulario.stock) < 0
    ) {
      alert("Revisa los datos del producto");
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre: formulario.nombre,
      categoria: formulario.categoria,
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
      // Asignamos una imagen por defecto directamente en el código
      imagen: "https://picsum.photos/300/200"
    };

    onAgregar(nuevoProducto);

    // Limpiar formulario
    setFormulario({
      nombre: "",
      categoria: "",
      precio: "",
      stock: ""
    });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agregar producto</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formulario.categoria}
        onChange={manejarCambio}
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formulario.precio}
        onChange={manejarCambio}
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formulario.stock}
        onChange={manejarCambio}
      />
      <button type="submit">Agregar producto</button>
    </form>
  );
}

export default FormularioProducto;