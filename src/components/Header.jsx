import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/assets/print.png"
          alt="Print Sapphire Logo"
          className="h-10 w-auto"
        />
        <div className="space-x-4 flex items-center">
          <a
            href="#home"
            className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
          >
            Contact
          </a>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;