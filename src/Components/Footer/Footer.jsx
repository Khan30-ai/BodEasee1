import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-5xl font-extrabold text-amber-900 mb-4 font-serif tracking-tight">
              BodEase
            </h2>

            <p className="text-[17px] leading-relaxed text-amber-800 font-light mb-4 italic">
              BodEase offers{" "}
              <span className="font-medium text-amber-900">
                real, personalized guidance{" "}
              </span>
              to help you eat better, feel better, and live healthier in a way
              that actually fits your life. We focus on{" "}
              <span className="underline underline-offset-2 decoration-amber-400">
                simple, long-term changes{" "}
              </span>
              that feel natural and truly last.
            </p>

            <p className="text-amber-700 font-semibold text-lg tracking-wide mt-6">
              Wellness, the{" "}
              <span className="text-orange-600 italic">BodEase</span> way.
            </p>
          </div>

          <div className="flex-shrink-0">
            <h3 className="text-2xl font-semibold text-amber-900 mb-8 tracking-wide">
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-6">
              {/* Email */}
              <a
                href="mailto:bodeaseee@gmail.com"
                className="flex items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white p-4 rounded-full mr-4 group-hover:bg-[#faf1ea] transition-colors duration-300">
                  <Mail className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-900 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-lg font-light text-black group-hover:text-amber-800 transition-colors duration-300">
                    bodeaseee@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919748255760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white p-4 rounded-full mr-4 group-hover:bg-[#faf1ea] transition-colors duration-300">
                  <FaWhatsapp className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-900 uppercase tracking-wide">
                    WhatsApp
                  </p>
                  <p className="text-lg font-light text-black group-hover:text-amber-800 transition-colors duration-300">
                    +91 9748255760
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/bodeasee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white p-4 rounded-full mr-4 group-hover:bg-[#faf1ea] transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-900 uppercase tracking-wide">
                    Instagram
                  </p>
                  <p className="text-lg font-light text-black group-hover:text-amber-800 transition-colors duration-300">
                    @bodeasee
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <blockquote className="text-xl italic text-black font-light leading-relaxed">
              "Start your wellness journey today. Every small step counts."
            </blockquote>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-200 bg-[#faf1ea] shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm">
              © 2024 BodEase. All rights reserved.
            </p>
            <p className="text-black text-sm">
              Designed with <span className="text-red-400">♥</span> for your
              wellness journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
