import React from 'react';

const Callforpaper = () => {
  return (
    <section className="p-10 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Call for Papers</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Instrumentation Systems</li>
          <li>Control Systems</li>
          <li>Automation</li>
          <li>Robotics</li>
        </ul>
        <button className="mt-4 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded">
          Submit Your Abstract
        </button>
      </div>
    </section>
  );
};

export default Callforpaper;
