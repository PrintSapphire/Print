import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <img
            src="/assets/print.png"
            alt="Print Sapphire Logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
          />
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#about"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#blog" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#faq" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#privacy" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#support" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="#guides" // Placeholder; adjust as needed
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Design Guides
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-purple-300 hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 transition-colors duration-300 hover:text-white hover">
        <p>© 2025 Print Sapphire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;