import React from 'react';

const Services = () => {
  const services = [
    { name: "Glow Sign & LED Board Fire Exit Radium Sign", image: "/assets/Glow Sign & LED.png" },
    { name: "Outdoor Wall Graphic", image: "/assets/Outdoor Wall Graphic.png" },
    { name: "Dugout Branding", image: "/assets/Dugout Branding.png" },
    { name: "Office Wall Graphic", image: "/assets/Office Wall Graphic.png" },
    { name: "Reflective Direction Signs", image: "/assets/Reflective Direction Signs.png" },
    { name: "Pole Kiosk", image: "/assets/Pole Kiosk.png" },
    { name: "Fleet Graphics", image: "/assets/Fleet Graphics.png" },
    { name: "Thermocol Letter Cutout", image: "/assets/Thermocol letter cutout.png" },
    { name: "Car Wrapping", image: "/assets/Car Wrapping.png" },
    { name: "Backlit Signages", image: "/assets/Backlit Signages.png" },
    { name: "Free Standing Units", image: "/assets/Free Standing Units.png" },
    { name: "Boundary Rope", image: "/assets/Boundary Rope.png" },
    { name: "Promotional Folding Kiosk", image: "/assets/Promotional Folding Kiosk.png" },
    { name: "Mall Facia Branding", image: "/assets/Mall Facia Branding.png" },
    { name: "T-Shirt Printing (Sublimation)", image: "/assets/T-Shirt Printing.png" },
    { name: "Acrylic Dispensers", image: "/assets/Acrylic Dispensers.png" },
    { name: "Event Backdrop", image: "/assets/Event Backdrop.png" },
    { name: "Vinyl Wrap on Cars", image: "/assets/Vinyl Wrap on Cars.png" },
    { name: "Promotion Table with Umbrella", image: "/assets/Promotion Table.png" },
    { name: "In-store Branding", image: "/assets/In-store Branding.png" },
    { name: "Customized Bags", image: "/assets/Customized Bags.png" },
    { name: "Novelties", image: "/assets/Novelties.png" },
    { name: "Promotion Standee & Kiosk", image: "/assets/Promotion Standee & Kiosk.png" },
    { name: "Frosted print on glass door and partition", image: "/assets/image.png" },
  ];

  return (
    <div id="services" className="py-15 bg-purple-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded bg-gray-500 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;