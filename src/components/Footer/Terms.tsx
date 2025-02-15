import React from "react";
import { BackNavbar } from "../Navigation/BackNavbar";

export const Terms: React.FC = () => {
  return (
    <>
      <BackNavbar />

      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Terms of Use</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-300 mb-4">
              By accessing and using this website, you accept and agree to be
              bound by these Terms of Use and all applicable laws and
              regulations.
            </p>
            <h2 className="text-xl font-bold mt-6 mb-4 text-white">
              Intellectual Property
            </h2>
            <p className="text-gray-300 mb-4">
              The content on this website, including but not limited to text,
              graphics, logos, images, audio clips, digital downloads, and data
              compilations, is owned by Haydar Al-Rikabi and is protected by
              international copyright laws.
            </p>
            <h2 className="text-xl font-bold mt-6 mb-4 text-white">
              User Conduct
            </h2>
            <p className="text-gray-300 mb-4">
              You agree to use this website for lawful purposes and in a way
              that does not infringe upon the rights of others or restrict or
              inhibit anyone else's use and enjoyment of the website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
