import React from 'react';
import {
  FaMicrochip,
  FaBolt,
  FaRobot,
  FaLaptopCode,
  FaHeartbeat,
  FaNetworkWired,
  FaCogs,
} from 'react-icons/fa';

const Areas = () => {
  const areas = [
    {
      title: 'Electronics and Communication Engineering',
      icon: <FaMicrochip className="text-blue-600 text-3xl" />,
      items: [
        'VLSI Design',
        'Communication Systems',
        'Signal Processing',
        'Microwave and RF Engineering',
        'Internet of Things (IoT)',
      ],
    },
    {
      title: 'Electrical and Electronics Engineering',
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
      items: [
        'Power Systems',
        'Renewable Energy',
        'Electric Machines',
        'Power Electronics',
        'Smart Grids',
      ],
    },
    {
      title: 'Instrumentation and Control Engineering',
      icon: <FaRobot className="text-purple-600 text-3xl" />,
      items: [
        'Process Control',
        'Industrial Automation',
        'Measurement and Instrumentation',
        'Robotics and Mechatronics',
        'Control Systems',
      ],
    },
    {
      title: 'Computer Science Engineering',
      icon: <FaLaptopCode className="text-green-600 text-3xl" />,
      items: [
        'Artificial Intelligence',
        'Machine Learning',
        'Data Science',
        'Cybersecurity',
        'Networking and Distributed Systems',
      ],
    },
    {
      title: 'Biomedical Engineering Areas',
      icon: <FaHeartbeat className="text-pink-600 text-3xl" />,
      items: [
        'Medical Imaging (MRI, CT, Ultrasound, image processing)',
        'Biomechanics (Orthopaedic, Cardiovascular, Tissue engineering)',
        'Biomedical Instrumentation (ECG, EEG, EMG, biosensors)',
        'Tissue Engineering (Biomaterials, stem cells, regeneration)',
        'Neural Engineering (Brain-computer interfaces, neuroprosthetics)',
        'Biosignal analysis and interpretation',
        'Clinical Engineering (Device management, clinical trials)',
        'Rehabilitation (Assistive tech, prosthetics, robotics)',
      ],
    },
    {
      title: 'Interdisciplinary Areas',
      icon: <FaNetworkWired className="text-indigo-600 text-3xl" />,
      items: [
        'Embedded Systems (Electronics, CS, Instrumentation)',
        'IoT (Integrating communication, electronics, CS)',
        'Robotics & Automation (Electrical, Electronics, CS)',
      ],
    },
    {
      title: 'Other Areas',
      icon: <FaCogs className="text-gray-600 text-3xl" />,
      items: [
        'Soft Computing (Fuzzy logic, neural networks, genetic algorithms)',
        'Communication Networks (Wireless, security, protocols)',
        'Digital Signal Processing (Image/audio processing, DSP algorithms)',
      ],
    },
  ];

  return (
    <section
      id="areas"
      className="scroll-mt-24 py-16 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">
          Conference Areas
        </h2>

        <p className="text-gray-700 mb-12 text-lg text-center max-w-3xl mx-auto">
          The theme of the conference is{' '}
          <strong>
            “International Conference on Advanced Technologies and Innovations”
            IEEE - ICATI 2026 (IEEE Nexo-Tech 2026)
          </strong>
          . It serves as a platform for researchers, industry, and academia in
          diverse fields such as Signal Processing, Communication, Computer
          Science, Energy Systems, Instrumentation, Robotics, Smart Cities, and
          more.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-start gap-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div>{area.icon}</div>
              <h3 className="text-lg font-bold text-blue-800">
                {area.title}
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                {area.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
