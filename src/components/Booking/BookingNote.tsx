import React from "react";
import { BackNavbar } from "../../components/Navigation/BackNavbar";
import { Mail } from "lucide-react";

export const BookingNote: React.FC = () => {
  return (
    <>
      <BackNavbar />

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">
            Book Haydar Al-Rikabi for Your Next Event
          </h1>

          <div className="space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-700/30 rounded-lg p-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Looking for an inspiring speaker to elevate your event? Whether
                it's a corporate gathering, leadership seminar, university
                lecture, or a special occasion, Haydar Al-Rikabi delivers
                thought-provoking insights that leave a lasting impact.
              </p>
            </div>

            {/* Booking Process Section */}
            <div className="bg-gray-700/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                How to Book
              </h2>

              <div className="flex items-center gap-3 mb-6 bg-gray-600/30 p-4 rounded-lg">
                <Mail className="text-blue-400 w-6 h-6" />
                <a
                  href="mailto:haydaralrikabi@yahoo.co.uk"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  haydaralrikabi@yahoo.co.uk
                </a>
              </div>

              <p className="text-gray-300 mb-4">
                To ensure a smooth booking process, please include the following
                information:
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-gray-200">
                <div className="space-y-3">
                  <div className="bg-gray-600/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Personal Details</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Your Full Name
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Your Email Address
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-600/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Event Details</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Preferred Date & Time
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Event Type (conference, workshop, etc.)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-600/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Venue Information</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Event Location & Details
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Audience Size & Demographics
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-600/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Content Preferences</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Specific Topics or Themes
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Any Special Requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Timeline */}
            <div className="bg-gray-700/30 rounded-lg p-6">
              <p className="text-gray-200">
                Once we receive your request, we'll get back to you as soon as
                possible to discuss availability, fees, and any additional
                details.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600/20 rounded-lg p-6 text-center">
              <p className="text-xl font-semibold text-white">
                Make your next event unforgettable—book Haydar today!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
