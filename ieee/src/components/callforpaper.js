import React from 'react';

const Callforpaper = () => {
  return (
    <section className="p-10 bg-blue-50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-800 mb-4">Important Dates</h2>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      <li><strong>Call for Papers Announcement:</strong> 1st September 2025</li>
      <li><strong>Draft Paper Submission:</strong> 2nd January 2026</li>
      <li><strong>Notification of Acceptance:</strong> 2nd February 2026</li>
      <li><strong>Final Camera-ready Paper:</strong> 28th March 2026</li>
    </ul>
    <button className="mt-4 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded">
      Submit Your Abstract
    </button>
  </div>
</section>

  );
};

export default Callforpaper;
