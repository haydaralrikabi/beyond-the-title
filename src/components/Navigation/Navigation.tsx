import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "../../types";

interface NavigationProps {
  items: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="text-xl md:text-2xl font-bold">HAYDAR AL-RIKABI</div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-white py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
