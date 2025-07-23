import React from "react";

function Service() {
  const services = [
    {
      title: "Personalized Diet Plans",
      description:
        "Customized nutrition plans tailored to your unique skin needs and health goals",
      color: "bg-orange-50 text-orange-700",
    },
    {
      title: "Science-Backed Supplements",
      description:
        "No fluff, just proven formulas designed to support your nutritional needs",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Gut-Skin Harmony",
      description:
        "Clear skin starts in the gut - our approach addresses the root cause",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Hormonal Balance Support",
      description:
        "Internal calm equals external glow through balanced nutrition",
      color: "bg-rose-50 text-rose-700",
    },
    {
      title: "WhatsApp Tracking & Guidance",
      description:
        "We're with you every step with continuous support and monitoring",
      color: "bg-teal-50 text-teal-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-amber-800 sm:text-5xl mb-6 font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Services We Provide
          </h2>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto leading-relaxed font-light">
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
              {/* Icon Box Removed */}
              <h3 className="text-2xl font-bold text-amber-900 mb-6 group-hover:text-orange-700 transition-colors leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-amber-900 leading-relaxed text-base font-light group-hover:text-orange-700 transition-colors">
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
