import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb'; // Assumes you have a MongoDB connection utility
import Business from '@/models/Business'; // Assumes you have a Mongoose model for the Business schema

// Define the API handler
export async function POST(req: Request) {
  await connectToDatabase(); // Ensure database connection

  if (req.method === 'POST') {
    try {
      const body = await req.json();
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
      } = body;
console.log(` Name: ${businessName}`);
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
        return NextResponse.json(
          { message: 'Missing required fields.'},
          { status: 400 }
        )
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

      return NextResponse.json(
        { message: 'Business registered successfully', business: newBusiness },
        { status: 201}
      )
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: 'Allowed methods: Post' },
        { status: 200, headers: { Allow: 'POST'}}
      )
    }
  }
}