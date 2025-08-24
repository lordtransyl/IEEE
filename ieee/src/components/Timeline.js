// src/components/Timeline.js
import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Activity,
  Cpu,
  Radio,
  Lock,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Program 1",
    topics: ["EV and Wireless Charging"],
    icon: <Calendar className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Program 2",
    topics: [
      "Bio Medical Signal Processing",
      "Control System",
      "Instrumentation & Measurement",
    ],
    icon: <Activity className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Program 3",
    topics: [
      "Signal Processing",
      "AI & Machine Learning",
      "Blockchain",
      "Robotics and Automation",
      "IoT",
    ],
    icon: <Cpu className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Program 4",
    topics: [
      "Wireless Communication",
      "Wireless Sensors & Networks",
      "Antenna Theory",
      "RFID Systems",
      "PCS Antenna",
      "Communication Systems",
    ],
    icon: <Radio className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "Program 5",
    topics: [
      "Cyber Security",
      "Human Computer Interaction",
      "Data Science & Big Data Analytics",
      "Embedded Systems",
      "Cloud Computing",
    ],
    icon: <Lock className="w-6 h-6 text-white" />,
  },
];

const Timeline = () => {
  return (
    <section className="bg-gray-900 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Event Schedule
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Central Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div className="bg-gray-800 shadow-lg rounded-2xl p-6 w-80 border border-gray-700 hover:shadow-2xl transition">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                    {event.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {event.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>

              {/* Connector Dot */}
              <span className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
