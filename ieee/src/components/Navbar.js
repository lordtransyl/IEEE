import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">
      <div className="text-xl font-bold text-blue-800">IEEE</div>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">About</a></li>
        <li><a href="#" className="hover:text-blue-600">Call-for-Papers</a></li>
        <li><a href="#" className="hover:text-blue-600">Schedule</a></li>
        <li><a href="#" className="hover:text-blue-600">Register</a></li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Abstract
      </button>
    </nav>
  );
};

export default Navbar;
