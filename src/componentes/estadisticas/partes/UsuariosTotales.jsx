import "../EstadisticasStyles.css";

function UsuariosTotales({ usuariostotales }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">Usuarios totales en la tienda</p>
        <img
          src="src/componentes/estadisticas/partes/img/ingresos.png"
          alt="Esta"
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{usuariostotales}</p>
      </div>
    </section>
  );
}

export default UsuariosTotales;
