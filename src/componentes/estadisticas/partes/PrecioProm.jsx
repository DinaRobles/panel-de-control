import "../EstadisticasStyles.css";

function PrecioProm({ datosProm }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">Precio promedio de los productos</p>
        <img
          src="src/componentes/estadisticas/partes/img/promedio.png"
          alt=""
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{datosProm}</p>
      </div>
    </section>
  );
}

export default PrecioProm;
