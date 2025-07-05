import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        
        {/* Contact Title */}
        <div>
          <h3 className="text-xl font-semibold mb-2">For Immediate Contact</h3>
          <p className="text-gray-200">
            <strong>Dr. Anjali S Nair</strong> (Publicity Chair)<br />
            Designation: Associate Professor<br />
            Affiliation: NSSCE Palakkad<br />
            Email: <a href="mailto:anjalisnair@nssce.ac.in" className="underline hover:text-blue-200">anjalisnair@nssce.ac.in</a><br />
            Mobile: <a href="tel:9995205235" className="underline hover:text-blue-200">9995205235</a>
          </p>
        </div>

        {/* Optional Extra Column: Copyright or Logo */}
        <div className="text-sm text-gray-300 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} IEEE ICATI 2026. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
