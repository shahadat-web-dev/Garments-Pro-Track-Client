import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import ProductCard from "../components/ProductCard";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(6).then(data => setProducts(data));
  }, []);

  return (
    <div className="py-20 how-works">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold mb-8 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurProducts;
