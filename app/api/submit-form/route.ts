// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, message, serviceSlug, formId } = data;

    // Log incoming data for debugging
    console.log("Form data received:", { name, email, serviceSlug, formId });

    // Resend Email with fallback "from" for testing
    const sendResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev", // Fallback to verified default
      to: process.env.TO_EMAIL || "aligoodigital@gmail.com",
      replyTo: email,
      subject: `New ${serviceSlug || 'Contact'} Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Service:</strong> ${serviceSlug || 'General'}</p>
        <p><strong>Form ID:</strong> ${formId}</p>
      `,
    });

    console.log("Resend response:", sendResult); // Log success/error details

    // Telegram Notification (already working)
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `🆕 New Inquiry!\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n💬 Message: ${message}\n🔗 Service: ${serviceSlug || 'General'}\n📊 Form ID: ${formId}`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Full error details:", error); // Log full error for debugging
    return NextResponse.json({ error: "Submission failed—please try again." }, { status: 500 });
  }
}