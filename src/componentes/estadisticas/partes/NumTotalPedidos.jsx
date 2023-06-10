import "../EstadisticasStyles.css";

function NumTotalPedidos({ totalPedidos }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">Número total de pedidos</p>
        <img
          src="src/componentes/estadisticas/partes/img/pedidos.png"
          alt=""
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{totalPedidos}</p>
      </div>
    </section>
  );
}

export default NumTotalPedidos;
