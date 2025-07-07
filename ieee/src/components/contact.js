import React from 'react';
import {
  HiMail,
  HiPhone,
  HiOfficeBuilding,
  HiUser
} from 'react-icons/hi';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 animate-fadeIn">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-12 text-lg animate-fadeIn delay-100">
          Reach out for any queries regarding IEEE Nexo-Tech 2026. We’re happy to help!
        </p>

        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col gap-6 animate-fadeIn delay-200">
          {/* Name */}
          <div className="flex items-center gap-4">
            <HiUser className="text-blue-600 text-3xl" />
            <p className="text-gray-800 text-lg font-semibold">
              Dr. Anjali S Nair (Publicity Chair)
            </p>
          </div>

          {/* Designation */}
          <div className="flex items-center gap-4">
            <HiOfficeBuilding className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-base">
              Associate Professor, NSSCE Palakkad
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <HiMail className="text-blue-600 text-3xl" />
            <a
              href="mailto:anjalisnair@nssce.ac.in"
              className="text-blue-700 hover:text-blue-900 font-medium text-base"
            >
              anjalisnair@nssce.ac.in
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <HiPhone className="text-blue-600 text-3xl" />
            <a
              href="tel:+919995205235"
              className="text-blue-700 hover:text-blue-900 font-medium text-base"
            >
              +91 99952 05235
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
