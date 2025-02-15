import React from "react";
import { BackNavbar } from "../Navigation/BackNavbar";

export const Disclaimer: React.FC = () => {
  return (
    <>
      <BackNavbar />

      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Disclaimer</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-300 mb-4">
              The information provided on this website is for general
              informational purposes only. All information is provided in good
              faith, however, we make no representation or warranty of any kind,
              express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability, or completeness of any information on
              the website.
            </p>
            <p className="text-gray-300 mb-4">
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              website or reliance on any information provided on the website.
              Your use of the website and your reliance on any information on
              the website is solely at your own risk.
            </p>
            <p className="text-gray-300 mb-4">
              The website may contain links to other websites or content
              belonging to or originating from third parties. Such external
              links are not investigated, monitored, or checked for accuracy,
              adequacy, validity, reliability, availability, or completeness by
              us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
