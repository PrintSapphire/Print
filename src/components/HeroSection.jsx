import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Print Sapphire!</h1>
          <p className="text-xl mb-6">Where Print Meets Excellence</p>
          <p className="text-lg mb-6 text-gray-600">
          Your one-stop professional hub specializing in Point of Purchase advertising 
          and top-notch print solutions with state-of-the-art technology.
        </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Learn More</button>
        </div>
        <div className="md:w-1/2 w-full h-64 bg-gray-500 rounded-lg"></div> {/* Placeholder image */}
      </div>
    </div>
  );
};

export default Hero;