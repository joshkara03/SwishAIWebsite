import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

const HeroSection = ({
  title = "Experience Effortless Banking Every Day.",
  subtitle = "Manage your finances, track your spending, and achieve your goals — all from the palm of your hand.",
  badgeText = "Spring Release",
}: HeroSectionProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        setMessage("Error joining waitlist. Please try again.");
      } else {
        setMessage("Successfully joined the waitlist!");
        setEmail("");
      }
    } catch (error) {
      setMessage("Error joining waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        {/* Left side content */}
        <div className="flex flex-col items-start space-y-6 lg:w-1/2">
          <div className="flex items-center">
            <Badge className="text-yellow-800 hover:bg-yellow-100 rounded-full px-3 py-1 text-sm font-medium bg-[#ffcc9d]">
              {badgeText}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            {title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-[600px]">
            {subtitle}
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-[600px]">
            <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get started"
                className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="ml-2 px-4 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
            {message && (
              <p
                className={`mt-2 text-sm ${
                  message.includes("Successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="flex items-center space-x-2 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-muted border-2 border-background overflow-hidden"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              More than 79 satisfied hoopers
            </span>
          </div>
        </div>

        {/* Right side content */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-200 to-yellow-100 opacity-70 blur-xl"></div>
          <img
            src="https://i.imgur.com/g4Kougx.jpeg"
            alt="Mobile app preview"
            className="relative z-10 max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
