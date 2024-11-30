'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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

export default function BusinessDetailsPage({ params }: { params: { id: string } }) {
  const [business, setBusiness] = useState<Business | null>(null);
  const { id } = params;

  useEffect(() => {
    async function fetchBusiness() {
      const response = await fetch(`/api/business/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBusiness(data.business);
      } else {
        console.error('Failed to fetch business details');
      }
    }

    fetchBusiness();
  }, [id]);

  if (!business) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{business.businessName}</h1>
        <p className="text-gray-700 text-lg mb-4">{business.description}</p>
        <div className="text-gray-600 mb-4">
          <p><strong>Address:</strong> {business.address}, {business.city}</p>
          {business.postalCode && <p><strong>Postal Code:</strong> {business.postalCode}</p>}
          {business.phoneNumber && <p><strong>Phone:</strong> {business.phoneNumber}</p>}
          {business.email && <p><strong>Email:</strong> {business.email}</p>}
          {business.website && <p><strong>Website:</strong> <a href={business.website} className="text-blue-500 hover:underline">{business.website}</a></p>}
        </div>
      </div>
    </div>
  );
}
