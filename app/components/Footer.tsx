'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Brand Section */}
          <div className="mb-4 sm:mb-0">
            <span className="text-2xl font-bold">Business Index</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
            <a href="#services" className="hover:text-gray-200">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
            <a href="#blog" className="hover:text-gray-200">
              Blog
            </a>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-blue-300"></div>

          {/* Footer Bottom Section */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Copyright Info */}
            <p className="text-sm">© 2024 Your Brand. All Rights Reserved.</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.99 3.657 9.129 8.438 9.878v-6.987H8.077v-2.891h2.361V9.797c0-2.34 1.382-3.638 3.502-3.638.708 0 1.455.125 1.455.125v1.604h-1.088c-1.075 0-1.409.667-1.409 1.349v1.616h2.697l-.431 2.89h-2.266v6.987C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.29 2c-2.49 0-4.52 2.03-4.52 4.52 0 .35.04.69.11 1.02C7.72 7.4 4.1 5.77 1.67 3.16a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.96 2.01 3.77a4.48 4.48 0 01-2.05-.57v.06c0 2.2 1.57 4.03 3.64 4.45a4.52 4.52 0 01-2.04.08c.57 1.78 2.23 3.07 4.2 3.11A9.06 9.06 0 010 20.29a12.74 12.74 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85l-.02-.59A9.18 9.18 0 0023 3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8c3.32 0 6 2.69 6 6.02C22 17.34 19.32 20 16 20H8c-3.32 0-6-2.66-6-5.98C2 10.69 4.68 8 8 8h8m0-2H8C4.13 6 1 9.13 1 13.02 1 17 4.13 20 8 20h8c3.87 0 7-3.03 7-6.98C23 9.12 19.87 6 16 6M8 9.25c.69 0 1.25.56 1.25 1.25S8.69 11.75 8 11.75 6.75 11.19 6.75 10.5 7.31 9.25 8 9.25m1.25 2.25c.83 0 1.5-.67 1.5-1.5S10.08 8.5 9.25 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m2.75-2.25H16v6.5H12V9.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
