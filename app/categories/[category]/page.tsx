'use client';

import { useEffect, useState } from 'react';
import BusinessCard from '@/app/components/BusinessCard';
import { categories } from '@/app/data/Categories'; // Import the categories data
import * as HeroIcons from '@heroicons/react/24/solid';
import '../../styles/loader.css';
interface Business {
    _id: string;
    businessName: string;
    description: string;
    address: string;
    city: string;
    postalCode?: string;
    phoneNumber?: string;
    email?: string;
    website?: string;
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    const [businesses, setBusinesses] = useState<Business[]>([]); 
    const { category } = params;

    const currentCategory = categories.find((cat) => cat.name === category);

    const IconComponent = currentCategory
        ? HeroIcons[currentCategory.icon as keyof typeof HeroIcons]
        : null;

    useEffect(() => {
        async function fetchBusinesses() {
            const response = await fetch(`/api/business?category=${encodeURIComponent(category)}`);
            const data = await response.json();
            setBusinesses(data.businesses || []);
        }

        fetchBusinesses();
    }, [category]);

    if (!category) {
        return <div className="min-h-screen flex items-center justify-center">
          <div className="loader"></div>
          </div>
      }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="text-center mb-6">
                {IconComponent && (
                    <IconComponent className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                )}
                <h2 className="text-3xl font-bold">{category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses.map((business: Business) => (
                    <BusinessCard key={business._id} business={business} />
                ))}
            </div>
        </div>
    );
}
