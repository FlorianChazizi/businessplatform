'use client'
import React from 'react';
import { BuildingStorefrontIcon, WrenchScrewdriverIcon, BanknotesIcon, CakeIcon, ScissorsIcon, HeartIcon } from '@heroicons/react/24/solid';

function HeroSection() {
    return (
        <div className="h-screen w-full bg-blue-600 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-10 h-full w-full">
                {/* Left Section (70% on larger screens) */}
                <div className="md:col-span-7 flex flex-col justify-center px-6 md:px-12 bg-blue-600 text-white text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Find Local Businesses Easily
                    </h1>
                    <p className="text-base md:text-lg mb-6 md:mb-8">
                        Discover the best local businesses in your area. From restaurants to
                        gyms, find what you need and connect with them instantly.
                    </p>

                    {/* Icons for Business Types */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                        <div className="flex flex-col items-center">
                            <BuildingStorefrontIcon className="h-10 w-10 text-white mb-2" />
                            <p className="text-sm">Shops</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <WrenchScrewdriverIcon className="h-10 w-10 text-white mb-2" />
                            <p className="text-sm">Technicians</p>
                        </div>
                        {/* Add more icons as needed */}
                        <div className="flex flex-col items-center">
                            <BanknotesIcon className="h-10 w-10 text-white mb-2" />
                            <p className="text-sm">Finance</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CakeIcon className="h-10 w-10 text-white mb-2" />
                            <p className="text-sm">Bakery</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ScissorsIcon className="h-10 w-10 text-white mb-2" />
                            <p className="text-sm">Salon</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HeartIcon className="h-10 w-10 text-white mb-2" />
                            <p className="text-sm">Health</p>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center md:justify-start">
                        <input
                            type="text"
                            placeholder="Search for a business..."
                            className="w-full max-w-md p-3 rounded-lg text-black"
                        />
                    </div>
                </div>

                {/* Right Section (30% on larger screens) */}
                <div className="md:col-span-3 flex flex-col justify-center items-center bg-white p-6 md:p-12 text-center rounded-3xl shadow-lg mx-4 md:mx-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Register Your Own Business
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Get your business listed on our platform and reach local customers
                        easily.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
