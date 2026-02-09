// import { NextRequest, NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { name, phone, email, instagram, frequency } = body;

//     // Validate required fields
//     if (!name || !phone || !email) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 },
//       );
//     }

//     // Save to Supabase
//     const { error } = await supabase
//       .from("waitlist")
//       .insert([
//         {
//           name,
//           phone,
//           email,
//           instagram: instagram || null,
//           frequency: frequency || null,
//           created_at: new Date().toISOString(),
//         },
//       ])
//       .select();

//     if (error) {
//       console.error("Supabase error:", error);
//       return NextResponse.json(
//         { error: "Failed to save to database" },
//         { status: 500 },
//       );
//     }

//     // Calculate position
//     const { count } = await supabase
//       .from("waitlist")
//       .select("*", { count: "exact", head: true });

//     const position = count || 1;

//     // Send confirmation email to user
//     try {
//       await resend.emails.send({
//         from: "Fame Hub HQ <hello@vibe.famehubhq.site>", // Change when you add your domain
//         to: email,
//         subject: "You made it to the Vibelist! 🎉",
//         html: `
//           <h1>Welcome to Fame Hub HQ, ${name}! 🎉</h1>
//           <p>You're officially on the Vibelist at position <strong>#${position}</strong>!</p>

//           <h2>What's Next?</h2>
//           <ul>
//             <li>We'll email you updates as we get closer to launch (March 2026)</li>
//             <li>You'll get early access 1 week before everyone else</li>
//             <li>Share your unique referral link to move up the list (coming soon)</li>
//           </ul>

//           <h3>Early Bird Perks</h3>
//           ${position <= 50 ? "<p>🎉 You're in the first 50! You get: Free launch event ticket + 15% lifetime discount!</p>" : ""}
//           ${position <= 100 && position > 50 ? "<p>✨ You're in the first 100! You get: Free launch event ticket + 10% lifetime discount!</p>" : ""}

//           <p>Follow us:</p>
//           <p>Instagram: <a href="https://instagram.com/famehubhq">@famehubhq</a></p>
//           <p>Twitter: <a href="https://twitter.com/famehubhq">@famehubhq</a></p>

//           <p>See you soon!</p>
//           <p>The Vibe Team</p>
//         `,
//       });

//       // Send notification to yourself (Golden Fame)
//       await resend.emails.send({
//         from: "Vibelist <hello@vibe.famehubhq.site>",
//         to: "popoolapaultemitope1@gmail.com", // Replace with your actual email
//         subject: `New Vibelist Signup: ${name}`,
//         html: `
//           <h2>New Vibelist Signup!</h2>
//           <ul>
//             <li><strong>Name:</strong> ${name}</li>
//             <li><strong>Email:</strong> ${email}</li>
//             <li><strong>Phone:</strong> ${phone}</li>
//             <li><strong>Instagram:</strong> @${instagram || "N/A"}</li>
//             <li><strong>Frequency:</strong> ${frequency || "N/A"}</li>
//             <li><strong>Position:</strong> #${position}</li>
//           </ul>
//           <p>Total signups: ${position}</p>
//         `,
//       });
//     } catch (emailError) {
//       console.error("Email error:", emailError);
//       // Don't fail the whole request if email fails
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Successfully joined vibelist",
//         position,
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Vibelist signup error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log("🚀 API route hit - starting process...");

  try {
    const body = await request.json();
    const { name, phone, email, instagram, frequency } = body;

    console.log("📝 Received data:", {
      name,
      email,
      phone,
      instagram,
      frequency,
    });

    // Validate required fields
    if (!name || !phone || !email) {
      console.log("❌ Validation failed - missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("✅ Validation passed");

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existingUser) {
      console.log("⚠️ Email already exists:", email);
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 400 },
      );
    }

    console.log("✅ Email is unique");

    // Generate referral code
    const referralCode = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    console.log("🎲 Generated referral code:", referralCode);

    // Save to Supabase
    console.log("💾 Saving to Supabase...");
    const { error } = await supabase
      .from("waitlist")
      .insert([
        {
          name,
          phone,
          email,
          instagram: instagram || null,
          frequency: frequency || null,
          referral_code: referralCode,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save to database" },
        { status: 500 },
      );
    }

    console.log("✅ Saved to Supabase successfully");

    // Calculate position
    console.log("🔢 Calculating position...");
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    const position = count || 1;
    console.log("📍 Position:", position);

    // ========================================
    // EMAIL SENDING - THIS IS THE CRITICAL PART
    // ========================================

    console.log("📧 Starting email sending process...");
    console.log("🔑 RESEND_API_KEY exists?", !!process.env.RESEND_API_KEY);
    console.log(
      "🔑 RESEND_API_KEY starts with re_?",
      process.env.RESEND_API_KEY?.startsWith("re_"),
    );

    try {
      console.log("📤 Attempting to send user confirmation email to:", email);

      const userEmailResult = await resend.emails.send({
        from: "Vibe <hello@vibe.famehubhq.site>",
        to: email,
        subject: "You're on the list! 🎉",
        html: `
          <h1>Welcome to Vibe, ${name}! 🎉</h1>
          <p>You're officially on the waitlist at position <strong>#${position}</strong>!</p>
          <p>Your referral code: <strong>${referralCode}</strong></p>
          <p>We'll be in touch soon!</p>
        `,
      });

      console.log("✅ User email sent successfully:", userEmailResult);

      console.log("📤 Attempting to send admin notification...");

      const adminEmailResult = await resend.emails.send({
        from: "Vibe Waitlist <hello@vibe.famehubhq.site>",
        to: "popoolapaultemitope1@gmail.com", // ← CHANGE THIS to your actual email
        subject: `New Waitlist Signup #${position}: ${name}`,
        html: `
          <h2>New Signup!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Instagram:</strong> ${instagram || "N/A"}</p>
          <p><strong>Position:</strong> #${position}</p>
        `,
      });

      console.log("✅ Admin email sent successfully:", adminEmailResult);
    } catch (emailError) {
      console.error("❌❌❌ EMAIL ERROR:", emailError);
      console.error("❌ Error details:", JSON.stringify(emailError, null, 2));
      // DON'T fail the request - user is still added to waitlist
    }

    console.log("🎉 Process completed successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined waitlist",
        position,
        referralCode,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌❌❌ CRITICAL ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
