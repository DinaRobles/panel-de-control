import "../EstadisticasStyles.css";

function ProductosMasVendidos({ masVendidos }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">Productos más vendidos</p>
        <img
          src="src/componentes/estadisticas/partes/img/vendidos.png"
          alt=""
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{masVendidos}</p>
      </div>
    </section>
  );
}

export default ProductosMasVendidos;
