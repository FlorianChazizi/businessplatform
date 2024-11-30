import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Business from '@/models/Business';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();

  const { id } = params;

  try {
    const business = await Business.findById(id); 
    if (!business) {
      return NextResponse.json({ message: 'Business not found' }, { status: 404 });
    }
    return NextResponse.json({ business }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching business' }, { status: 500 });
  }
}
