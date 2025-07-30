import React from "react";

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Swish AI – Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Effective Date: {new Date().toLocaleDateString()}
          </p>

          <p className="text-lg font-medium text-gray-900 mb-8">
            We keep it simple: your data is yours. This policy explains what we
            collect, how we use it, and what we don't do with it.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. What We Collect
            </h2>
            <p className="mb-4">
              <strong>Email Address</strong> – collected when you sign up.
            </p>
            <p>
              That's it. No names, no phone numbers, no tracking across apps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Video Content
            </h2>
            <p className="mb-4">Your training videos stay on your device.</p>
            <p className="mb-4">
              When you upload a video for analysis, it's temporarily passed
              through our servers for processing. Once the analysis is complete,
              the video is automatically deleted from our end.
            </p>
            <p>We do not store, review, or share your videos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Email
            </h2>
            <p className="mb-4">We use your email to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Let you log in</li>
              <li>
                Send important account-related updates (e.g. password resets)
              </li>
              <li>Share product announcements (you can opt out anytime)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Retention and Deletion
            </h2>
            <p className="mb-4">
              You can delete your account at any time in the app settings.
            </p>
            <p className="mb-4">
              When you delete your account, we delete your email and all
              associated data permanently.
            </p>
            <p>We retain no information after account deletion.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. No Ads, No Tracking
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We don't run ads.</li>
              <li>We don't track your behavior.</li>
              <li>We don't sell or share your data with third parties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Security
            </h2>
            <p>
              We use industry-standard practices to protect your data in transit
              and at rest (for emails). Video data is encrypted during transfer
              and deleted after processing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Minors
            </h2>
            <p>
              Swish AI is not intended for children under 13. If you are a
              parent and believe your child has provided personal data, contact
              us and we'll delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this policy. If we do, we'll notify you via the app
              or email. Continued use means you accept the new policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="mb-4">
              Questions? Concerns? Email us at{" "}
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
