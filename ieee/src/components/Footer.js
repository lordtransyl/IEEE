import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} IEEE ICATI 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
