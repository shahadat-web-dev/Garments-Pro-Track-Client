import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 how-works">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          About Us
        </h1>

        {/* Company Overview */}
        <div className=" backdrop-blur-lg bg-white rounded-2xl p-8 mb-10 shadow-lg border border-white/20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a leading garments production tracking company committed to
            providing smart solutions for order management, production monitoring,
            inventory tracking, and timely delivery. Our mission is to streamline
            the entire garment production process using modern technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className=" backdrop-blur-lg bg-white rounded-2xl p-6 shadow-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h3>
            <p className="text-gray-700">
              To provide a seamless platform for managing garment production and ensuring
              efficient workflow from order placement to delivery.
            </p>
          </div>
          <div className=" backdrop-blur-lg bg-white rounded-2xl p-6 shadow-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and reliable garment production tracking solution
              that empowers businesses to achieve greater efficiency and transparency.
            </p>
          </div>
        </div>

        {/* Optional: Team Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Our Team</h2>
          <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className=" backdrop-blur-lg bg-white rounded-2xl p-6 shadow-lg border border-white/20 flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Team Member"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Alice Johnson</h4>
              <span className="text-gray-500">CEO</span>
            </div>
            <div className=" backdrop-blur-lg bg-white rounded-2xl p-6 shadow-lg border border-white/20 flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/150?img=2"
                alt="Team Member"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Michael Smith</h4>
              <span className="text-gray-500">CTO</span>
            </div>
            <div className=" backdrop-blur-lg bg-white rounded-2xl p-6 shadow-lg border border-white/20 flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="Team Member"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Sara Williams</h4>
              <span className="text-gray-500">Manager</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
