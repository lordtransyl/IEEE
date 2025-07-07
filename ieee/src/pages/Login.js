import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-400 px-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-10 text-center tracking-wide">
          Admin Login
        </h2>

        {error && (
          <div
            className="mb-8 bg-red-100 border border-red-400 text-red-700 px-5 py-3 rounded-lg text-center font-medium"
            role="alert"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-7">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-4 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-semibold shadow-lg tracking-wider transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
