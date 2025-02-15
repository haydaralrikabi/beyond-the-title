import React, { useState } from "react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://haydaralrikabi.substack.com/api/v1/free",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-blue-600 py-16 md:py-24" id="newsletter">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100">
            Get valuable nuggets about leadership straight to your inbox
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email..."
              className="flex-1 px-4 py-2 rounded-lg bg-white text-blue-600 placeholder-blue-600/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {status === "success" && (
            <p className="mt-3 text-green-300 text-center">
              Thanks for subscribing!
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-red-300 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
