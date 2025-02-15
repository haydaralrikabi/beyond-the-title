import React from "react";
import { ArrowRight, Mic, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export const Services: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Engaging Presentations",
      description:
        "Delivering thought-provoking talks that inspire authenticity and drive enriching conversations",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focused Topics",
      description:
        "Specialising in personal growth, and fostering genuine connections in professional settings",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diverse Audiences",
      description:
        "Speaking at conferences, corporate events, and educational institutions to audiences of all sizes",
    },
  ];

  return (
    <section className="py-24 bg-gray-800" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Keynote Speaking
          </h2>
          <p className="text-xl text-gray-300">
            Empowering audiences through authentic storytelling and meaningful
            insights
          </p>
        </div>

        {/* Main Service Description - Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2 bg-blue-600/10 rounded-lg text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/booking"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Book for your next event
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
