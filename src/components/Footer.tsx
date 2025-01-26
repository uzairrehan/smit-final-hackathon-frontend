import React from "react";
import { LucideFacebook, LucideTwitter, LucideInstagram, LucideLinkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Saylani Microfinance</h2>
          <p className="text-sm">
            Empowering communities through Qarze Hasana loans for weddings, home construction, business startups, and education.
          </p>
        </div>

        {/* Empty middle section to balance layout */}
        <div></div>

        {/* Social Media Links */}
        <div className="text-right">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 justify-end">
            <a href="#" className="text-gray-400 hover:text-white">
              <LucideFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LucideTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LucideInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LucideLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 Saylani Welfare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
