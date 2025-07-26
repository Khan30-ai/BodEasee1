import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CIcon } from "@coreui/icons-react";
import { cilArrowRight } from "@coreui/icons";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {/* Slide 1*/}
        <SwiperSlide>
          <div className="relative w-full h-[90vh] flex items-center justify-start overflow-hidden">
            <div className="absolute inset-0">
              <picture>
                {/* Mobile */}
                <source
                  media="(max-width: 768px)"
                  srcSet="/assets/small1.png"
                />
                {/*Bigger screen */}
                <source
                  media="(min-width: 769px)"
                  srcSet="/assets/Slide1.webp"
                />

                <img
                  src="/assets/Slide1.png"
                  alt="Weight Loss"
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
              {/* this is overlay for desktop */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60 md:bg-gradient-to-l md:from-transparent md:via-black/10 md:to-black/60"></div>
              {/* this is overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden"></div>

              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.5) 100%)",
                }}
              ></div>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
              <div className="flex justify-start">
                {/* Desktop Text */}
                <div className="hidden md:block w-full md:w-3/5 lg:w-1/2 xl:w-2/5 text-left">
                  <h1
                    className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8 tracking-tight drop-shadow-2xl"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Lose Weight <br className="hidden sm:block" />
                    <span className="relative inline-block">
                      <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                        Not
                      </span>

                      <div className="absolute -bottom-2 left-0 w-3/4 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-80 shadow-lg"></div>
                    </span>
                    <br className="hidden sm:block" />
                    Yourself
                  </h1>

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

                  {/*CTA for desktop*/}
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                    <Link to="/programs/weight-loss">
                      <button
                        className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400/40 text-white font-medium text-base sm:text-lg rounded-full backdrop-blur-sm bg-blue-50/10 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-xl flex items-center"
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

                  <div className="absolute -top-16 sm:-top-20 -left-8 sm:-left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/25 to-blue-500/25 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                  <div
                    className="absolute -bottom-12 sm:-bottom-16 -left-12 sm:-left-16 w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-blue-300/20 to-blue-600/20 rounded-full blur-xl sm:blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Mobile Text*/}
                <div
                  className="md:hidden absolute top-1/2 -translate-y-1/2 left-6 right-6 text-white"
                  style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)" }}
                >
                  <h1
                    className="text-3xl font-light leading-tight mb-3 tracking-wide"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Lose Weight, <br />
                    <span className="font-bold text-blue-300">
                      Not Yourself
                    </span>
                  </h1>

                  <p
                    className="text-white/90 text-base font-light leading-relaxed mb-6 max-w-xs"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Real food. Real results. No starvation.
                  </p>
                  {/* CTA for mobile */}
                  <Link to="/programs/weight-loss">
                    <button
                      className="group px-5 py-2.5 bg-white/20 backdrop-blur-md text-white font-medium text-base rounded-full border-2 border-blue-400/40 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 flex items-center w-fit"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      Start Weight Loss Plan
                      <CIcon
                        icon={cilArrowRight}
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh] flex items-center justify-start">
            <picture>
              {/* For Mobile */}
              <source media="(max-width: 768px)" srcSet="/assets/small2.png" />
              {/* For bigger screen */}
              <source media="(min-width: 769px)" srcSet="/assets/Slide2.webp" />
              <img
                src="/assets/Slide2.webp"
                alt="Weight Gain"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </picture>

            {/* overlay for desktop */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>

            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.5) 100%)",
              }}
            ></div>

            {/* Desktop Text */}
            <div className="hidden md:flex absolute inset-0 flex-col items-start justify-center px-10 sm:px-16 lg:px-24 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10">
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
              {/* Desktop CTA*/}
              <div className="flex flex-col sm:flex-row gap-4 justify-end items-end mt-5">
                <Link to="/programs/weight-gain">
                  <button
                    className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-white/20 text-white text-sm sm:text-base md:text-lg rounded-full backdrop-blur-md bg-white/5 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl flex items-center"
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

              <div className="absolute -top-20 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-16 -right-16 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-pink-400/15 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Mobile overlay  */}
            <div
              className="md:hidden absolute bottom-20 right-6 text-white z-20 text-right"
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)" }}
            >
              <h1
                className="text-3xl font-light leading-tight mb-3 tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Gain Weight, <br />
                <span className="font-bold text-emerald-300">
                  the Healthy Way
                </span>
              </h1>

              <p
                className="text-white/90 text-base font-light leading-relaxed mb-6 max-w-xs ml-auto"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Nourish your body without stress.
              </p>
              {/* mobile CTA */}

              <Link to="/programs/weight-gain">
                <button
                  className="group px-5 py-2.5 bg-white/20 backdrop-blur-md text-white font-medium text-base rounded-full border-2 border-white/20 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 flex items-center ml-auto w-fit"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Get Healthy Weight Gain
                  <CIcon
                    icon={cilArrowRight}
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh] flex items-center justify-end overflow-hidden">
            <picture>
              {/* For Mobile */}
              <source media="(max-width: 768px)" srcSet="/assets/small3.png" />
              {/* For desktop*/}
              <source media="(min-width: 769px)" srcSet="/assets/Slide3.webp" />
              <img
                src="/assets/Slide3.webp"
                alt="Skin & Hair"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </picture>

            {/* desktop overlay */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.5) 100%)",
              }}
            ></div>

            <div className="hidden md:flex absolute inset-0 items-center justify-end bg-gradient-to-l from-black/70 via-black/40 to-transparent z-10">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="flex justify-end">
                  {/* Desktop Text */}
                  <div className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 text-right">
                    <h1
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-6 sm:mb-8 tracking-tight"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Heal Your <br className="hidden sm:block" />
                      <span className="relative inline-block">
                        <span className="font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                          Skin{" "}
                        </span>

                        <div className="absolute -bottom-2 right-0 w-3/4 h-1 bg-gradient-to-l from-amber-300 to-amber-500 rounded-full opacity-80"></div>
                      </span>
                      <br className="hidden sm:block" /> from Within
                    </h1>

                    <p
                      className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 sm:mb-12 max-w-2xl ml-auto"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      Glow naturally with a skin-focused diet plan that targets
                      acne, dullness, and pigmentation by treating{" "}
                      <span className="text-amber-300 font-medium">gut</span>{" "}
                      and{" "}
                      <span className="text-amber-400 font-medium">
                        hormonal
                      </span>{" "}
                      imbalances at the root.
                    </p>

                    {/* Desktop CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-end items-end">
                      <Link to="/programs/skin-hair">
                        <button
                          className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-amber-400/40 text-white font-medium text-sm sm:text-base md:text-lg rounded-full backdrop-blur-sm bg-amber-50/10 transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105 hover:shadow-xl flex items-center"
                          style={{ fontFamily: "Lato, sans-serif" }}
                        >
                          Get My Skin Glow Plan
                          <CIcon
                            icon={cilArrowRight}
                            className="ml-2 w-3 h-3 sm:w-4 h-4 md:w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </Link>
                    </div>

                    <div className="absolute -top-16 sm:-top-20 -right-8 sm:-right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                    <div
                      className="absolute -bottom-12 sm:-bottom-16 -right-12 sm:-right-16 w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-amber-600/10 to-amber-800/10 rounded-full blur-xl sm:blur-2xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile overlay  */}
            <div
              className="md:hidden absolute bottom-20 left-6 text-white z-20"
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)" }}
            >
              <h1
                className="text-3xl font-light leading-tight mb-3 tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <span className="font-bold text-amber-300">Glow</span> <br />
                from Within
              </h1>

              <p
                className="text-white/90 text-base font-light leading-relaxed mb-6 max-w-xs"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Heal skin & hair by fixing the root.
              </p>
              {/* mobile CTA */}
              <Link to="/programs/skin-hair">
                <button
                  className="group px-5 py-2.5 bg-white/20 backdrop-blur-md text-white font-medium text-base rounded-full border-2 border-amber-400/40 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 flex items-center w-fit"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Get My Glow Plan
                  <CIcon
                    icon={cilArrowRight}
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
