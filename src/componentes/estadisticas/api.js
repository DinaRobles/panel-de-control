import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export const getTotalProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data.length;
  } catch (error) {
    throw new Error("Error al obtener el número total de productos");
  }
};

// export const getTotalOrders = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/orders`);
//     return response.data.length;
//   } catch (error) {
//     if (error.response) {
//       // La solicitud fue realizada y se recibió una respuesta de error del servidor
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // La solicitud se realizó pero no se recibió respuesta
//       console.log(error.request);
//     } else {
//       // Ocurrió un error durante la configuración de la solicitud
//       console.log("Error", error.message);
//     }
//     throw new Error("Error al obtener el número total de pedidos");
//   }
// };

// export const getTotalRevenue = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/orders`);
//     const totalRevenue = response.data.reduce(
//       (total, order) => total + order.total,
//       0
//     );
//     return totalRevenue.toFixed(2);
//   } catch (error) {
//     throw new Error("Error al obtener los ingresos totales generados");
//   }
// };

export const getAveragePrice = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    const prices = response.data.map((product) => product.price);
    const averagePrice =
      prices.reduce((total, price) => total + price, 0) / prices.length;
    return averagePrice.toFixed(2);
  } catch (error) {
    throw new Error("Error al obtener el precio promedio de los productos");
  }
};

// export const getTopSellingProducts = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/orders`);
//     const productsSold = {};
//     response.data.forEach((order) => {
//       order.products.forEach((product) => {
//         if (productsSold[product.productId]) {
//           productsSold[product.productId] += product.quantity;
//         } else {
//           productsSold[product.productId] = product.quantity;
//         }
//       });
//     });
//     const sortedProducts = Object.entries(productsSold)
//       .sort((a, b) => b[1] - a[1])
//       .map(([productId, quantity]) => {
//         return { productId, quantity };
//       });
//     return sortedProducts;
//   } catch (error) {
//     throw new Error("Error al obtener los productos más vendidos");
//   }
// };
