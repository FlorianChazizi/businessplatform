'use client';

import React from 'react';
import { categories } from '../data/Categories';
import * as HeroIcons from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

function CategoryComponent() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
            <span className="text-3xl font-bold mb-10">Explore Categories</span>
            <div className="w-full max-w-7xl">
                {/* Container for different layouts */}
                <div className="hidden lg:grid grid-cols-4 gap-8">
                    {/* Grid layout for larger screens */}
                    {categories.map((category) => {
                        const IconComponent = HeroIcons[category.icon as keyof typeof HeroIcons];
                        return (
                            <div
                                key={category.id}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center text-center"
                            >
                                {IconComponent && (
                                    <IconComponent className="h-12 w-12 text-blue-500 mb-6" />
                                )}
                                <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                                <p className="text-gray-600 text-base">{category.description}</p>
                                <button
                                    className="mt-6 px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
                                    onClick={() => router.push(`/categories/${category.name}`)}
                                >
                                    View Businesses
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Flex Horizontal Scroll for smaller screens */}
                <div className="lg:hidden flex gap-4 overflow-x-auto px-4 py-4 sm:px-6 scrollbar-hidden"> 
                    {categories.map((category) => {
                        const IconComponent = HeroIcons[category.icon as keyof typeof HeroIcons];
                        return (
                            <div
                                key={category.id}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex-none w-64 text-center "
                            >
                                {IconComponent && (
                                    <IconComponent className="h-12 w-12 text-blue-500 mb-6" />
                                )}
                                <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                                <p className="text-gray-600 text-base">{category.description}</p>
                                <button
                                    className="mt-6 px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
                                    onClick={() => router.push(`/categories/${category.name}`)}
                                >
                                    View Businesses
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CategoryComponent;
