import { useEffect, useState } from "react";
import { Link } from "react-router"; 
import { useLoading } from "../context/LoadingContext";
import LoadingSpinner from "../components/LoadingSpinner";

const AllProducts = () => {
  const { loading, setLoading } = useLoading();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true); 
    fetch("https://garments-order-tracker-sarver.vercel.app/api/products?limit=0")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false); 
      })
      .catch(err => {
        console.error(err);
        setLoading(false); 
      });
  }, [setLoading]);

  return (
    <section className="py-20 how-works min-h-screen relative">
      {loading && <LoadingSpinner />} 
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product._id}
              className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-5 border border-white/40 hover:scale-105 transform transition-all duration-500"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-1">Category: {product.category}</p>
              <p className="text-gray-500 mb-1">Price: ${product.price}</p>
              <p className="text-gray-500 mb-3">Quantity: {product.quantity}</p>

              <Link
                to={`/product/${product._id}`}
                className="block text-center bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transform transition-all"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
