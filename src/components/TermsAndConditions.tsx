import React from "react";

export default function TermsAndConditions() {
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
          Swish AI – Terms & Conditions
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Effective Date: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-8">
            Welcome to Swish AI. By accessing or using our app or website, you
            agree to these Terms & Conditions. If you don't agree, don't use the
            app.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Who We Are
            </h2>
            <p>
              Swish AI is a mobile app that uses artificial intelligence to
              analyze basketball training videos and provide form feedback. We
              do not offer medical or injury advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. User Content
            </h2>
            <p>
              You retain full ownership of the videos and content you upload. By
              using Swish AI, you grant us a license to process and analyze your
              content to deliver feedback and improve the product. We do not
              sell your data or share it without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Use at Your Own Risk
            </h2>
            <p>
              Swish AI gives training feedback based on video analysis. It's not
              a substitute for a real coach or healthcare provider. Any drills
              or suggestions are general in nature and should be used with care.
            </p>
            <p className="mt-4">
              We are not responsible for injuries, performance results, or
              misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Account Rules
            </h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Keep your login info secure</li>
              <li>Not upload anything illegal, harmful, or misleading</li>
              <li>Only use the app for personal or training purposes</li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or delete accounts for violations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Payments
            </h2>
            <p>
              If you sign up for a paid plan, you authorize us to charge your
              payment method. Subscriptions auto-renew unless cancelled. No
              refunds for unused time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Privacy
            </h2>
            <p>
              Your data is handled in accordance with our Privacy Policy. We
              take your privacy seriously and strive to keep your information
              secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Intellectual Property
            </h2>
            <p>
              Swish AI and all related branding, features, and code are owned by
              Swish AI. Don't copy, resell, or reverse-engineer the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Changes
            </h2>
            <p>
              We may update these Terms at any time. If we do, we'll notify you
              via the app or email. Continued use means you accept the new
              terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of Alberta, Canada. Disputes
              will be handled in the courts of Alberta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <p>
              Got questions? Reach out at{" "}
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
                src="https://i.imgur.com/T5fjXGC.png"
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
