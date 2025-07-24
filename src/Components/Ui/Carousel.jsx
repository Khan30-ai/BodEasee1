import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CIcon } from "@coreui/icons-react";
import { cilArrowRight } from "@coreui/icons";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <section className="w-full ">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-[90vh] flex items-center justify-start overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/assets/Slide3.png"
                alt="Lose Weight, Not Yourself"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
              <div className="flex justify-start">
                {/* Text Block - Left Aligned */}
                <div className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 text-left">
                  {/* Main Heading */}
                  <h1
                    className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8 tracking-tight drop-shadow-2xl"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Lose Weight <br className="hidden sm:block" />
                    <span className="relative inline-block">
                      <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                        Not
                      </span>
                      {/* Decorative underline */}
                      <div className="absolute -bottom-2 left-0 w-3/4 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-80 shadow-lg"></div>
                    </span>
                    <br className="hidden sm:block" />
                    Yourself.
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-2xl drop-shadow-xl"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Discover a nourishing approach to healthy weight loss no
                    starving, no calorie obsession. Just{" "}
                    <span className=" font-medium">real food</span>,{" "}
                    <span className=" font-medium">real balance</span>, and real
                    results that last.
                  </p>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                    <Link to="/programs/weight-loss">
                      <button
                        className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400/40 text-blue-300 font-medium text-base sm:text-lg rounded-full backdrop-blur-sm bg-blue-50/10 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-xl flex items-center"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Start My Weight Loss Plan
                        <CIcon
                          icon={cilArrowRight}
                          className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </Link>
                  </div>

                  {/* Decorative Elements - Enhanced with blue colors */}
                  <div className="absolute -top-16 sm:-top-20 -left-8 sm:-left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/25 to-blue-500/25 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                  <div
                    className="absolute -bottom-12 sm:-bottom-16 -left-12 sm:-left-16 w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-blue-300/20 to-blue-600/20 rounded-full blur-xl sm:blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[90vh] flex items-center justify-start">
            <img
              src="/assets/Slide1.png"
              alt="Slide 1"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-10 sm:px-16 lg:px-24 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10">
              <div className="max-w-4xl">
                <h1
                  className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light leading-[0.9] mb-4 sm:mb-6 md:mb-8 tracking-tight"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Nourish to <br />
                  <span className="font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Flourish
                  </span>
                </h1>
                <p
                  className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed max-w-2xl mb-4 sm:mb-5"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Support your body with a gentle, science-backed plan for
                  healthy weight gain. Perfect for undernourished, post-illness,
                  or lean bodies needing real nourishment.
                </p>
              </div>
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end items-end mt-5">
                <Link to="/programs/weight-gain">
                  <button
                    className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-white/20 text-white/50 text-sm sm:text-base md:text-lg rounded-full backdrop-blur-md bg-white/5 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl flex items-center"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    I Want Healthy Weight Gain
                    <CIcon
                      icon={cilArrowRight}
                      className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-16 -right-16 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-pink-400/15 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[90vh] flex items-center justify-end overflow-hidden">
            {/* Background Image with Enhanced Styling */}
            <div className="absolute inset-0">
              <img
                src="/assets/small.png"
                alt="Heal Your Skin from Within"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
              <div className="flex justify-end">
                {/* Text Block - Right Aligned */}
                <div className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 text-right">
                  {/* Main Heading */}
                  <h1
                    className="text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8 tracking-tight"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Heal Your <br className="hidden sm:block" />
                    <span className="relative inline-block">
                      <span className="font-bold bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                        Skin
                      </span>
                      {/* Decorative underline */}
                      <div className="absolute -bottom-2 right-0 w-3/4 h-1 bg-gradient-to-l from-amber-600 to-amber-800 rounded-full opacity-60"></div>
                    </span>
                    <br className="hidden sm:block" />
                    from Within
                    <span className="text-amber-700">.</span>
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="text-black/90 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-2xl ml-auto"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Glow naturally with a skin-focused diet plan that targets
                    acne, dullness, and pigmentation by treating{" "}
                    <span className="text-amber-700 font-medium">gut</span> and{" "}
                    <span className="text-amber-800 font-medium">hormonal</span>{" "}
                    imbalances at the root.
                  </p>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-end items-end">
                    <Link to="/programs/skincare">
                      <button
                        className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-amber-700/30 text-amber-800 font-medium text-base sm:text-lg rounded-full backdrop-blur-sm bg-amber-50/20 transition-all duration-300 hover:bg-amber-700 hover:text-white hover:scale-105 hover:shadow-xl flex items-center"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Get My Skin Glow Plan
                        <CIcon
                          icon={cilArrowRight}
                          className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </Link>
                  </div>

                  {/* Decorative Elements - Adjusted for mobile */}
                  <div className="absolute -top-16 sm:-top-20 -right-8 sm:-right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                  <div
                    className="absolute -bottom-12 sm:-bottom-16 -right-12 sm:-right-16 w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-amber-600/10 to-amber-800/10 rounded-full blur-xl sm:blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
