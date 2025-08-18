import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 md:px-8 lg:px-12">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Google Graveyard</h2>
            <p className="text-xs text-gray-500">
              Discontinued Products Archive
            </p>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/terms"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Terms of Use
          </Link>
          <Link
            to="/privacy"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
