'use client';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRegister } from '@/app/api/hooks/useRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmit, success, error } = useRegister();

  const router = useRouter();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        router.push('/auth/login');
      }, 1500);
    }
  }, [success, router]);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit({ name, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-800">Create an account</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Show Success Message */}
        {success && (
          <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
            Registration successful! Redirecting to login page...
          </div>
        )}

        {/* Show Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded mb-4 text-center">
            {error}
          </div>
        )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}