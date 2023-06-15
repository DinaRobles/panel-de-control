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

