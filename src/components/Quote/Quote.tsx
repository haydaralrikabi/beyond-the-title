import React from "react";

interface QuoteProps {
  text: string;
  author: string;
}

export const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl/14 font-bold mb-6">
          "{text}"
        </h2>
        <p className="text-lg md:text-xl text-gray-600">{author}</p>
      </div>
    </section>
  );
};
