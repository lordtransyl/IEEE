import React from 'react';

const Team = () => {
  return (
    <section className="p-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. Vasanthi V"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">Dr. Vasanthi V</h3>
            <p className="text-gray-600">General Chair</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. Vijitha S"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">Dr. Vijitha S</h3>
            <p className="text-gray-600">TPS Chair</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Another Person"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">vere arenkilum undel athu</h3>
            <p className="text-gray-600">Role</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
