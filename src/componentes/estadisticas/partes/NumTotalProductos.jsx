import "../EstadisticasStyles.css";

function NumTotalProductos({ totalProductos }) {
  return (
    <section className="section-estadistica">
      <div className="parte-1">
        <p className="titulo-estadistica">
          Número total de productos en la tienda
        </p>
        <img
          src="src/componentes/estadisticas/partes/img/productos.png"
          alt=""
          className="img-estadistica"
        />
      </div>
      <div className="parte-2">
        <p className="estadistica">{totalProductos}</p>
      </div>
    </section>
  );
}

export default NumTotalProductos;
