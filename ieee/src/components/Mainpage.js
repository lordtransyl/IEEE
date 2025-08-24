import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import venue from '../assets/1584300068598.jpeg';

const Mainpage = () => {
  return (
    <section
      id="home"
      className="
        bg-blue-50
        px-6
        pt-32
        md:pt-20
        lg:pt-16
        pb-16
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="animate-fadeInLeft">
          <h1 className="text-4xl md:text-7xl font-extrabold text-blue-900 mb-4 leading-tight">
            IEEE Nexo-Tech 2026
          </h1>
          <p className="text-lg md:text-xl text-blue-700 font-medium mb-2">
            International Conference on Advanced Technologies and Innovations (ICATI 2026)
          </p>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            8 – 9 May 2026<br />
            NSS College of Engineering, Palakkad, Kerala
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/submit-abstract"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition"
            >
              Submit Abstract / Camera Ready Paper
            </Link>
          </div>
        </div>

        {/* Right Image Box */}
        <div className="animate-fadeInRight flex justify-center md:justify-end">
          <div className="max-w-md w-full shadow-xl rounded-xl overflow-hidden">
            
            {/* Image Section */}
            <img
              src={venue}
              alt="Venue"
              className="w-full object-cover"
            />

            {/* Text Section */}
            <div className="bg-blue-600 text-white text-sm p-6 text-center space-y-3 flex flex-col justify-center">
              <p>
                <span className="font-semibold">Venue:</span> NSS College of Engineering, Palakkad
              </p>
              <p>
                <span className="font-semibold">Dates:</span> 8–9 May 2026
              </p>
              <p>
                In Association with <span className="font-semibold">IEEE</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mainpage;
