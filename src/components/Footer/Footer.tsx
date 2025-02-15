import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Youtube, XIcon } from "lucide-react";

export const Footer: React.FC = () => {
  // Footer links without Contact
  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Insights", href: "#insights" },
    { label: "Videos", href: "#videos" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/rikabi",
      label: "LinkedIn",
    },
    {
      icon: <XIcon className="h-5 w-5" />,
      href: "https://x.com/HaydarAlRikabi",
      label: "X (formerly Twitter)",
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://www.youtube.com/@HaydarAlRikabi",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Haydar Al-Rikabi</h2>
            <p className="text-gray-400 mb-4">Thought Leader & Speaker</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:haydaralrikabi@yahoo.co.uk"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              haydaralrikabi@yahoo.co.uk
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Haydar Al-Rikabi. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/disclaimer"
              className="text-gray-400 hover:text-white text-sm"
            >
              Disclaimer
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
