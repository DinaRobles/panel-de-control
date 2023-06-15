import "../EstadisticasStyles.css";

function TotalCategorias({ totalCat }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">Categorias disponibles</p>
        <img
          src="src/componentes/estadisticas/partes/img/vendidos.png"
          alt=""
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{totalCat}</p>
      </div>
    </section>
  );
}

export default TotalCategorias;
