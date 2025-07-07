import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const AbstractForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      setMessage('Please select a PDF file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('title', title);
      formData.append('pdfFile', pdfFile);

      const res = await fetch('https://ieee-backend-b7wg.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setMessage('Abstract submitted successfully!');
        setName('');
        setEmail('');
        setTitle('');
        setPdfFile(null);
      } else {
        setMessage('Submission failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong.');
    }
  };

  return (
    <section
      id="submit"
      className="scroll-mt-24 py-16 px-6 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-10 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          Submit Your Abstract
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Paper Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Title of your paper"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Abstract (PDF only)
            </label>
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex items-center justify-center border-2 border-dashed border-blue-500 rounded-lg p-6 text-blue-700 hover:bg-blue-50 transition"
            >
              <FaUpload className="text-2xl mr-2" />
              {pdfFile ? pdfFile.name : 'Click to select your PDF'}
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg font-semibold shadow-lg transition-all duration-300"
          >
            Submit Abstract
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-green-700 font-medium animate-fadeIn">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default AbstractForm;
