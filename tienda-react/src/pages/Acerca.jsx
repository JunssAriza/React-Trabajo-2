function Acerca() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
      <section style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
        <h2 style={{ marginTop: 0, color: "#0f172a" }}>Sobre Tienda Tecnológica</h2>
        <p style={{ color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
          Fundada en 2024, <strong>Tienda Tecnológica</strong> nació con el firme propósito de democratizar el acceso a las últimas innovaciones en equipamiento informático, mobiliario ergonómico y accesorios de audio de alta gama.
        </p>
        <p style={{ color: "#475569", lineHeight: "1.7" }}>
          Trabajamos día a día para brindarle a desarrolladores, creadores de contenido, gamers y empresas la infraestructura tecnológica necesaria para potenciar sus ideas al máximo.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        <div style={{ background: "white", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#4f46e5", marginBottom: "10px" }}> Nuestra Misión</h3>
          <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Ofrecer productos de hardware de primera calidad respaldados por un control de inventario transparente, precios competitivos y una experiencia de usuario excepcional.
          </p>
        </div>

        <div style={{ background: "white", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#10b981", marginBottom: "10px" }}> Nuestra Visión</h3>
          <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Convertirnos en el distribuidor líder de tecnología en la región, destacados por nuestra agilidad logística y la confianza depositada por miles de clientes satisfechos.
          </p>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", textAlign: "center" }}>
        <h3 style={{ color: "#0f172a", marginBottom: "8px" }}> ¿Tienes dudas o sugerencias?</h3>
        <p style={{ color: "#64748b", marginBottom: "12px" }}>
          Escríbenos a <strong>contacto@tiendatec.com</strong> o visita nuestra sede central en Bogotá, Colombia.
        </p>
      </section>
    </div>
  );
}

export default Acerca;