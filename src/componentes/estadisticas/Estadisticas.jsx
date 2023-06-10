import "./EstadisticasStyles.css";
import Ingresos from "./partes/Ingresos";
import NumTotalPedidos from "./partes/NumTotalPedidos";
import NumTotalProductos from "./partes/NumTotalProductos";
import PrecioProm from "./partes/PrecioProm";
import ProductosMasVendidos from "./partes/ProductosMasVendidos";

function Estadisticas() {
  return (
    <section className="container">
        <NumTotalProductos totalProductos="2823" />
        <NumTotalPedidos totalPedidos="243" />
        <Ingresos datoIngresos="289225323" />
        <PrecioProm datosProm="227423" />
        <ProductosMasVendidos masVendidos="Chocolate" />
      </section>
  );
}

export default Estadisticas;
