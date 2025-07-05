import React from 'react';

const Team = () => {
  return (
    <section className="p-10 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet the Team</h2>
    <div className="grid md:grid-cols-2 gap-8">

      {/* General Chair */}
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-800">Dr. Vasanthi V</h3>
        <p className="text-gray-700">General Chair</p>
        <p className="text-gray-600 text-sm mt-2"><strong>Designation:</strong> Professor</p>
        <p className="text-gray-600 text-sm"><strong>Affiliation:</strong> NSSCE Palakkad</p>
        <p className="text-gray-600 text-sm"><strong>Email:</strong> vasanthivaishnav74@gmail.com</p>
        <p className="text-gray-600 text-sm"><strong>Mobile:</strong> 9447202266</p>
        <p className="text-gray-600 text-sm"><strong>IEEE Member No:</strong> 91249655</p>
      </div>

      {/* Co-General Chair */}
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-800">Dr. Smitha K G</h3>
        <p className="text-gray-700">Co-General Chair</p>
        <p className="text-gray-600 text-sm mt-2"><strong>Designation:</strong> Senior Lecturer</p>
        <p className="text-gray-600 text-sm"><strong>Affiliation:</strong> School of Computer Science and Engineering, Nanyang Technological University, Singapore</p>
        <p className="text-gray-600 text-sm"><strong>Email:</strong> smitha@ntu.edu.sg</p>
        <p className="text-gray-600 text-sm"><strong>Mobile:</strong> Not Provided</p>
        <p className="text-gray-600 text-sm"><strong>IEEE Member No:</strong> Not Provided</p>
      </div>

      {/* TPC Chair 1 */}
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-800">Dr. Vijitha S</h3>
        <p className="text-gray-700">TPC Chair</p>
        <p className="text-gray-600 text-sm mt-2"><strong>Designation:</strong> Professor</p>
        <p className="text-gray-600 text-sm"><strong>Affiliation:</strong> NSSCE Palakkad</p>
        <p className="text-gray-600 text-sm"><strong>Email:</strong> vijithamanoj@nscce.ac.in</p>
        <p className="text-gray-600 text-sm"><strong>Mobile:</strong> 9496615569</p>
        <p className="text-gray-600 text-sm"><strong>IEEE Member No:</strong> 95565858</p>
      </div>

      {/* TPC Chair 2 */}
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-800">Mr. Deepak Unnikrishnan</h3>
        <p className="text-gray-700">TPC Chair</p>
        <p className="text-gray-600 text-sm mt-2"><strong>Designation:</strong> Senior Software Engineer</p>
        <p className="text-gray-600 text-sm"><strong>Affiliation:</strong> University of Massachusetts, Amherst, USA</p>
        <p className="text-gray-600 text-sm"><strong>Email:</strong> Not Provided</p>
        <p className="text-gray-600 text-sm"><strong>Mobile:</strong> 0017813367110</p>
        <p className="text-gray-600 text-sm"><strong>IEEE Member No:</strong> Not Provided</p>
      </div>

    </div>
  </div>
</section>

  );
};

export default Team;
