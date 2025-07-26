import React from "react";
import { useEffect } from "react";

function WeightLoss() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf1ea] to-[#f3d8c5] flex flex-col">
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <h2 className="text-6xl font-bold text-amber-800 mb-8 leading-tight font-serif animate-slideInUp">
                  Weight Gain
                </h2>

                <div className="space-y-6 text-amber-900 text-lg leading-relaxed font-light animate-fadeInUp">
                  <p className="transform transition-all duration-700 hover:translate-x-2">
                    Struggling to put on healthy weight? You're not alone, and
                    we're here to help. At BodEase, we focus on helping you gain
                    weight the right way through personalized nutrition that
                    fuels your body and builds strength from within.
                  </p>

                  <p className="transform transition-all duration-700 hover:translate-x-2">
                    Whether you're underweight, recovering from illness, or
                    simply looking to bulk up, our expert nutritionists design
                    custom plans tailored to your metabolism, routine, and food
                    choices. No crash diets or shortcuts, just real food and
                    real results.
                  </p>

                  <p className="transform transition-all duration-700 hover:translate-x-2">
                    We emphasize balanced calorie surplus, muscle-building
                    foods, and meal timing that supports steady, healthy growth.
                    Our goal is not just to add numbers to the scale but to
                    improve your energy, immunity, and overall health.
                  </p>

                  <p className="transform transition-all duration-700 hover:translate-x-2">
                    With regular check-ins, constant support, and adjustments
                    along the way, your BodEase journey is built to be
                    sustainable, satisfying, and completely personalized.
                  </p>
                </div>
              </div>

              {/*Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slideInUp">
                <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-amber-800 font-medium group-hover:text-amber-600 transition-colors duration-300">
                    Sustainable Results
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-amber-800 font-medium group-hover:text-amber-600 transition-colors duration-300">
                    Custom Meal Plans
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-amber-800 font-medium group-hover:text-amber-600 transition-colors duration-300">
                    Expert Guidance
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-amber-800 font-medium group-hover:text-amber-600 transition-colors duration-300">
                    Ongoing Support
                  </span>
                </div>
              </div>
            </div>

            {/*Image */}
            <div className="flex justify-center animate-fadeInRight -mt-8">
              <div className="relative group">
                <div className="w-full max-w-lg h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src="/assets/gain.jpg"
                    alt="Weight Gain Program"
                    rel="preload"
                    as="image"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center space-y-3">
              <p className="text-amber-700 font-medium text-center">
                Ready to start your transformation?
              </p>
              <button className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 lg:px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group">
                <svg
                  className="w-6 h-6 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="text-sm lg:text-base">
                  <a
                    href="https://wa.me/919748255760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Contact us on WhatsApp
                  </a>
                </span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WeightLoss;
