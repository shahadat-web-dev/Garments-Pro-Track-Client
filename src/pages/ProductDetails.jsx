import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // URL থেকে product ID
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-2">Category: {product.category}</p>
          <p className="text-gray-500 mb-2">Price: ${product.price}</p>
          <p className="text-gray-500 mb-2">Quantity: {product.quantity}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <Link
            to="/all-products"
            className="inline-block px-6 py-3 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all"
          >
            Back to All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
