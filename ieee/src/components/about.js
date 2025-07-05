import React from 'react';

const About = () => {
  return (
    <section className="p-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About ICATI 2026</h2>
        <p className="text-gray-700">
          AS8 College of Engineering hosted the conference.
          Submissions are invited on advanced control engineering, instrumentation,
          and innovative technological solutions.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          View Full Guidelines
        </button>
      </div>
    </section>
  );
};

export default About;
