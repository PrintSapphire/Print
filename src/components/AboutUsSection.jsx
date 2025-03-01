import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 bg-purple-100"> {/* Lighter purple for about */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Infrastructure</h3>
            <p className="mb-4 text-gray-600">
              We utilize state-of-the-art solvent and eco-solvent printing machines with capacity 
              of up to 26,000 sq.ft of solvent printing and 2,400 sq.ft of eco-solvent printing daily.
            </p>
            <h4 className="font-semibold text-gray-800">Machines in Use:</h4>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Colorjet POLO HQ Eco-Solvent Printer (10' width)</li>
              <li>Colorjet Irisjet PRO Solvent Printer</li>
              <li>Roland RF-640A Eco Solvent Printer</li>
              <li>Graphtech Cutting Plotter</li>
              <li>Lamination Machine</li>
              <li>Seeming Machines</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Designing</h3>
            <p className="text-gray-600">
              Our team of highly qualified and experienced designers uses the latest software 
              and cutting-edge machinery to deliver exceptional and precise designs for any project scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;