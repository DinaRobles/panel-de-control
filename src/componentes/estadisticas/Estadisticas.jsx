import "./EstadisticasStyles.css";
import NumTotalPedidos from "./partes/NumTotalPedidos";
import NumTotalProductos from "./partes/NumTotalProductos";
import { useEffect, useState } from "react";
import { getTotalProducts } from "./api";
import CantidadProm from "./partes/CantidadProm";
import UsuariosTotales from "./partes/UsuariosTotales";
import TotalCategorias from "./partes/TotalCategorias";

function Estadisticas() {
  const [productsCount, setProductsCount] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalCategorias, setTotalCategorias] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    fetchCartData();
    fetchCategoriesData();
  }, []);

  const fetchData = async () => {
    try {
      // Aqui obtengo la cantidad de productos que extraje del archivo api.js
      const productsCount = await getTotalProducts();
      setProductsCount(productsCount);

      setLoading(false);

      // Aqui obtengo la cantidad total de usuarios
      const response = await fetch("https://fakestoreapi.com/users");
      const users = await response.json();
      const totalUsuarios = users.length;
      setTotalUsuarios(totalUsuarios);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Aqui obtengo la cantidad total de pedidos
  const fetchCartData = () => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => setCartData(json))
      .catch((error) => console.log(error));
  };

  // Aqui obtengo la cantidad total de categorias
  const fetchCategoriesData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setTotalCategorias(json.length))
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Aqui calculo el promedio de la cantidad de productos en el carrito
  function calculateCantidadPromedio() {
    let totalProducts = 0;

    cartData.forEach((cart) => {
      cart.products.forEach((product) => {
        totalProducts += product.quantity;
      });
    });

    const totalCarts = cartData.length;
    const averageQuantity = totalCarts > 0 ? totalProducts / totalCarts : 0;
    return averageQuantity.toFixed(2);
  }

  return (
    <section className="container">
      <NumTotalProductos totalProductos={productsCount} />
      <NumTotalPedidos totalPedidos={cartData.length} />
      <CantidadProm datosProm={calculateCantidadPromedio()} />
      <UsuariosTotales usuariostotales={totalUsuarios} />
      <TotalCategorias totalCat={totalCategorias} />
    </section>
  );
}

export default Estadisticas;
