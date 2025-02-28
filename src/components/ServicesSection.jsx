import React from 'react';

const Services = () => {
  const services = [
    "Signages", "Retail Displays", "Large Format Printing", "Glow Sign & LED Board",
    "Outdoor Wall Graphic", "Dugout Branding", "Office Wall Graphic", "Reflective Direction Signs",
    "Pole Kiosk", "Fleet Graphics", "Thermocol Letter Cutout", "Car Wrapping",
    "Backlit Signages", "Free Standing Units", "Boundary Rope", "Promotional Folding Kiosk",
    "Mall Facia Branding", "Fire Exit Radium Sign", "T-Shirt Printing (Sublimation)",
    "Aerylic Dispensers", "Event Backdrop", "Vinyl Wrap on Cars", "Promotion Table with Umbrella",
    "In-store Branding", "Customized Bags", "Novelties", "Promotion Standee & Kiosk"
  ];

  return (
    <div id="services" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;