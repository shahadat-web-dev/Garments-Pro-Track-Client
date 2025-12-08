import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  { name: "Alice Johnson", message: "Great service and quality products! Highly recommend.", role: "Buyer", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Michael Smith", message: "Production tracking is so easy now. Love this platform!", role: "Manager", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Sara Williams", message: "Fast delivery and amazing customer support.", role: "Buyer", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "David Brown", message: "Inventory management is now smooth and efficient.", role: "Manager", avatar: "https://i.pravatar.cc/150?img=4" },
];

const CustomerFeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = feedbacks.length;
  const timeoutRef = useRef(null);

  // Circular autoplay
  useEffect(() => {
    const next = () => setCurrentIndex((prev) => (prev + 1) % length);
    timeoutRef.current = setInterval(next, 4000);
    return () => clearInterval(timeoutRef.current);
  }, [length]);

  // Get three consecutive cards in loop
  const getVisibleFeedbacks = () => {
    return [
      feedbacks[currentIndex],
      feedbacks[(currentIndex + 1) % length],
      feedbacks[(currentIndex + 2) % length],
    ];
  };

  return (
    <div className="relative py-20 bg-[#F3F4F6]">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-8">Customer Feedback</h2>

        <div className="overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {getVisibleFeedbacks().map((feedback, idx) => (
                <div
                  key={idx}
                  className="relative group backdrop-blur-xl bg-white/30 rounded-2xl shadow-lg p-6 border border-white/40 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
                >
                  {/* Rainbow glow overlay */}
                  <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-80 blur-2xl transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <img
                      src={feedback.avatar}
                      alt={feedback.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <p className="text-gray-700 mb-2">{feedback.message}</p>
                    <h4 className="text-lg font-semibold text-gray-800">{feedback.name}</h4>
                    <span className="text-sm text-gray-500">{feedback.role}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedbackCarousel;
