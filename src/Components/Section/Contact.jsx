import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    {
      /*submitting form with formspree */
    }
    try {
      const response = await fetch("https://formspree.io/f/myzpkydz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#faf1ea] py-16 px-9">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4 font-serif">
              Thank You!
            </h2>
            <p className="text-lg text-amber-900 mb-8">
              Your message has been sent successfully. We'll get back to you
              within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#faf1ea] py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contact Us */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-amber-800 mb-6 font-serif">
            Contact Us
          </h1>
          <p className="text-lg text-amber-900 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to start your wellness journey? Get in touch with our
            certified nutrition experts and let us help you achieve your health
            goals through personalized guidance.
          </p>
        </div>

        <div className="flex justify-center">
          {/*Form starts */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-amber-800 mb-4 font-serif">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-amber-800 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-[#faf1ea] "
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-amber-800 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-[#faf1ea] "
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-amber-800 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-[#faf1ea] "
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-amber-800 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-[#faf1ea] "
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-amber-800 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-[#faf1ea]  resize-none"
                  placeholder="Tell us about your health goals and how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-amber-900 mt-4 text-center">
              * Required fields. We respect your privacy and will never share
              your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
