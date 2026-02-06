import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, instagram, frequency } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name,
          phone,
          email,
          instagram: instagram || null,
          frequency: frequency || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save to database' },
        { status: 500 }
      );
    }

    // Calculate position
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined waitlist',
        position: count || 1,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
};


