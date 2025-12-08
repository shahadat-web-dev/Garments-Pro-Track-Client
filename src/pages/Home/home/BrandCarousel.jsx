import { motion } from "framer-motion";

const brands = [
  { name: "Nike", logo: "https://i.ibb.co.com/v4bPGt1Z/licensed-image.jpg" },
  { name: "Adidas", logo: "https://i.ibb.co.com/4gWf4NJd/Gemini-Generated-Image-3vcciw3vcciw3vcc.jpg" },
  { name: "Puma", logo: "https://i.ibb.co.com/BVWSD6ZK/licensed-image-1.jpg" },
  { name: "Reebok", logo: "https://i.ibb.co.com/ZpgRCX9T/licensed-image-2.jpg" },
  { name: "Levis", logo: "https://i.ibb.co.com/j9bW9YhM/licensed-image-3.jpg" },
  { name: "Zara", logo: "https://i.ibb.co.com/rG2cVwrX/licensed-image-4.jpg" },
];

const BrandCarousel = () => {
  return (
    <section className="py-16 how-works relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Trusted Brands</h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 w-max mx-auto"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-32 cursor-pointer hover:scale-110 transform transition duration-500"
              >
                <img src={brand.logo} alt={brand.name} className="w-20 h-20 object-contain mb-2" />
                <span className="text-gray-700 font-semibold">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
