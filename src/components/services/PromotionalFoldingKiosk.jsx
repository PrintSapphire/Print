import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../services';

const PromotionalFoldingKiosk = () => {
  const service = services.find((s) => s.id === 'promotional-folding-kiosk');

  return (
    <div className="py-15 bg-purple-100">
      <div className="container mx-auto px-4">
        <Link to="/" className="text-purple-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">{service.name}</h1>
          <div className="w-full h-96 mb-6 overflow-hidden rounded bg-gray-500 flex items-center justify-center">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/placeholder.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalFoldingKiosk;