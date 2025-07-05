import React from 'react';

const Schedule = () => {
  return (
    <section className="p-10 bg-blue-50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Event Schedule</h2>
        <ul className="text-gray-700">
          <li><strong>9:00 AM – 10:30 AM (Day 1):</strong> Registration</li>
          <li><strong>10:15 AM – 11:13 AM (Day 2):</strong> Opening Remarks</li>
          <li><strong>11:30 PM – 12:30 PM (Day 2):</strong> Paper Presentations</li>
        </ul>
      </div>
    </section>
  );
};

export default Schedule;
