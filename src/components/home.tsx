import React from "react";
import HeroSection from "./HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/T5fjXGC.png"
              alt="Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="font-bold text-xl">Swish AI</span>
          </div>
          <nav className="ml-10 hidden md:flex space-x-6">
            <a
              href="/#features"
              className="hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("features");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#features";
                }
              }}
            >
              Features
            </a>
            <a
              href="/#testimonials"
              className="hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("testimonials");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#testimonials";
                }
              }}
            >
              Testimonials
            </a>
            <a
              href="/#faqs"
              className="hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("faqs");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#faqs";
                }
              }}
            >
              FAQs
            </a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analyze Game Film. Without the Guesswork.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SwishAI breaks down your game tape in minutes. No more watching
              every frame trying to find what went wrong.
            </p>
          </div>

          {/* Features Layout - Center Image with Benefits on Sides */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - 2 Features */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded mr-3 flex items-center justify-center bg-[#fe9f27]">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    🧠 AI-Powered Feedback
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We detect key plays and motion patterns, then provide targeted
                  coaching insights—shot form, release timing, footwork,
                  balance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-[#fe9f27] rounded mr-3 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    🏗️ Built for Growth
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Whether you’re training for your school team, AAU, or the next
                  level—SwishAI adapts to your game.
                </p>
              </div>
            </div>

            {/* Center - Mobile App Preview */}
            <div className="flex justify-center">
              <img
                src="https://i.imgur.com/g4Kougx.jpeg"
                alt="Mobile App Preview"
                className="w-80 h-auto object-contain"
              />
            </div>

            {/* Right Side - 2 More Features */}
            <div className="space-y-8">
              {/* Feature 3 */}
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-[#fe9f27] rounded mr-3 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    📱 Upload and Go
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Record on your phone, upload directly, and get analysis within
                  minutes. No fancy equipment needed.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-[#fe9f27] rounded mr-3 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    🎯 Know What to Work On
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Instead of guessing, you’ll walk away from each session
                  knowing your biggest improvement areas—backed by data and
                  visuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours succeed through our
              clients' experiences.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                “SwishAI caught flaws in my shot I didn’t even know I had. After
                a week, my release was smoother and more consistent.”
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Jordan, High School PG
                  </h4>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                “Great supplement for when I can't do one-on-one coaching”
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=emily"
                  alt="Emily Davis"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Jane, D3 Hooper
                  </h4>
                </div>
              </div>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "Man - so sick. Not always accurate but definitely much better
                than asking reddit for feedback lol"
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
                  alt="Michael Chen"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Carlos, Weekend Baller
                  </h4>
                </div>
              </div>
            </div>
            {/* Testimonial 5 */}
            {/* Testimonial 6 */}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers about our services. Reach out to us directly
              for more information!
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                How do I upload my videos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                You can record your session on any phone or device and upload
                directly in the app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What kind of feedback do I get?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                SwishAI gives you analysis on your shot mechanics, footwork,
                balance, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Do I need a coach or gym to use this?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Nope. Train at home, on the street, or in a gym. SwishAI works
                anywhere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                How fast is the feedback?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Most breakdowns are returned in 1-3 minutes. Train, upload,
                improve - fast.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-9"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Is my video and data private?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. We take privacy seriously. You control what gets uploaded.
                None of your videos gets stored. They are deleted after you have
                reviewed your feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://i.imgur.com/T5fjXGC.png"
                  alt="Logo"
                  className="w-8 h-8 mr-2"
                />
                <span className="font-bold text-xl">Swish AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Its like having a personal basketball coach in your pocket
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:josh@scalifystudio.com"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    josh@scalifystudio.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@swishai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Swish AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
