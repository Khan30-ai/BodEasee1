import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold text-amber-100 sm:text-5xl mb-6 font-serif">
              BodEase
            </h2>
            <p className="text-lg leading-relaxed text-amber-200 font-light">
              Your trusted partner in achieving optimal health and wellness
              through personalized nutrition guidance. We believe that
              sustainable lifestyle changes begin with understanding your unique
              needs and creating evidence-based nutrition strategies that
              deliver real, lasting results for your wellness journey.
            </p>
          </div>

          <div className="flex-shrink-0">
            <h3 className="text-2xl font-semibold text-amber-100 mb-8 tracking-wide">
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center group cursor-pointer">
                <div className="bg-amber-100 p-4 rounded-full mr-4 group-hover:bg-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-lg font-light text-amber-100">
                    info@bodease.com
                  </p>
                </div>
              </div>

              <div className="flex items-center group cursor-pointer">
                <div className="bg-amber-100 p-4 rounded-full mr-4 group-hover:bg-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-lg font-light text-amber-100">
                    +1 (234) 567-890
                  </p>
                </div>
              </div>

              <div className="flex items-center group cursor-pointer">
                <div className="bg-amber-100 p-4 rounded-full mr-4 group-hover:bg-white transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-wide">
                    Instagram
                  </p>
                  <p className="text-lg font-light text-amber-100">
                    @bodease_official
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <blockquote className="text-xl italic text-amber-200 font-light leading-relaxed">
              "Start your wellness journey today. Every small step counts."
            </blockquote>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-700 bg-amber-950">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-amber-300 text-sm">
              © 2024 BodEase. All rights reserved.
            </p>
            <p className="text-amber-400 text-sm">
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
