import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8"> {/* Darker purple for footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
        <img
          src="/assets/print.png" // Replace with your actual image filename in public/assets
          alt="Print Sapphire Logo"
          className="h-10 w-auto" // Adjust height as needed to fit the design
        />
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Blog</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Customer Support</li>
            <li>Design Guides</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        <p>© 2025 Print Sapphire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;