import React from 'react';

const Mainpage = () => {
  return (
    <section className="bg-blue-50 p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            IEEE Nexo-Tech 2026
          </h1>
          <p className="text-gray-700 mb-4">
            International Conference on Advanced Technologies and Innovations (ICATI 2026)
          </p>
          <p className="text-gray-600 mb-4">
            10 – 11 April 2025 <br />
            NSS College of Engineering, Palakkad, Kerala
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-4">
            Submit Abstract
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
            Download Brochure
          </button>
        </div>
        <div>
          <img src="https://via.placeholder.com/400x250" alt="Venue" className="rounded shadow" />
        </div>
      </div>
    </section>
  );
};

export default Mainpage;
