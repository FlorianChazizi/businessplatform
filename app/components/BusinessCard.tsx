'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BusinessCard({ business }: { business: any }) {
    const router = useRouter();

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            onClick={() => router.push(`/business/${business._id}`)}
        >
            <h2 className="text-xl font-semibold mb-2">{business.businessName}</h2>
            <p className="text-gray-600 text-sm mb-4">{business.description}</p>
            <p className="text-blue-500 text-sm">{business.address}</p>
        </div>
    );
}
