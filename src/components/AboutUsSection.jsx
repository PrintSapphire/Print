import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Infrastructure</h3>
            <p className="mb-4">
              We utilize state-of-the-art solvent and eco-solvent printing machines with capacity 
              of up to 26,000 sq.ft of solvent printing and 2,400 sq.ft of eco-solvent printing daily.
            </p>
            <h4 className="font-semibold">Machines in Use:</h4>
            <ul className="list-disc pl-6">
              <li>Colorjet POLO HQ Eco-Solvent Printer (10' width)</li>
              <li>Colorjet Irisjet PRO Solvent Printer</li>
              <li>Roland RF-640A Eco Solvent Printer</li>
              <li>Graphtech Cutting Plotter</li>
              <li>Lamination Machine</li>
              <li>Seeming Machines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Designing</h3>
            <p>
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