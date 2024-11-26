import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongodb'; // Assumes you have a MongoDB connection utility
import Business from '@/models/Business'; // Assumes you have a Mongoose model for the Business schema

// Define the API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase(); // Ensure database connection

  if (req.method === 'POST') {
    try {
      const {
        businessName,
        category,
        description,
        address,
        city,
        postalCode,
        phoneNumber,
        email,
        website,
      } = req.body;

      // Validate input
      if (
        !businessName ||
        !category ||
        !description ||
        !address ||
        !city ||
        !postalCode ||
        !phoneNumber ||
        !email
      ) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Create a new business entry
      const newBusiness = await Business.create({
        businessName,
        category,
        description,
        address,
        city,
        postalCode,
        phoneNumber,
        email,
        website,
      });

      return res.status(201).json({ message: 'Business registered successfully', business: newBusiness });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}