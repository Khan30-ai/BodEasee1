import React from "react";

function About() {
  return (
    <section className=" bg-gradient-to-br from-[#faf1ea] to-[#f3d8c5] py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* Text goes here */}
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-4xl font-bold text-amber-800 sm:text-5xl mb-6 font-serif">
                About Us
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-amber-900 leading-relaxed font-light">
                  Welcome to{" "}
                  <span className="font-semibold text-amber-700">BodEase</span>,
                  your trusted partner in achieving optimal health and wellness
                  through personalized nutrition guidance.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed font-light">
                  We believe that healthy living shouldn't be complicated. Our
                  team of certified nutritionists and diet specialists work
                  closely with you to create sustainable meal plans that fit
                  your lifestyle, preferences, and health goals.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed font-light">
                  Whether you're looking to lose weight, build muscle, manage a
                  health condition, or simply feel more energetic, we provide
                  evidence-based nutrition strategies that deliver real results.
                </p>

                {/*Features */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-900 font-medium">
                      Certified Experts
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-900 font-medium">
                      Personalized Plans
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-900 font-medium">
                      Proven Results
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-900 font-medium">
                      24/7 Support
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
                  <p className="text-lg text-amber-700 font-medium italic font-serif text-center">
                    "Transform your relationship with food. Transform your
                    life."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video*/}
          <div className="flex justify-center transform transition-all duration-700 hover:scale-105">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-amber-700/20 rounded-3xl blur-2xl"></div>

              {/*container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-amber-200/50">
                <video
                  src="/assets/Aboutus.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-[280px] h-[500px] object-cover rounded-xl shadow-lg"
                  style={{ aspectRatio: "9/16" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
