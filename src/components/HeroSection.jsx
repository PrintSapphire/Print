import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Show Up, Stand Out!</h1>
          <p className="text-lg mb-6 text-gray-600">
            Bring your ideas to life with high-quality print solutions. We offer extensive ranges of 
            state-of-the-art printing services to meet your business and personal needs.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Learn More</button>
        </div>
        <div className="md:w-1/2 w-full h-64 bg-gray-500 rounded-lg"></div> {/* Placeholder image */}
      </div>
    </div>
  );
};

export default Hero;