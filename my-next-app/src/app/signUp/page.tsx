"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [emailData, setEmailData] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[url('/background.jpg')] bg-cover bg-center">
      {/* Header Bar */}
      <div className="w-full h-[68px] bg-black relative">
        <div className="w-full h-full px-8 relative">
          {/* Navigation Buttons */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="flex gap-6 text-sky-100">
            </div>
          </div>

          {/* Auth Buttons and Logo */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-6">
            <Link href="/signup">
              <div className="text-sky-100 hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                Sign Up
              </div>
            </Link>
            <Link href="/login">
              <div className="text-sky-100 hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                Log In
              </div>
            </Link>
            <span className="text-sky-100 text-2xl font-extrabold tracking-wider">© DDD</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold mb-6 text-center text-black">Sign up</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                value={emailData}
                onChange={(e) => setEmailData(e.target.value)}
                id="email"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <Link href="/">
                <div className="text-sky-100 hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                  Join Now
                </div>
              </Link>
            </div>
            <div className="mt-6 text-center text-sm">
              <span className="text-black">Already have an account with us? </span>
              <Link href="/login">
                <div className="text-purple-600 hover:text-purple-800 transition-colors font-medium">
                  Log in
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}