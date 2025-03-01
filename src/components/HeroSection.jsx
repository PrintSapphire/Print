import React from 'react';

const Hero = () => {
  const productImages = [
    "/assets/Acrylic Dispensers.png",
    "/assets/Backlit Signages.png",
    "/assets/Boundary Rope.png",
    "/assets/Car Wrapping.png",
    "/assets/Customized Bags.png", 
    "/assets/Dugout Branding.png",
    "/assets/Event Backdrop.png",
    "/assets/Fleet Graphics.png",
    "/assets/Free Standing Units.png",
    "/assets/Glow Sign & LED.png",
    "/assets/In-store Branding.png",
    "/assets/Mall Facia Branding.png",
    "/assets/Novelties.png",
    "/assets/Office Wall Graphic.png",
    "/assets/Outdoor Wall Graphic.png",
    "/assets/Pole Kiosk.png",
    "/assets/Promotion Standee & Kiosk.png",
    "/assets/Promotional Folding Kiosk.png",
    "/assets/Promotion Table.png",
    "/assets/Reflective Direction Signs.png",
    "/assets/T-Shirt Printing.png",
    "/assets/Thermocol letter cutout.png",
    "/assets/Vinyl Wrap on Cars.png"
  ];

  return (
    <div id="home" className="bg-purple-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Print Sapphire!</h1>
          <p className="text-xl mb-6">Where Print Meets Excellence</p>
          <p className="text-lg mb-6 text-gray-600">
            Your one-stop professional hub specializing in Point of Purchase advertising 
            and top-notch print solutions with state-of-the-art technology.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Learn More
          </button>
        </div>

        {/* Right Section - Marquee */}
        <div className="md:w-1/2 w-full h-64 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center">
            <div className="marquee-content flex space-x-6 animate-marquee">
              {[...productImages, ...productImages].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-48">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    onError={(e) => { e.target.src = '/assets/office.png'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Tailwind Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
