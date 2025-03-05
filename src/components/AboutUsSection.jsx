import React from "react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-purple-100">
      <div className="container mx-auto"> {/* Mobile: Adds 16px margin on both sides for mobile, no margin on desktop */}
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800"> About Us</h2>
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Side - Video with Overlay (Card 1) */}
          <div className="flex-1 relative w-full md:max-w-[488px] h-[360px] md:h-[600px] bg-violet-50 rounded-2xl overflow-hidden mx-auto">
            {/* Background Ellipses */}
            <div className="absolute inset-0">
            <div className="absolute w-[484px] h-[484px] left-[-215px] top-[-246px] bg-indigo-400 rounded-full z-0" />
            <div className="absolute w-[362px] h-[362px] left-[50%] translate-x-[-50%] top-[65%] sm:left-[307px] sm:top-[265px] bg-red-300 rounded-full z-0" />
            </div>

            {/* Video */}
            <div className=" inset-0 flex justify-center items-center">
            <video
            // "w-full h-full md:max-w-[330px] md:h-[650px] md:top-[-12px] md:left-1/2 md:transform md:-translate-x-1/2 object-cover rounded-2xl shadow-md z-10
              src="/assets/AllServicesProvided.mp4"
              className="w-full h-full object-cover sm:w-[330px] sm:h-[600px] rounded-2xl shadow-md z-10"
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => { e.target.poster = '/assets/placeholder.jpg'; }}
            />
           </div>
            {/* Light Purple Overlay */}
            <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-2xl z-20" />
          </div>

          {/* Middle - Content (Article) (Card 2) */}
          <div className="p-5 rounded-3xl bg-white shadow-md text-center w-full sm:max-w-[688px] md:max-w-[488px] flex-shrink-0">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <svg
                width="87"
                height="40"
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
            <div className="space-y-6 h-full flex flex-col justify-center">
              {/* Our Infrastructure */}
              <div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
                  Our Infrastructure
                </h3>
                <p className="text-lg text-purple-600 leading-relaxed text-center">
                  We utilize state-of-the-art solvent and eco-solvent printing
                  machines with a capacity of up to 26,000 sq.ft of solvent
                  printing and 2,400 sq.ft of eco-solvent printing daily.
                </p>
                <h4 className="font-semibold text-purple-800 mt-4 mb-2 text-center">
                  Machines in Use:
                </h4>
                <ul className="list-disc pl-6 text-purple-600 text-center">
                  <li className="inline-block w-full ">Colorjet POLO HQ Eco-Solvent Printer <br /> (10' width)</li>
                  <li className="inline-block w-full ">Colorjet Irisjet PRO Solvent Printer</li>
                  <li className="inline-block w-full ">Roland RF-640A Eco Solvent Printer</li>
                  <li className="inline-block w-full ">Graphtech Cutting Plotter</li>
                  <li className="inline-block w-full ">Lamination Machine</li>
                  <li className="inline-block w-full ">Seeming Machines</li>
                </ul>
              </div>

              {/* Designing */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
                  Designing
                </h3>
                <p className="text-lg text-purple-600 leading-relaxed text-center">
                  Our team of highly qualified and experienced designers uses
                  the latest software and cutting-edge machinery to deliver
                  exceptional and precise designs for any project scale.
                </p>
              </div>
            </div>

            {/* Rating Section */}
            <p className="mt-4 text-center text-sm text-purple-400 font-medium">
            Print Sapphire Team, Printing Experts
            </p>
          </div>

          {/* Right Side - Video with Overlay (Card 3) */}
          <div className="flex-1 relative w-full max-w-[488px] h-[360px] md:h-[600px] bg-violet-50 rounded-2xl overflow-hidden mx-auto">
  {/* Background Ellipses */}
  <div className="absolute inset-0">
    <div className="absolute w-[484px] h-[484px] left-[-215px] top-[-246px] bg-indigo-400 rounded-full z-0" />
    <div className="absolute w-[362px] h-[362px] left-[50%] translate-x-[-50%] top-[65%] sm:left-[307px] sm:top-[265px] bg-red-300 rounded-full z-0" />
  </div>

  {/* Video */}
  <div className=" inset-0 flex justify-center items-center">
    <video
      src="/assets/Video2.mp4"
      className="w-full h-full object-cover sm:w-[330px] sm:h-[600px] rounded-2xl shadow-md z-10"
      autoPlay
      loop
      muted
      playsInline
      onError={(e) => { e.target.poster = '/assets/placeholder.jpg'; }}
    />
  </div>

  {/* Light Purple Overlay */}
  <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-2xl z-20" />
</div>

        </div>
      </div>
    </div>
  );
};

export default About;