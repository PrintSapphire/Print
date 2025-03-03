import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { name: "Glow Sign & LED Board Fire Exit Radium Sign", image: "/assets/Glow Sign & LED.png", id: "glow-sign-led" },
    { name: "Outdoor Wall Graphic", image: "/assets/Outdoor Wall Graphic.png", id: "outdoor-wall-graphic" },
    { name: "Dugout Branding", image: "/assets/Dugout Branding.png", id: "dugout-branding" },
    { name: "Office Wall Graphic", image: "/assets/Office Wall Graphic.png", id: "office-wall-graphic" },
    { name: "Reflective Direction Signs", image: "/assets/Reflective Direction Signs.png", id: "reflective-direction-signs" },
    { name: "Pole Kiosk", image: "/assets/Pole Kiosk.png", id: "pole-kiosk" },
    { name: "Fleet Graphics", image: "/assets/Fleet Graphics.png", id: "fleet-graphics" },
    { name: "Thermocol Letter Cutout", image: "/assets/Thermocol letter cutout.png", id: "thermocol-letter-cutout" },
    { name: "Car Wrapping", image: "/assets/Car Wrapping.png", id: "car-wrapping" },
    { name: "Backlit Signages", image: "/assets/Backlit Signages.png", id: "backlit-signages" },
    { name: "Free Standing Units", image: "/assets/Free Standing Units.png", id: "free-standing-units" },
    { name: "Boundary Rope", image: "/assets/Boundary Rope.png", id: "boundary-rope" },
    { name: "Promotional Folding Kiosk", image: "/assets/Promotional Folding Kiosk.png", id: "promotional-folding-kiosk" },
    { name: "Mall Facia Branding", image: "/assets/Mall Facia Branding.png", id: "mall-facia-branding" },
    { name: "T-Shirt Printing (Sublimation)", image: "/assets/T-Shirt Printing.png", id: "t-shirt-printing" },
    { name: "Acrylic Dispensers", image: "/assets/Acrylic Dispensers.png", id: "acrylic-dispensers" },
    { name: "Event Backdrop", image: "/assets/Event Backdrop.png", id: "event-backdrop" },
    { name: "Vinyl Wrap on Cars", image: "/assets/Vinyl Wrap on Cars.png", id: "vinyl-wrap-cars" },
    { name: "Promotion Table with Umbrella", image: "/assets/Promotion Table.png", id: "promotion-table-umbrella" },
    { name: "In-store Branding", image: "/assets/In-store Branding.png", id: "in-store-branding" },
    { name: "Customized Bags", image: "/assets/Customized Bags.png", id: "customized-bags" },
    { name: "Novelties", image: "/assets/Novelties.png", id: "novelties" },
    { name: "Promotion Standee & Kiosk", image: "/assets/Promotion Standee & Kiosk.png", id: "promotion-standee-kiosk" },
    { name: "Frosted print on glass door and partition", image: "/assets/image.png", id: "frosted-glass-print" },
  ];

  return (
    <div id="services" className="py-15 bg-purple-100">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 transform hover:shadow-xl hover:scale-105 hover:bg-purple-50 border border-purple-200"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded bg-gray-500 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/assets/placeholder.jpg';
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">{service.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;