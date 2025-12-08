import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  { name: "Alice Johnson", message: "Great service and quality products! Highly recommend.", role: "Buyer", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Michael Smith", message: "Production tracking is so easy now. Love this platform!", role: "Manager", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Sara Williams", message: "Fast delivery and amazing customer support.", role: "Buyer", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "David Brown", message: "Inventory management is now smooth and efficient.", role: "Manager", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Emma Wilson", message: "Highly recommend for garment businesses!", role: "Buyer", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "John Doe", message: "Platform is intuitive and easy to use.", role: "Manager", avatar: "https://i.pravatar.cc/150?img=6" },
];

const CustomerFeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = feedbacks.length;

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  // Get 4 cards for current slide
  const getCurrentSlide = () => {
    let slide = [];
    for (let i = 0; i < 4; i++) {
      slide.push(feedbacks[(currentIndex + i) % length]);
    }
    return slide;
  };

  return (
    <div className="relative py-20 how-works">
      <div className="absolute inset-0 how-works backdrop-blur-xl rounded-2xl"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Customer Feedback</h2>

        <div className="flex justify-center gap-6 overflow-hidden flex-wrap md:flex-nowrap">
          {getCurrentSlide().map((feedback, index) => (
            <motion.div
              key={index}
              className="relative group backdrop-blur-xl how-works rounded-2xl shadow-lg p-6 border border-white/40 cursor-pointer min-w-[250px] max-w-xs flex-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-80 blur-2xl transition-all duration-700 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <img src={feedback.avatar} alt={feedback.name} className="w-16 h-16 rounded-full mb-4" />
                <p className="text-gray-700 mb-2">{feedback.message}</p>
                <h4 className="text-lg font-semibold text-gray-800">{feedback.name}</h4>
                <span className="text-sm text-gray-500">{feedback.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedbackCarousel;
