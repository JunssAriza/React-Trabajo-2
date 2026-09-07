import { useNavigate } from "react-router-dom"; 
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto({ onAgregar, productoEditando, onActualizar }) {
  const navigate = useNavigate();

  const handleGuardar = (producto) => {
    if (productoEditando) {
      onActualizar(producto);
    } else {
      onAgregar(producto);
    }

    
    navigate("/inventario");
  };

  return (
    <div>
      <h2>{productoEditando ? "Editar Producto" : "Agregar Nuevo Producto"}</h2>
      <FormularioProducto
        onAgregar={handleGuardar}
        productoEditando={productoEditando}
        onActualizar={handleGuardar}
      />
    </div>
  );
}

export default NuevoProducto;