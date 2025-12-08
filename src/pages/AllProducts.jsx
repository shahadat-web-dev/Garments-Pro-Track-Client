import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal এর জন্য

  useEffect(() => {
    fetch("http://localhost:3000/api/products?limit=0")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="py-20 bg-[#F3F4F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product._id}
              className="relative group bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-5 border border-white/40 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-1">Category: {product.category}</p>
              <p className="text-gray-500 mb-1">Price: ${product.price}</p>
              <p className="text-gray-500 mb-3">Quantity: {product.quantity}</p>

              <button
                onClick={() => openModal(product)}
                className="block w-full text-center bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transform transition-all"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
            onClick={e => e.stopPropagation()} // Click inside modal prevents close
          >
            <button
              className="absolute top-3 right-3 text-gray-800 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-1">Category: {selectedProduct.category}</p>
            <p className="text-gray-600 mb-1">Price: ${selectedProduct.price}</p>
            <p className="text-gray-600 mb-3">Quantity: {selectedProduct.quantity}</p>
            <p className="text-gray-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
