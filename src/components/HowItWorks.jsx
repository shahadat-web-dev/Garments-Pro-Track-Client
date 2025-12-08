import { useEffect, useRef } from "react";
import { CheckCircle, Send, Scissors, Shirt, Package, Truck } from "lucide-react";

const steps = [
  { title: "Order", description: "Buyer submits the order with all the required details.", icon: <Send className="w-12 h-12" /> },
  { title: "Cutting", description: "Fabric laying, cutting, sorting, and bundling are completed.", icon: <Scissors className="w-12 h-12" /> },
  { title: "Sewing", description: "Bundles are sewn and trims are attached on the sewing floor.", icon: <Shirt className="w-12 h-12" /> },
  { title: "QC", description: "Quality check — measurements, stitching, finishing, and defect inspection.", icon: <CheckCircle className="w-12 h-12" /> },
  { title: "Shipment", description: "Product packaging, labeling, cartonizing, and shipment preparation.", icon: <Package className="w-12 h-12" /> },
  { title: "Delivery", description: "Order is delivered to the buyer successfully.", icon: <Truck className="w-12 h-12" /> },
];

const HowItWorks = () => {

  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
  }, []);

  return (
    <section className="w-full  how-works  py-20">  {/* FULL-WIDTH BACKGROUND FIXED */}
      
      <div className="max-w-7xl mx-auto text-center px-4">

        <h2 className="text-5xl font-bold text-gray-800 mb-4">How It Works</h2>

        <p className="text-gray-600 mb-12 text-lg">
          Our process is simple and transparent. Each step ensures your order reaches you on time and accurately.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="
                relative
                group
                fade-up
                
                backdrop-blur-xl 
                rounded-2xl 
                shadow-lg 
                p-8 
                border border-white/40 
                cursor-pointer
                transform 
                transition-all 
                duration-500 
                hover:shadow-2xl 
                hover:scale-105
                hover:-rotate-3
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute -inset-1
                  rounded-2xl
                  
                  bg-linear-to-r from-pink-500 via-purple-500 to-blue-500
                  opacity-0
                  group-hover:opacity-80
                  blur-2xl
                  transition-all duration-700
                "
              ></div>

              <div className="relative z-10 flex justify-center mb-5 text-blue-600 transition duration-300">
                {step.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              <p className="relative z-10 text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
