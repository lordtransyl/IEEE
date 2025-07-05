import React from 'react';

const Areas = () => {
  return (
    <section className="p-10 bg-blue-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">Conference Areas</h2>

    <p className="text-gray-700 mb-8 text-lg">
      The theme of the conference is <strong>“International Conference on Advanced Technologies and Innovations” IEEE - ICATI 2026 (IEEE Nexo-Tech 2026)</strong>.
      It is a platform for technical exchange amongst researchers from academia, research laboratories, and industries in various emerging fields including
      Signal Processing, Communication, Computer Science, Energy Systems, Instrumentation & Control Systems, Robotics, Smart Cities and more.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Electronics and Communication */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Electronics and Communication Engineering</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>VLSI Design</li>
          <li>Communication Systems</li>
          <li>Signal Processing</li>
          <li>Microwave and RF Engineering</li>
          <li>Internet of Things (IoT)</li>
        </ul>
      </div>

      {/* Electrical and Electronics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Electrical and Electronics Engineering</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Power Systems</li>
          <li>Renewable Energy</li>
          <li>Electric Machines</li>
          <li>Power Electronics</li>
          <li>Smart Grids</li>
        </ul>
      </div>

      {/* Instrumentation and Control */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Instrumentation and Control Engineering</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Process Control</li>
          <li>Industrial Automation</li>
          <li>Measurement and Instrumentation</li>
          <li>Robotics and Mechatronics</li>
          <li>Control Systems</li>
        </ul>
      </div>

      {/* Computer Science */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Computer Science Engineering</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
          <li>Cybersecurity</li>
          <li>Networking and Distributed Systems</li>
        </ul>
      </div>

      {/* Biomedical Engineering */}
      <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Biomedical Engineering Areas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Medical Imaging:</strong> MRI, CT, Ultrasound, image processing</li>
            <li><strong>Biomechanics:</strong> Orthopaedic, Cardiovascular, Tissue engineering</li>
            <li><strong>Biomedical Instrumentation:</strong> ECG, EEG, EMG, biosensors</li>
            <li><strong>Tissue Engineering:</strong> Biomaterials, stem cells, regeneration</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Neural Engineering:</strong> Brain-computer interfaces, neuroprosthetics</li>
            <li><strong>Signal Processing:</strong> Biosignal analysis and interpretation</li>
            <li><strong>Clinical Engineering:</strong> Device management, clinical trials</li>
            <li><strong>Rehabilitation:</strong> Assistive tech, prosthetics, robotics</li>
          </ul>
        </div>
      </div>

      {/* Interdisciplinary Areas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Interdisciplinary Areas</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Embedded Systems:</strong> Electronics, CS, Instrumentation</li>
          <li><strong>IoT:</strong> Integrating communication, electronics, CS</li>
          <li><strong>Robotics & Automation:</strong> Electrical, Electronics, CS</li>
        </ul>
      </div>

      {/* Other Areas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Other Areas</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Soft Computing:</strong> Fuzzy logic, neural networks, genetic algorithms</li>
          <li><strong>Communication Networks:</strong> Wireless, security, protocols</li>
          <li><strong>Digital Signal Processing:</strong> Image/audio processing, DSP algorithms</li>
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default Areas;
