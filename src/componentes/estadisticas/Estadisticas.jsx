import "./EstadisticasStyles.css";
import Ingresos from "./partes/Ingresos";
import NumTotalPedidos from "./partes/NumTotalPedidos";
import NumTotalProductos from "./partes/NumTotalProductos";
import PrecioProm from "./partes/PrecioProm";
import ProductosMasVendidos from "./partes/ProductosMasVendidos";
import { useEffect, useState } from "react";
import {
  getTotalProducts,
  // getTotalOrders,
  // getTotalRevenue,
  getAveragePrice,
  // getTopSellingProducts,
} from "./api";

function Estadisticas() {
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsCount = await getTotalProducts();
      // const ordersCount = await getTotalOrders();
      // const totalRevenue = await getTotalRevenue();
      const averagePrice = await getAveragePrice();
      // const topSellingProducts = await getTopSellingProducts();

      setProductsCount(productsCount);
      setOrdersCount(ordersCount);
      setTotalRevenue(totalRevenue);
      setAveragePrice(averagePrice);
      setTopSellingProducts(topSellingProducts);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="container">
      <NumTotalProductos totalProductos={productsCount} />
      <NumTotalPedidos totalPedidos={ordersCount} />
      {/* <Ingresos datoIngresos={"$"`${totalRevenue}`} /> */}
      {/* <PrecioProm datosProm={"$"`${averagePrice}`} /> */}
      <ProductosMasVendidos masVendidos="Chocolate" />
    </section>
  );
}

export default Estadisticas;
