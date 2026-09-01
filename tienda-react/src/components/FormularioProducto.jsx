import { useState, useEffect } from "react";

function FormularioProducto({ onAgregar, productoEditando, onActualizar }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: ""
  });

  useEffect(() => {
    if (productoEditando) {
      setFormulario({
        nombre: productoEditando.nombre,
        categoria: productoEditando.categoria,
        precio: productoEditando.precio,
        stock: productoEditando.stock
      });
    } else {
      setFormulario({
        nombre: "",
        categoria: "",
        precio: "",
        stock: ""
      });
    }
  }, [productoEditando]);

  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (!formulario.nombre || !formulario.categoria || !formulario.precio || formulario.stock === "") {
      alert("Por favor, completa todos los campos");
      return;
    }

    if (productoEditando) {
      const productoActualizado = {
        ...productoEditando,
        nombre: formulario.nombre,
        categoria: formulario.categoria,
        precio: Number(formulario.precio),
        stock: Number(formulario.stock)
      };
      onActualizar(productoActualizado);
    } else {
      const nuevoProducto = {
        id: Date.now(),
        nombre: formulario.nombre,
        categoria: formulario.categoria,
        precio: Number(formulario.precio),
        stock: Number(formulario.stock),
        imagen: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80"
      };
      onAgregar(nuevoProducto);
    }

    setFormulario({
      nombre: "",
      categoria: "",
      precio: "",
      stock: ""
    });
  };

  return (
    <form className="formulario-agregar" onSubmit={manejarEnvio}>
      <h2 className="formulario-titulo">
        {productoEditando ? "✏️ Editar Producto" : "✨ Agregar Nuevo Producto"}
      </h2>

      <div className="formulario-grid">
        <div className="campo-formulario">
          <label>Nombre del producto</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Teclado Inalámbrico"
            value={formulario.nombre}
            onChange={manejarCambio}
          />
        </div>

        <div className="campo-formulario">
          <label>Categoría</label>
          <input
            type="text"
            name="categoria"
            placeholder="Ej. Periféricos"
            value={formulario.categoria}
            onChange={manejarCambio}
          />
        </div>

        <div className="campo-formulario">
          <label>Precio ($)</label>
          <input
            type="number"
            name="precio"
            placeholder="Ej. 120000"
            value={formulario.precio}
            onChange={manejarCambio}
          />
        </div>

        <div className="campo-formulario">
          <label>Stock inicial</label>
          <input
            type="number"
            name="stock"
            placeholder="Ej. 10"
            value={formulario.stock}
            onChange={manejarCambio}
          />
        </div>
      </div>

      <button type="submit" className="btn-agregar">
        {productoEditando ? "Guardar cambios" : "+ Agregar producto al inventario"}
      </button>
    </form>
  );
}

export default FormularioProducto;