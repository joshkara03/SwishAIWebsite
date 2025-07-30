import React from "react";

export default function TermsAndConditions() {
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

      {/* Terms and Conditions Content */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing and using Swish AI, you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree
              to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of Swish AI
              per device for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>modify or copy the materials</li>
              <li>
                use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                attempt to reverse engineer any software contained in Swish AI
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Financial Services
            </h2>
            <p>
              Swish AI provides personal finance management tools and services.
              By using our financial services, you agree that:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                You will provide accurate and complete financial information
              </li>
              <li>
                You are responsible for maintaining the security of your account
                credentials
              </li>
              <li>
                You will not use the service for any illegal or unauthorized
                purpose
              </li>
              <li>
                You understand that financial data and advice are for
                informational purposes only
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Account Security
            </h2>
            <p>
              You are responsible for safeguarding the password and all
              activities that occur under your account. You agree to immediately
              notify us of any unauthorized use of your account or any other
              breach of security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Disclaimer
            </h2>
            <p>
              The information on this application is provided on an 'as is'
              basis. To the fullest extent permitted by law, Swish AI excludes
              all representations, warranties, conditions and terms whether
              express or implied.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Limitations
            </h2>
            <p>
              In no event shall Swish AI or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use Swish AI, even if Swish AI or an authorized
              representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Modifications
            </h2>
            <p>
              Swish AI may revise these terms of service at any time without
              notice. By using this application, you are agreeing to be bound by
              the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
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
