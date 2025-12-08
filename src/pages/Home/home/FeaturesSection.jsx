const FeaturesSection = () => {
  const features = [
    { title: "Real-Time Tracking", desc: "Monitor every stage of production live with ease.", icon: "📈" },
    { title: "Smart Inventory", desc: "Keep track of fabrics, trims, and finished products efficiently.", icon: "📦" },
    { title: "On-Time Delivery", desc: "Ensure your orders reach customers on schedule.", icon: "🚚" },
    { title: "Quality Assurance", desc: "Maintain top-notch quality with thorough checks.", icon: "✔️" },
  ];

  return (
    <div className="relative py-20 how-works">
      <div className="absolute inset-0 how-works backdrop-blur-xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="relative group backdrop-blur-xl how-works rounded-2xl shadow-lg p-8 border border-white/40 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
            >
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-80 blur-2xl transition-all duration-700 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
