import React from "react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-purple-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
          About Us
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Side - Video with Overlay */}
          <div className="relative w-[488px] h-[600px] bg-violet-50 rounded-2xl overflow-hidden">
            {/* Background Ellipses */}
            <div className="absolute inset-0">
              <div className="absolute w-[484px] h-[484px] left-[-215px] top-[-246px] bg-indigo-400 rounded-full z-0" />
              <div className="absolute w-[362px] h-[362px] left-[307px] top-[265px] bg-red-300 rounded-full z-0" />
            </div>

            {/* Video (replacing the image) */}
            <video
              src="/assets/AllServicesProvided.mp4" // Replace with your actual video file path in public/assets
              className="absolute inset-0 w-[450px] h-[550px] top-[25px] left-[20px] object-cover rounded-2xl shadow-md z-10"
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => { e.target.poster = '/assets/placeholder.jpg'; }}
            />

            {/* Light Purple Overlay */}
            <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-2xl z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 p-6 rounded-2xl">
            {/* Quote Icon */}
            <div className="flex justify-end mb-4">
              <svg
                width="87"
                height="60"
                viewBox="0 0 87 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-600"
              >
                <path
                  d="M87 70H53.5777C50.176 59.6296 48.4751 48.9136 48.4751 37.8519C48.4751 26.7901 51.4516 17.7161 57.4047 10.6296C63.5279 3.54321 72.4575 0 84.1936 0V16.8519C75.349 16.8519 70.9267 22.5556 70.9267 33.963V38.1111H87V70ZM38.5249 70H5.10264C1.70088 59.6296 0 48.9136 0 37.8519C0 26.7901 2.97654 17.7161 8.92962 10.6296C15.0528 3.54321 23.9824 0 35.7185 0V16.8519C26.8739 16.8519 22.4516 22.5556 22.4516 33.963V38.1111H38.5249V70Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Our Infrastructure */}
              <div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Our Infrastructure
                </h3>
                <p className="text-lg text-purple-600 leading-relaxed">
                  We utilize state-of-the-art solvent and eco-solvent printing
                  machines with a capacity of up to 26,000 sq.ft of solvent
                  printing and 2,400 sq.ft of eco-solvent printing daily.
                </p>
                <h4 className="font-semibold text-purple-800 mt-4 mb-2">
                  Machines in Use:
styles:
                </h4>
                <ul className="list-disc pl-6 text-purple-600">
                  <li>Colorjet POLO HQ Eco-Solvent Printer (10' width)</li>
                  <li>Colorjet Irisjet PRO Solvent Printer</li>
                  <li>Roland RF-640A Eco Solvent Printer</li>
                  <li>Graphtech Cutting Plotter</li>
                  <li>Lamination Machine</li>
                  <li>Seeming Machines</li>
                </ul>
              </div>

              {/* Designing */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Designing
                </h3>
                <p className="text-lg text-purple-600 leading-relaxed">
                  Our team of highly qualified and experienced designers uses
                  the latest software and cutting-edge machinery to deliver
                  exceptional and precise designs for any project scale.
                </p>
              </div>
            </div>

            {/* Rating Section */}
            <p className="mt-4 text-right text-sm text-purple-400 font-medium">
              Print Sapphire Team, Printing Experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;