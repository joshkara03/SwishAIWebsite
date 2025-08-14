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
            Effective Date: 2025-08-14
          </p>

          <p className="text-lg font-medium text-gray-900 mb-8">
            We keep data minimal and delete fast. This policy explains exactly
            what we collect, how we use it, and how you control it.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1) What we collect
            </h2>
            <p className="mb-4">
              <strong>Profile:</strong> age, email, player type, improvement
              goals, training frequency.
            </p>
            <p className="mb-4">
              <strong>Purchases:</strong> subscription status and receipt
              metadata via Apple/RevenueCat (to unlock features).
            </p>
            <p className="mb-4">
              <strong>Identifier:</strong> an anonymous app user ID (no
              username/password).
            </p>
            <p>No names, phone numbers, or cross-app tracking.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2) Videos & photos
            </h2>
            <p className="mb-4">We don't store your videos or photos.</p>
            <p>
              For analysis, your content is sent to our AI processing service
              and discarded after the result is returned.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3) How we use data
            </h2>
            <p className="mb-4">
              Run the app, personalize tips, and improve your experience.
            </p>
            <p className="mb-4">
              Verify/restore subscriptions and manage access.
            </p>
            <p className="mb-4">Provide support and keep the service secure.</p>
            <p>No ads. No data sales.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4) Who processes data for us
            </h2>
            <p className="mb-4">
              We share data only with service providers that help us operate
              Swish AI:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Apple / App Store – in-app purchases and receipts</li>
              <li>RevenueCat – subscription management</li>
              <li>Supabase – database for your profile</li>
              <li>Expo services – app delivery/tooling</li>
              <li>
                AI processing provider – generates form analysis from your
                content
              </li>
            </ul>
            <p>
              They act on our instructions and don't have permission to use your
              data for their own marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5) Subscriptions & billing
            </h2>
            <p className="mb-4">
              Subscriptions are billed to your Apple ID via in-app purchase.
            </p>
            <p className="mb-4">
              We don't see or store your full payment details.
            </p>
            <p>
              Manage/cancel in Settings → [your name] → Subscriptions on your
              device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6) Retention & deletion
            </h2>
            <p className="mb-4">
              We keep your profile data until you delete it.
            </p>
            <p className="mb-4">
              Use Settings → Delete account & data to permanently remove your
              profile (including the 5-question survey and email).
            </p>
            <p className="mb-4">
              After deletion, we do not retain your information.
            </p>
            <p>
              Deleting your account does not cancel your Apple subscription.
              Manage billing through Apple.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7) Security
            </h2>
            <p>
              We use industry-standard protections (TLS in transit, restricted
              access). No system is perfect, but we work to safeguard your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8) Children
            </h2>
            <p>
              Swish AI isn't intended for children under 13. If a child's data
              was submitted, contact us and we'll delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9) Your rights & choices
            </h2>
            <p className="mb-4">Delete account & data in-app.</p>
            <p className="mb-4">Access or correct your info by emailing us.</p>
            <p>Opt out of emails: we don't send marketing emails.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10) Changes
            </h2>
            <p>
              If we update this policy, we'll post the new date here and notify
              in-app when appropriate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11) Contact
            </h2>
            <p className="mb-4">
              Questions or requests:{" "}
              <a
                href="mailto:josh@scalifystudio.com"
                className="text-blue-600 hover:underline"
              >
                josh@scalifystudio.com
              </a>
            </p>
            <p>Legal entity: Swish AI (Alberta, Canada)</p>
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
