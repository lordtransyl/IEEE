import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const ImportantDate = () => {
  return (
    <section
      id="call-for-papers"
      className="scroll-mt-24 py-20 px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-blue-900 relative overflow-hidden"
      style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white drop-shadow-lg">
          Important Dates
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            { label: 'Call for Papers Announcement', date: '1st September 2025' },
            { label: 'Draft Paper Submission', date: '2nd January 2026' },
            { label: 'Notification of Acceptance', date: '2nd February 2026' },
            { label: 'Final Camera-ready Paper', date: '28th March 2026' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 flex items-center gap-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaCalendarAlt className="text-blue-700 text-3xl flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-lg text-blue-900">{item.label}</p>
                <p className="text-gray-700 text-sm mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional subtle wave SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 text-blue-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillOpacity="0.2" d="M0,192L1440,320L1440,320L0,320Z" />
      </svg>
    </section>
  );
};

export default ImportantDate;
