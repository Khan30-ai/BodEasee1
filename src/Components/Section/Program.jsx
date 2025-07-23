import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Sparkles, CheckCircle } from "lucide-react";

const Program = () => {
  return (
    <section className="py-20 bg-[#faf1ea]">
      {" "}
      {/*bg-gradient-to-br from-orange-50 to-amber-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-800 sm:text-5xl mb-6 font-serif">
            Programs
          </h2>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Comprehensive nutrition solutions tailored to your unique health
            goals and lifestyle needs
          </p>
        </div>

        {/* Programs Starts */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weight Loss  */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-[#faf1ea] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Kitchen to Plate Curation: Diets tailored to your existing
                  kitchen staples no unrealistic shopping lists.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Hormone Friendly Fat Burn: Plans that balance thyroid,
                  insulin, and cortisol naturally.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Metabolic Reset: Gentle detox & gut repair for long term fat
                  loss (not crash diets).
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Cravings Conscious Eating: satisfying meals to curb emotional
                  eating
                </p>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <Link
                to="/programs/weight-loss"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-900 text-white font-semibold rounded-full hover:from-orange-800 hover:to-amber-800  transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <TrendingDown className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Weight Gain*/}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-[#faf1ea] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Glow Up Gain Plans: Not just bulk muscle, skin glow, energy,
                  and mood all improve.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Real Food, Real Results: No artificial powders pure
                  nourishment from pantry to plate.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Digestive Rescue: For bloating-prone or under eating bodies,
                  gut first approach.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Holistic Coaching: Includes stress eating patterns, emotional
                  blocks, and energy tracking.
                </p>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <Link
                to="/programs/weight-gain"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-900 text-white font-semibold rounded-full hover:from-orange-800 hover:to-amber-800  transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <TrendingUp className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Skin & Hair */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-[#faf1ea] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Inside Out Radiance: Nutrients that make skin glow, hair
                  thrive, and you feel radiant.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Antioxidant Defense Plan: Age defying meal plans using
                  nature’s best protectors.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Beauty Boost Protocols: Collagen, biotin, keratin supported
                  through everyday foods.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Specialized Diet Plans: Tailored nutrition for specific skin
                  concerns and hair health
                </p>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <Link
                to="/programs/skin-hair"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-900 text-white font-semibold rounded-full hover:from-orange-800 hover:to-amber-800  transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <Sparkles className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
