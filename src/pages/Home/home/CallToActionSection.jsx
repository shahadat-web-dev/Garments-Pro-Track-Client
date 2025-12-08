const CallToActionSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Rapid Deployment",
      desc: "Launch your production tracking system in no time, without any hassle.",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      icon: "📊",
      title: "Insightful Analytics",
      desc: "Get real-time insights on every order, inventory, and production stage.",
      gradient: "from-green-400 via-teal-400 to-blue-500",
    },
    {
      icon: "🤝",
      title: "Seamless Collaboration",
      desc: "Coordinate effortlessly with your team and stakeholders from anywhere.",
      gradient: "from-yellow-400 via-orange-400 to-red-500",
    },
  ];

  return (
    <section className="relative py-24 how-works">
      {/* GLASSY OVERLAY */}
      <div className="absolute inset-0 how-works backdrop-blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Section Title Changed */}
        <h2 className="text-5xl font-bold mb-12 text-gray-800">Platform Highlights</h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover the key advantages of our platform that simplify garment production tracking.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative group backdrop-blur-xl how-works rounded-2xl shadow-lg p-8 border border-white/40 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
            >
              {/* Rainbow glow overlay */}
              <div
                className={`absolute -inset-1 rounded-2xl bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-80 blur-2xl transition-all duration-700 pointer-events-none`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
