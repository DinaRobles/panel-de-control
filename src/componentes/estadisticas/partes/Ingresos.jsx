import "../EstadisticasStyles.css";

function Ingresos({ datoIngresos }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">Ingresos totales generados</p>
        <img
          src="src/componentes/estadisticas/partes/img/ingresos.png"
          alt="Esta"
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{datoIngresos}</p>
      </div>
    </section>
  );
}

export default Ingresos;
