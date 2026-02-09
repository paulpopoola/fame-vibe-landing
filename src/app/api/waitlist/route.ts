import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, instagram, frequency } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Save to Supabase
    const { error } = await supabase
      .from("waitlist")
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
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save to database" },
        { status: 500 },
      );
    }

    // Calculate position
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    const position = count || 1;

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: "Fame Hub HQ <hello@vibe.famehubhq.site>", // Change when you add your domain
        to: email,
        subject: "You made it to the Vibelist! 🎉",
        html: `
          <h1>Welcome to Fame Hub HQ, ${name}! 🎉</h1>
          <p>You're officially on the Vibelist at position <strong>#${position}</strong>!</p>

          <h2>What's Next?</h2>
          <ul>
            <li>We'll email you updates as we get closer to launch (March 2026)</li>
            <li>You'll get early access 1 week before everyone else</li>
            <li>Share your unique referral link to move up the list (coming soon)</li>
          </ul>

          <h3>Early Bird Perks</h3>
          ${position <= 50 ? "<p>🎉 You're in the first 50! You get: Free launch event ticket + 15% lifetime discount!</p>" : ""}
          ${position <= 100 && position > 50 ? "<p>✨ You're in the first 100! You get: Free launch event ticket + 10% lifetime discount!</p>" : ""}

          <p>Follow us:</p>
          <p>Instagram: <a href="https://instagram.com/famehubhq">@famehubhq</a></p>
          <p>Twitter: <a href="https://twitter.com/famehubhq">@famehubhq</a></p>

          <p>See you soon!</p>
          <p>The Vibe Team</p>
        `,
      });

      // Send notification to yourself (Golden Fame)
      await resend.emails.send({
        from: "Vibelist <hello@vibe.famehubhq.site>",
        to: "popoolapaultemitope1@gmail.com", // Replace with your actual email
        subject: `New Vibelist Signup: ${name}`,
        html: `
          <h2>New Vibelist Signup!</h2>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Instagram:</strong> @${instagram || "N/A"}</li>
            <li><strong>Frequency:</strong> ${frequency || "N/A"}</li>
            <li><strong>Position:</strong> #${position}</li>
          </ul>
          <p>Total signups: ${position}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the whole request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined vibelist",
        position,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Vibelist signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
