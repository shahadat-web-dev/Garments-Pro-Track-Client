import React from "react";

const Contact = () => {
  return (
    <section className="py-20 how-works">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="how-works backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-white/30 how-works backdrop-blur-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-white/30 how-works backdrop-blur-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-lg border border-white/30 how-works backdrop-blur-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full cursor-pointer py-3 bg-linear-to-r from-[#81C2FF] to-[#D6AEFF] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="how-works backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Info</h2>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> support@garmentsprotrack.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +880 123 456 789
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Garments St, Dhaka, Bangladesh
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
