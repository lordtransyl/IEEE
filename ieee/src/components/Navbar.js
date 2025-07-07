import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
          IEEE Nexo-Tech 2026
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-blue-700 focus:outline-none">
            {isOpen ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#call-for-papers" className="hover:text-blue-600 transition-colors duration-200">Important Dates</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact Us</a>
            </li>
          </ul>

          {/* Submit Abstract - React Router Link */}
          <Link
            to="/submit-abstract"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          >
            Submit Abstract / Camera Ready Paper
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li>
              <a href="#home" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors duration-200 block">Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors duration-200 block">About</a>
            </li>
            <li>
              <a href="#call-for-papers" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors duration-200 block">Important Dates</a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors duration-200 block">Contact Us</a>
            </li>
            <li>
              <Link
                to="/submit-abstract"
                onClick={handleLinkClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 block text-center"
              >
                Submit Abstract / Camera Ready Paper
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
