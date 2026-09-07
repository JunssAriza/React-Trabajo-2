import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", padding: "15px", backgroundColor: "#f1f5f9", borderRadius: "8px" }}>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/inventario">Inventario</NavLink>
      <NavLink to="/nuevo">Nuevo producto</NavLink>
      <NavLink to="/acerca">Acerca</NavLink>
    </nav>
  );
}

export default Navbar;