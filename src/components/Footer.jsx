import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-6 md:py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {/* Logo Section - Left-aligned on desktop, centered on mobile */}
        <div className="p-4 md:p-0 md:items-start flex flex-col items-center md:items-start">
          <img
            src="/assets/print.png"
            alt="Print Sapphire Logo"
            className="h-8 md:h-10 w-auto transition-transform duration-300 transform hover:scale-110 hover:opacity-90"
          />
        </div>

        {/* Company Section - Left-aligned on desktop, centered on mobile */}
        <div className="p-4 md:p-0 md:items-start flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2 md:mb-4 text-gray-200 text-lg md:text-xl text-center md:text-left">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base text-center md:text-left">
            <li>
              <a
                href="#about"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section - Left-aligned on desktop, centered on mobile */}
        <div className="p-4 md:p-0 md:items-start flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2 md:mb-4 text-gray-200 text-lg md:text-xl text-center md:text-left">Resources</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base text-center md:text-left">
            <li>
              <a
                href="#blog" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#faq" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#privacy" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section - Left-aligned on desktop, centered on mobile */}
        <div className="p-4 md:p-0 md:items-start flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2 md:mb-4 text-gray-200 text-lg md:text-xl text-center md:text-left">Support</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base text-center md:text-left">
            <li>
              <a
                href="#support" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="#guides" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Design Guides
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline transition-transform duration-300 transform hover:scale-105 text-center md:text-left"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 md:mt-8 text-gray-400 text-sm md:text-base transition-colors duration-300 hover:text-white hover:transform hover:scale-105">
        <p>© 2025 Print Sapphire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;