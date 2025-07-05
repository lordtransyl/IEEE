import React from 'react';

const Abstract = () => {
  return (
    <section className="p-10 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Submit Your Abstract</h2>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="College/Institution"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Title of Abstract"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Abstract;
