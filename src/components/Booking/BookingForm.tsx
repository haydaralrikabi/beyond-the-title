import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { BackNavbar } from "../Navigation/BackNavbar";

export const BookingForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return; // Ensure form.current is not null

    emailjs
      .sendForm("service_92059gj", "template_0lildv6", form.current, {
        publicKey: "c6VrltymqbnQbyTrZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <BackNavbar />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="preferred_date"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Event Type *
              </label>
              <select
                name="event_type"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800"
              >
                <option value="">Select event type</option>
                <option value="keynote">Keynote Speech</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Event Description *
              </label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
