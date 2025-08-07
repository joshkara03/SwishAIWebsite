import React from "react";

interface EmailVerificationProps {
  message?: string;
}

const EmailVerification = ({
  message = "Your Email is authenticated, please return to the Swish AI app",
}: EmailVerificationProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://i.imgur.com/T5fjXGC.png"
            alt="Swish AI Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Email Verified!
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{message}</p>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">
            You can now close this window and continue using the Swish AI app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
