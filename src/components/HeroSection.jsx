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
        <div className="md:w-1/2 w-full text-center md:text-left mx-4 md:mx-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Welcome to Print Sapphire!</h1>
          <p className="text-xl md:text-2xl mb-6">Where Print Meets Excellence</p>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Your one-stop professional hub specializing in Point of Purchase advertising 
            and top-notch print solutions with state-of-the-art technology.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 md:px-8 md:py-3 rounded hover:bg-purple-700 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg mx-4 md:mx-0">
            Learn More
          </button>
        </div>

        {/* Right Section - Marquee */}
        <div className="md:w-1/2 w-full h-48 md:h-64 overflow-hidden relative bg-white rounded-lg shadow-md mx-4 md:mx-0 ">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="marquee-content flex space-x-4 md:space-x-6 animate-marquee">
              {[...productImages, ...productImages].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-32 md:w-48 h-32 md:h-48">
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

      {/* Icon Boxes Section */}
      <div className="py-12 bg-purple-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-4 md:mx-0">
            {/* Best Quality */}
            <div className="p-4 md:p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-opacity-30 mx-4 md:mx-0">
              <div className="mb-2 md:mb-4">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
                  <path d="M26 30L30 21C30.7956 21 31.5587 21.3161 32.1213 21.8787C32.6839 22.4413 33 23.2044 33 24V28H38.66C38.9499 27.9967 39.2371 28.0565 39.5016 28.1752C39.7661 28.2939 40.0016 28.4687 40.1919 28.6875C40.3821 28.9063 40.5225 29.1638 40.6033 29.4423C40.6842 29.7207 40.7035 30.0134 40.66 30.3L39.28 39.3C39.2077 39.7769 38.9654 40.2116 38.5979 40.524C38.2304 40.8364 37.7623 41.0055 37.28 41H26M26 30V41M26 30H23C22.4696 30 21.9609 30.2107 21.5858 30.5858C21.2107 30.9609 21 31.4696 21 32V39C21 39.5304 21.2107 40.0391 21.5858 40.4142C21.9609 40.7893 22.4696 41 23 41H26" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Best Quality</h3>
              <p className="text-sm md:text-base text-gray-600">Delivering superior print solutions with state-of-the-art technology for unmatched clarity and durability.</p>
            </div>

            {/* Secure Payment */}
            <div className="p-4 md:p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-opacity-30 mx-4 md:mx-0">
              <div className="mb-2 md:mb-4">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
                  <path d="M23 22H39C39.5304 22 40.0391 22.2107 40.4142 22.5858C40.7893 22.9609 41 23.4696 41 24V30C41 32.6522 39.9464 35.1957 38.0711 37.0711C36.1957 38.9464 33.6522 40 31 40C29.6868 40 28.3864 39.7413 27.1732 39.2388C25.9599 38.7362 24.8575 37.9997 23.9289 37.0711C22.0536 35.1957 21 32.6522 21 30V24C21 23.4696 21.2107 22.9609 21.5858 22.5858C21.9609 22.2107 22.4696 22 23 22Z" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27 29L31 33L35 29" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Secure Payment</h3>
              <p className="text-sm md:text-base text-gray-600">Ensuring safe and reliable payment options for all your printing needs with advanced security measures.</p>
            </div>

            {/* Professional */}
            <div className="p-4 md:p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-opacity-30 mx-4 md:mx-0">
              <div className="mb-2 md:mb-4">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
                  <g clip-path="url(#clip0_4_338)">
                    <path d="M35.9277 39.6872V37.6872C35.9277 36.6263 35.5063 35.6089 34.7562 34.8588C34.006 34.1086 32.9886 33.6872 31.9277 33.6872H23.9277C22.8669 33.6872 21.8495 34.1086 21.0993 34.8588C20.3492 35.6089 19.9277 36.6263 19.9277 37.6872V39.6872" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.9277 29.6872C30.1369 29.6872 31.9277 27.8963 31.9277 25.6872C31.9277 23.4781 30.1369 21.6872 27.9277 21.6872C25.7186 21.6872 23.9277 23.4781 23.9277 25.6872C23.9277 27.8963 25.7186 29.6872 27.9277 29.6872Z" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41.9277 39.6872V37.6872C41.9271 36.8009 41.6321 35.94 41.0891 35.2395C40.5461 34.5391 39.7859 34.0388 38.9277 33.8172" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M34.9277 21.8172C35.7881 22.0375 36.5508 22.5379 37.0954 23.2395C37.64 23.9411 37.9356 24.804 37.9356 25.6922C37.9356 26.5804 37.64 27.4433 37.0954 28.1449C36.5508 28.8465 35.7881 29.3469 34.9277 29.5672" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_338">
                      <rect width="24" height="24" fill="white" transform="translate(18.9277 18.6872)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Professional</h3>
              <p className="text-sm md:text-base text-gray-600">Our experienced team delivers expert design and printing services tailored to your needs.</p>
            </div>

            {/* Competitive Pricing */}
            <div className="p-4 md:p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-opacity-30 mx-4 md:mx-0">
              <div className="mb-2 md:mb-4">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
                  <path d="M31 34C34.866 34 38 30.866 38 27C38 23.134 34.866 20 31 20C27.134 20 24 23.134 24 27C24 30.866 27.134 34 31 34Z" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27.21 32.89L26 42L31 39L36 42L34.79 32.88" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Competitive Pricing</h3>
              <p className="text-sm md:text-base text-gray-600">Offering affordable, high-value printing solutions without compromising on quality.</p>
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