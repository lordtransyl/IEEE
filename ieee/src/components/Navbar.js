import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">
  {/* Logo */}
  <div className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
    IEEE Nexo-Tech 2026
  </div>

  {/* Right Section: Navigation + CTA */}
  <div className="flex items-center gap-8 ml-auto">
    <ul className="flex gap-6 text-gray-700 font-medium">
      <li>
        <a href="#home" className="hover:text-blue-600 transition-colors duration-200">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
          About
        </a>
      </li>
      <li>
        <a href="#call-for-papers" className="hover:text-blue-600 transition-colors duration-200">
          Important Dates
        </a>
      </li>
      <li>
        <a href="#schedule" className="hover:text-blue-600 transition-colors duration-200">
          Schedule
        </a>
      </li>
      <li>
        <a href="#register" className="hover:text-blue-600 transition-colors duration-200">
          Register
        </a>
      </li>
    </ul>

    {/* CTA Button */}
    <a
      href="#submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
    >
      Submit Abstract
    </a>
  </div>
</nav>


  );
};

export default Navbar;
