import React from 'react';

const Loading = ({ isFading }) => {
  return (
    <div className={`fixed inset-0 bg-purple-50 flex items-center justify-center z-50 ${isFading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}>
      <img
        src="/assets/print.png"
        alt="Loading Print Sapphire"
        className="max-h-64 w-auto animate-pulse"
      />
    </div>
  );
};

export default Loading;