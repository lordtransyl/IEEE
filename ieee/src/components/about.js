import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="
        bg-white
        px-6 md:px-10
        py-8
        mt-6 md:mt-10
        scroll-mt-24
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center gap-8">
        
        {/* Left Side - About Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            About ICATI 2026
          </h2>
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            The International Conference on Advanced Technologies and Innovations (ICATI 2026) is a platform for researchers, practitioners,
            and industry professionals to discuss and explore the latest advancements in various technological fields. The conference aims
            to foster collaboration and knowledge exchange, addressing current challenges and charting the future of technological progress.
          </p>
          <p className="text-gray-700 mb-2 font-semibold">
            Key aspects of ICATI 2026:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li><strong>Focus Areas:</strong> AI, Quantum Computing, Cybersecurity, IoT, 5G/6G, Robotics, Sustainable Tech, Biotechnology, AR/VR, Space Tech.</li>
            <li><strong>Target Audience:</strong> Researchers, practitioners, and industry professionals from academia and industry.</li>
            <li><strong>Location and Dates:</strong> Likely in the first half of 2026. Exact details to be announced.</li>
            <li><strong>Call for Papers:</strong> Submissions on conference themes will undergo peer review.</li>
            <li><strong>Publication:</strong> Accepted papers will be published and submitted for indexing (Scopus, Web of Science).</li>
            <li><strong>Special Sessions:</strong> May include topical special sessions of current interest.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
