import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="/images/Icon 2.png"
              alt="Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="font-bold text-xl">Swish AI</span>
          </div>
          <nav className="ml-10 hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Product
            </a>
            <a href="#" className="hover:text-gray-300">
              Resources
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p>
              Welcome to Swish AI. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Identity Data: includes first name, last name, username or
                similar identifier
              </li>
              <li>
                Contact Data: includes email address and telephone numbers
              </li>
              <li>
                Financial Data: includes bank account and payment card details
              </li>
              <li>
                Transaction Data: includes details about payments to and from
                you
              </li>
              <li>
                Technical Data: includes internet protocol (IP) address, browser
                type and version
              </li>
              <li>
                Usage Data: includes information about how you use our website
                and services
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our service
              </li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorised way, altered or disclosed. We use bank-level
              encryption and employ multiple layers of security including
              two-factor authentication.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p>
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:josh@scalifystudio.com"
                className="text-blue-600 hover:underline"
              >
                josh@scalifystudio.com
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/images/Icon 2.png"
                alt="Logo"
                className="w-8 h-8 mr-2"
              />
              <span className="font-bold text-xl">Swish AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Swish AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
