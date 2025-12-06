import { CheckCircle, Send, Scissors, Shirt, Package, Truck } from "lucide-react";

const steps = [
  {
    title: "Order",
    description: "বায়ার অর্ডার সাবমিট করে প্রয়োজনীয় সব ডিটেইলসহ।",
    icon: <Send className="w-10 h-10" />,
  },
  {
    title: "Cutting",
    description: "ফেব্রিক লেয়িং, কাটিং, সোর্টিং এবং বান্ডেলিং সম্পন্ন হয়।",
    icon: <Scissors className="w-10 h-10" />,
  },
  {
    title: "Sewing",
    description: "সেলাই ফ্লোরে বান্ডেল অনুযায়ী সেলাই ও ট্রিমস অ্যাটাচ করা হয়।",
    icon: <Shirt className="w-10 h-10" />,
  },
  {
    title: "QC",
    description: "গুণগত মান যাচাই — মাপ, সেলাই, ফিনিশিং, ডিফেক্ট চেক।",
    icon: <CheckCircle className="w-10 h-10" />,
  },
  {
    title: "Shipment",
    description: "পণ্যের প্যাকেজিং, লেবেলিং, কার্টনাইজিং এবং শিপমেন্ট প্রস্তুতি।",
    icon: <Package className="w-10 h-10" />,
  },
  {
    title: "Delivery",
    description: "অর্ডার বায়ারের কাছে চূড়ান্তভাবে ডেলিভার করা হয়।",
    icon: <Truck className="w-10 h-10" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-12">
          
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition border border-gray-100"
            >
              <div className="flex justify-center mb-5 text-blue-600">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
