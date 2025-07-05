import React from 'react';
import venue from '../assets/1584300068598.jpeg';

const Mainpage = () => {
  return (
    <section className="bg-blue-50 h-[90vh] px-6 flex items-center">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
    
    {/* Left Content */}
    <div>
      <h1 className="text-7xl font-extrabold text-blue-900 mb-4 leading-tight">
        IEEE Nexo-Tech 2026
      </h1>
      <p className="text-xl text-blue-700 font-medium mb-2">
        International Conference on Advanced Technologies and Innovations (ICATI 2026)
      </p>
      <p className="text-gray-600 mb-6 text-lg">
        10 – 11 April 2026<br />
        NSS College of Engineering, Palakkad, Kerala
      </p>
      
      <div className="flex flex-wrap gap-4">
        <a
          href="#submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition"
        >
          Submit Abstract
        </a>
        
      </div>
    </div>

    {/* Right Image Box */}
    <section className="min-h-[90vh] flex items-center justify-center bg-blue-50 px-4">
  <div className="max-w-md w-full shadow-xl rounded-xl overflow-hidden">
    
    {/* Image Section */}
    <img
      src={venue}
      alt="Venue"
      className="w-full h-[300px] object-cover"
    />

    {/* Text Section */}
    <div className="bg-blue-600 text-white text-sm p-6 text-center space-y-3 h-[100px] flex flex-col justify-center">
      <p>
        <span className="font-semibold">Venue:</span> NSS College of Engineering, Palakkad
      </p>
      <p>
        <span className="font-semibold">Dates:</span> 10–11 April 2026
      </p>
      <p>
        In Association with <span className="font-semibold">IEEE</span>
      </p>
    </div>
    
  </div>
</section>


  </div>
</section>

  );
};

export default Mainpage;
