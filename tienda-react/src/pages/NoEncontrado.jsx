import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2 style={{ fontSize: "3rem", marginBottom: "10px" }}>404</h2>
      <h3>Página no encontrada</h3>
      <p style={{ color: "#64748b", margin: "16px 0 24px" }}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>
      <Link 
        to="/" 
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "500"
        }}
      >
        🏠 Volver al Inicio
      </Link>
    </div>
  );
}

export default NoEncontrado;