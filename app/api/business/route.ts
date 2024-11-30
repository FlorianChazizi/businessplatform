import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Business from '@/models/Business'; 

export async function POST(req: Request) {
  await connectToDatabase(); 

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
          { message: 'Missing required fields.' },
          { status: 400 }
        )
      }

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
        { status: 201 }
      )
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: 'Allowed methods: Post' },
        { status: 200, headers: { Allow: 'POST' } }
      )
    }
  }
}

export async function GET(req: Request) {
  await connectToDatabase();

  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category'); // Extract the 'category' parameter from the query string

    let businesses;
    if (category) {
      // Fetch businesses filtered by category
      businesses = await Business.find({ category });
    } else {
      // If no category is specified, fetch all businesses
      businesses = await Business.find({});
    }

    return NextResponse.json(
      { message: 'Businesses fetched successfully', businesses },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return NextResponse.json(
      { message: 'Internal server error.' },
      { status: 500 }
    );
  }
}