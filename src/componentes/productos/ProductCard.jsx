import "./ProductoCardStyles.css";

const ProductCard = ({ product }) => {
  return (
    <article className="container-producto">
      <div className="contenedor-imagen-producto">
        <img src={product.image} alt={product.title} className="img-producto" />
      </div>
      <h2 className="titulo-producto">{product.title}</h2>
      <p className="precio-producto">
        Precio: <span className="color-titulo-producto">${product.price}</span>
      </p>
      <p className="categoria-producto">
        Categoria:{" "}
        <span className="color-titulo-producto">{product.category}</span>
      </p>
    </article>
  );
};

export default ProductCard;
