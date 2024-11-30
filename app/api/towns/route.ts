import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Town from '@/models/City';

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { name } = await req.json();

    // Validate input
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ message: 'Invalid town name' }, { status: 400 });
    }

    // Check if the town already exists
    const existingTown = await Town.findOne({ name: name.trim() });
    if (existingTown) {
      return NextResponse.json({ message: 'Town already exists' }, { status: 400 });
    }

    // Create and save the town
    const newTown = await Town.create({ name: name.trim() });
    return NextResponse.json({ message: 'Town saved successfully', town: newTown }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
