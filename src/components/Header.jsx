import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Print Sapphire</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;