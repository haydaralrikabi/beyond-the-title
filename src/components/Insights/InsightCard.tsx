import React from "react";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  readTime?: string;
  link: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  readTime,
  link,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-blue-400">{category}</span>
          {readTime && (
            <span className="text-sm text-gray-400">{readTime}</span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
