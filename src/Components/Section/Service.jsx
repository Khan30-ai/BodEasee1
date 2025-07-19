import React from "react";
import { Heart, Pill, Scale, Flower2, Phone } from "lucide-react";

function Service() {
  const services = [
    {
      icon: Heart,
      title: "Personalized Diet Plans",
      description:
        "Customized nutrition plans tailored to your unique skin needs and health goals",
      color: "bg-orange-50 text-orange-700",
    },
    {
      icon: Pill,
      title: "Science-Backed Supplements",
      description:
        "No fluff, just proven formulas designed to support your nutritional needs",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: Flower2,
      title: "Gut-Skin Harmony",
      description:
        "Clear skin starts in the gut - our approach addresses the root cause",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Scale,
      title: "Hormonal Balance Support",
      description:
        "Internal calm equals external glow through balanced nutrition",
      color: "bg-rose-50 text-rose-700",
    },
    {
      icon: Phone,
      title: "WhatsApp Tracking & Guidance",
      description:
        "We're with you every step with continuous support and monitoring",
      color: "bg-teal-50 text-teal-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-amber-800 sm:text-5xl mb-6 font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Services We Provide
          </h2>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive nutrition solutions designed to transform your health
            from the inside out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-700 group cursor-pointer border border-orange-100 hover:border-orange-300 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div
                className={`w-24 h-24 rounded-3xl ${service.color} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg`}
              >
                <service.icon className="w-12 h-12" strokeWidth={1.2} />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-6 group-hover:text-orange-700 transition-colors leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-orange-600 leading-relaxed text-base font-light group-hover:text-orange-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
