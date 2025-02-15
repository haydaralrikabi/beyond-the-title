import React from "react";
import { Link } from "react-router-dom";

export const BackNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">
            Haydar Al-Rikabi
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    </nav>
  );
};
