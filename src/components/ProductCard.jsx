import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="
      bg-white/20 backdrop-blur-lg 
      rounded-2xl shadow-lg 
      p-5 border border-white/30 
      transition-all duration-300 
      hover:scale-105 hover:bg-linear-to-r 
      hover:from-purple-500/40  hover:to-blue-500/40
    ">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
      <p className="text-gray-600 text-sm my-2">{product.shortDescription}</p>

      <p className="text-lg font-semibold text-blue-600 mb-3">
        ${product.price}
      </p>

      {/* View Details Button → Route Link */}
      <Link
        to={`/product/${product._id}`}
        className="
          w-full block text-center py-2 rounded-xl 
          bg-blue-600 text-white 
          hover:bg-blue-700 cursor-pointer transition
        "
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
