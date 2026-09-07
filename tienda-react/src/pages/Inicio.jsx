import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Sección Hero / Bienvenida */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
          color: "white",
          padding: "48px 32px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 25px -5px rgba(67, 56, 202, 0.4)",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "white", margin: "0 0 16px 0" }}>
          El Futuro de la Tecnología en un Solo Lugar
        </h2>
        <p style={{ fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 28px", opacity: 0.9 }}>
          Descubre nuestra selección exclusiva de gadgets, periféricos y equipamiento para llevar tu espacio de trabajo al siguiente nivel.
        </p>
        <Link
          to="/inventario"
          style={{
            display: "inline-block",
            backgroundColor: "#10b981",
            color: "white",
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "1rem",
            boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)",
          }}
        >
          Explorar Catálogo 
        </Link>
      </section>

      {/* Sección de Beneficios */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>⚡</div>
          <h3 style={{ marginBottom: "8px", color: "#0f172a" }}>Envíos Ultrarrápidos</h3>
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
            Entregas en tiempo récord a todo el país para que no detengas tu productividad.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🛡️</div>
          <h3 style={{ marginBottom: "8px", color: "#0f172a" }}>Garantía Total</h3>
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
            Todos nuestros productos cuentan con garantía oficial directa con el fabricante.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🎧</div>
          <h3 style={{ marginBottom: "8px", color: "#0f172a" }}>Soporte 24/7</h3>
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
            Nuestro equipo de especialistas está listo para asesorarte en tus compras en todo momento.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Inicio;