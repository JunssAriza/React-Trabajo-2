import { useParams, NavLink } from "react-router-dom";

function DetalleProducto({ productos }) {
  const { id } = useParams();
  const producto = productos.find((item) => String(item.id) === id);

  if (!producto) {
    return (
      <section style={{ textAlign: "center", padding: "40px" }}>
        <h2>Producto no encontrado</h2>
        <NavLink to="/inventario" style={{ color: "#4f46e5", fontWeight: "bold" }}>
          Volver al inventario
        </NavLink>
      </section>
    );
  }

  return (
    <section style={{ padding: "24px", background: "white", borderRadius: "12px", maxWidth: "500px", margin: "0 auto", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
      <img
        src={producto.imagen || "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80"}
        alt={producto.nombre}
        style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px", marginBottom: "16px" }}
      />
      <h1 style={{ marginBottom: "16px", color: "#0f172a" }}>{producto.nombre}</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px", fontSize: "1.1rem" }}>
        <p><strong>Precio:</strong> ${producto.precio.toLocaleString("es-CO")}</p>
        <p><strong>Stock:</strong> {producto.stock} unidades</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>
      </div>

      <NavLink
        to="/inventario"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          backgroundColor: "#4f46e5",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600"
        }}
      >
        ← Volver al inventario
      </NavLink>
    </section>
  );
}

export default DetalleProducto;