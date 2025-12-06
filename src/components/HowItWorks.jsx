import { CheckCircle, Send, Scissors, Shirt, Package, Truck } from "lucide-react";

const steps = [
  {
    title: "Order",
    description: "Buyer submits the order with all the required details.",
    icon: <Send className="w-12 h-12" />,
  },
  {
    title: "Cutting",
    description: "Fabric laying, cutting, sorting, and bundling are completed.",
    icon: <Scissors className="w-12 h-12" />,
  },
  {
    title: "Sewing",
    description: "Bundles are sewn and trims are attached on the sewing floor.",
    icon: <Shirt className="w-12 h-12" />,
  },
  {
    title: "QC",
    description: "Quality check — measurements, stitching, finishing, and defect inspection.",
    icon: <CheckCircle className="w-12 h-12" />,
  },
  {
    title: "Shipment",
    description: "Product packaging, labeling, cartonizing, and shipment preparation.",
    icon: <Package className="w-12 h-12" />,
  },
  {
    title: "Delivery",
    description: "Order is delivered to the buyer successfully.",
    icon: <Truck className="w-12 h-12" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Our process is simple and transparent. Each step ensures your order reaches you on time and accurately.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 transform hover:scale-105 hover:shadow-2xl transition duration-500 border border-gray-100"
            >
              <div className="flex justify-center mb-5 text-blue-600 hover:text-blue-500 transition duration-300">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
