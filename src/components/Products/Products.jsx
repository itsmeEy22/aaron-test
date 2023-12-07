import ProductCard from "../ProductCard/ProductCard";
import './products.css'

function Products() {
  return(
    <div className="productList-container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Products;