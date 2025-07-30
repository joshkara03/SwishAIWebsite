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
              href="#features"
              className="hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Testimonials
            </a>
            <a
              href="#faqs"
              className="hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("faqs")
                  ?.scrollIntoView({ behavior: "smooth" });
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
              Explore our powerful features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our comprehensive suite of tools and capabilities can
              transform your operations.
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
                    Seamless Integration
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Enjoy peace of mind with advanced security features, including
                  encryption and two-factor authentication.
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
                    Customizable Workflows
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Tailor the platform to fit your unique processes and
                  workflows, ensuring it meets your specific business needs.
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
                    24/7 Customer Support
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Rely on our dedicated support team available around the clock
                  to assist you with any questions or issues.
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
                    Scalable Solutions
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Easily scale your operations as your business grows with our
                  flexible platform designed for expansion.
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
                &quot;Their expertise and support have been invaluable to our
                team. They consistently deliver results that exceed
                expectations.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Sarah Johnson
                  </h4>
                  <p className="text-gray-500 text-xs">IT Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                &quot;Their professionalism and attention to detail set them
                apart. We've experienced seamless collaboration and outstanding
                outcomes.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=laura"
                  alt="Laura Martinez"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Laura Martinez
                  </h4>
                  <p className="text-gray-500 text-xs">HR Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                &quot;Their support has been crucial to our success. They've
                helped us achieve milestones we once thought impossible.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=emily"
                  alt="Emily Davis"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Emily Davis
                  </h4>
                  <p className="text-gray-500 text-xs">Operations Manager</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                &quot;I highly recommend their dedication to customer service
                and expertise in digital marketing has surpassed our
                expectations.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
                  alt="Michael Chen"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Michael Chen
                  </h4>
                  <p className="text-gray-500 text-xs">Marketing Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                &quot;They understand our industry and our unique challenges.
                Their tailored solutions have proven highly effective.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=david"
                  alt="David Wilson"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    David Wilson
                  </h4>
                  <p className="text-gray-500 text-xs">CEO</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                &quot;Their solutions have been instrumental in streamlining our
                financial processes. Their solutions have saved us time and
                money.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer"
                  alt="Jennifer Lee"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Jennifer Lee
                  </h4>
                  <p className="text-gray-500 text-xs">Finance Manager</p>
                </div>
              </div>
            </div>
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
              value="item-1"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                How do I set up my account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                To set up your account, download the app and follow the
                on-screen instructions. You'll need to provide your personal
                information, such as your name, email, and phone number, as well
                as create a secure password.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What should I do if I forget my password?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                If you forget your password, click on the &quot;Forgot
                Password&quot; link on the login screen. You'll receive an email
                with instructions to reset your password. Make sure to check
                your spam folder if you don't see the email in your inbox.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Is my financial information secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, we take security very seriously. We use bank-level
                encryption to protect your data and employ multiple layers of
                security including two-factor authentication. Your financial
                information is never stored in plain text and is protected by
                industry-standard security protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Can I deposit checks using the app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, you can deposit checks directly through the app using
                mobile check deposit. Simply take a photo of the front and back
                of your check, enter the amount, and submit. Funds are typically
                available within 1-2 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg mb-4 px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                How can I track my spending?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Our app automatically categorizes your transactions and provides
                detailed spending insights. You can view your spending by
                category, set budgets, and receive notifications when you're
                approaching your limits. The dashboard gives you a comprehensive
                overview of your financial habits.
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
                Your trusted partner for personal finance management and
                AI-powered financial insights.
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
