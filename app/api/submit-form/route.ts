// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || ''); // Log if empty

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, message, serviceSlug, formId } = data;

    // Debug logs
    console.log('Env RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Loaded' : 'MISSING - Check .env');
    console.log('Env TO_EMAIL:', process.env.TO_EMAIL || 'MISSING');
    console.log('Form data:', { name, email, phone, message, serviceSlug, formId });

    // Resend Email
    const sendResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.TO_EMAIL || "aligoodigital@gmail.com",
      replyTo: email,
      subject: `New ${serviceSlug || 'Contact'} Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        <p><strong>Service:</strong> ${serviceSlug || 'General'}</p>
        <p><strong>Form ID:</strong> ${formId}</p>
      `,
    });

    console.log('Resend full response:', JSON.stringify(sendResult, null, 2));
    if (sendResult.error) {
      throw new Error(`Resend error: ${sendResult.error.message}`);
    }

    // Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `🆕 New Inquiry!\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n💬 Message: ${message}\n🔗 Service: ${serviceSlug || 'General'}\n📊 Form ID: ${formId}`,
      }),
    });

    console.log('Telegram response:', telegramResponse.status, await telegramResponse.text());
    if (!telegramResponse.ok) {
      throw new Error(`Telegram error: ${telegramResponse.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Full error:', error);
    return NextResponse.json({ error: 'Submission failed—please try again.' }, { status: 500 });
  }
}