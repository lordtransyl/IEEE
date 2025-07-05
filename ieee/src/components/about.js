import React from 'react';

const About = () => {
  return (
    <section className="h-[90vh] flex items-center bg-white px-10 py-8">
  <div className="max-w-6xl mx-auto flex justify-between items-stretch gap-12 w-full">
    
    {/* Left Side - About Section */}
    <div className="w-1/2 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">About ICATI 2026</h2>
      <p className="text-gray-700 mb-4">
        The International Conference on Advanced Technologies and Innovations (ICATI 2026) is a platform for researchers, practitioners,
        and industry professionals to discuss and explore the latest advancements in various technological fields. The conference aims
        to foster collaboration and knowledge exchange, addressing current challenges and charting the future of technological progress.
      </p>
      <p className="text-gray-700 mb-2 font-semibold">Key aspects of ICATI 2026:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Focus Areas:</strong> AI, Quantum Computing, Cybersecurity, IoT, 5G/6G, Robotics, Sustainable Tech, Biotechnology, AR/VR, Space Tech.</li>
        <li><strong>Target Audience:</strong> Researchers, practitioners, and industry professionals from academia and industry.</li>
        <li><strong>Location and Dates:</strong> Likely in the first half of 2026. Exact details to be announced.</li>
        <li><strong>Call for Papers:</strong> Submissions on conference themes will undergo peer review.</li>
        <li><strong>Publication:</strong> Accepted papers will be published and submitted for indexing (Scopus, Web of Science).</li>
        <li><strong>Special Sessions:</strong> May include topical special sessions of current interest.</li>
      </ul>
      <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
        View Full Guidelines
      </button>
    </div>

    {/* Right Side - Call for Papers */}
    <div className="w-1/3 flex items-center justify-center">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md w-full">
        <h3 className="text-2xl font-semibold mb-4">Call for Papers</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Instrumentation Systems</li>
          <li>Control Systems</li>
          <li>Automation</li>
          <li>Robotics</li>
        </ul>
        <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
          Submit Your Abstract
        </button>
      </div>
    </div>

  </div>
</section>

  );
};

export default About;
