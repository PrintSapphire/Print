import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Visible on all screens */}
        <img
          src="/assets/print.png"
          alt="Print Sapphire Logo"
          className="h-10 w-auto"
        />

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex md:items-center md:space-x-4">
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

        {/* Mobile Menu Button - Visible on mobile only */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Visible on mobile when open */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#home"
              className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-purple-700 transition-transform duration-300 transform hover:scale-110"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;