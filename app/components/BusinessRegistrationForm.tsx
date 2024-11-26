'use client';
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json(); // This expects valid JSON
        alert('Business registered successfully!');
        setFormData({
          businessName: '',
          category: '',
          description: '',
          address: '',
          city: '',
          postalCode: '',
          phoneNumber: '',
          email: '',
          website: '',
        });
      } else {
        const errorData = await response.json(); // This will fail if the response isn't valid JSON
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while registering the business.');
    }
  };

  
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Your Business</h2>
        <form onSubmit={handleSubmit}>

          {/* Basic Business Information */}
          <div className="mb-4">
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Location Information */}
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessRegistrationForm;
