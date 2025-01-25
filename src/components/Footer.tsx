import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideFacebook, LucideTwitter, LucideInstagram, LucideLinkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Saylani Microfinance</h2>
          <p className="text-sm">
            Empowering communities through Qarze Hasana loans for weddings, home construction, business startups, and education.
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to receive the latest updates and announcements.
          </p>
          <div className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-gray-200"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
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
