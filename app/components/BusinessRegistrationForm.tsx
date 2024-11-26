'use client'
import React, { useState } from 'react';

function BusinessRegistrationForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    description: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    website: '',
    socialMedia: '',
    operatingHours: '',
    photos: null,
    specialOffers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Your Business</h2>
        <form onSubmit={handleSubmit}>

          {/* Basic Business Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Basic Business Information</h3>
            <div className="grid gap-4">
              <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} className="p-2 border rounded w-full" />
              <input type="text" name="category" placeholder="Category" onChange={handleChange} className="p-2 border rounded w-full" />
              <textarea name="description" placeholder="Description" onChange={handleChange} className="p-2 border rounded w-full"></textarea>
            </div>
          </div>

          {/* Location Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Location Information</h3>
            <div className="grid gap-4">
              <input type="text" name="address" placeholder="Address" onChange={handleChange} className="p-2 border rounded w-full" />
              <input type="text" name="city" placeholder="City" onChange={handleChange} className="p-2 border rounded w-full" />
              <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid gap-4">
              <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="p-2 border rounded w-full" />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded w-full" />
              <input type="url" name="website" placeholder="Website" onChange={handleChange} className="p-2 border rounded w-full" />
              <input type="text" name="socialMedia" placeholder="Social Media (e.g., Instagram URL)" onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
          </div>

          {/* Operating Hours */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
            <textarea name="operatingHours" placeholder="Days and Hours Open (e.g., Mon-Fri 9am-5pm)" onChange={handleChange} className="p-2 border rounded w-full"></textarea>
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
            <div className="grid gap-4">
              <input type="file" name="photos" onChange={handleFileChange} className="p-2 border rounded w-full" />
              <input type="text" name="specialOffers" placeholder="Special Offers/Promotions" onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BusinessRegistrationForm;
