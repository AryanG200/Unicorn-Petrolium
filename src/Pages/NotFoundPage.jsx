import React from "react";
import { Link } from "react-router-dom";
import { useMetaTags } from "../hooks/useMetaTags";

const NotFoundPage = () => {
  useMetaTags(
    "404 - Page Not Found | Unicorn Petroleum",
    "The page you're looking for doesn't exist. Return to Unicorn Petroleum's homepage to explore our premium petroleum products.",
    "",
    "noindex, nofollow"
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {}
        <div className="mb-8">
          <img 
            src="/assets/logo 1.png" 
            alt="Unicorn Petroleum" 
            className="h-16 w-auto mx-auto"
          />
        </div>
        
        {}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-[#E99322] mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 leading-relaxed">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>
          
          {}
          <div className="space-y-4">
            <Link 
              to="/"
              className="block w-full bg-[#E99322] text-white font-medium py-3 px-6 rounded-full hover:bg-[#E99322]/90 transition-all duration-300"
            >
              Go to Homepage
            </Link>
            
            <div className="flex space-x-4">
              <Link 
                to="/products"
                className="flex-1 border-[1.5px] border-[#EDA94E] text-[#E99322] font-semibold py-3 px-4 rounded-lg hover:bg-[#E99322]/5 transition-colors text-center"
              >
                Our Products
              </Link>
              <Link 
                to="/contact"
                className="flex-1 border-[1.5px] border-[#EDA94E] text-[#E99322] font-semibold py-3 px-4 rounded-lg hover:bg-[#E99322]/5 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/about" className="text-[#E99322] hover:text-[#E99322]/80 transition-colors">
                About Us
              </Link>
              <Link to="/applications" className="text-[#E99322] hover:text-[#E99322]/80 transition-colors">
                Applications
              </Link>
              <Link to="/quality" className="text-[#E99322] hover:text-[#E99322]/80 transition-colors">
                Quality Standards
              </Link>
            </div>
          </div>
        </div>
        
        {}
        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please <Link to="/contact" className="text-[#E99322] hover:text-[#E99322]/80">contact our support team</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
