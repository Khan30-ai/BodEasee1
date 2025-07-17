import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Sparkles, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Programs</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Comprehensive nutrition solutions tailored to your unique health
            goals and lifestyle needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weight Gain Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Weight Gain
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  A blended diet plan based on your personal health & glow goals
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  High-calorie personalized diet with real foods
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Digestive support and appetite enhancers
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Supplement guidance for healthy mass gain
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/weight-gain"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white font-semibold rounded-full hover:from-orange-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <TrendingUp className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Weight Loss Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Weight Loss
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Customized fat-loss diet (based on your needs & kitchen)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Anti-inflammatory, metabolism-friendly foods
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Cravings control & energy balance
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Supplement support for fat burn and gut health
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/weight-loss"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white font-semibold rounded-full hover:from-orange-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <TrendingDown className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Skin & Hair Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Skin & Hair
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Nutrition plans for radiant skin and healthy hair growth
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Anti-aging nutrition strategies with antioxidant-rich foods
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Collagen-boosting meal plans for skin elasticity
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Specialized diet plans for skin conditions and hair health
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/skin-hair"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white font-semibold rounded-full hover:from-orange-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <Sparkles className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-amber-700 mb-6">
            Ready to transform your health journey?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
