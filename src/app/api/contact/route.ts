import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 3600000;
const MAX_EMAILS_PER_HOUR = 10;
const emailCounts = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    const now = Date.now();
    const userEmails = emailCounts.get(ip);
    if (userEmails) {
      if (now - userEmails.timestamp < RATE_LIMIT_WINDOW && userEmails.count >= MAX_EMAILS_PER_HOUR) {
        return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
      }
      if (now - userEmails.timestamp >= RATE_LIMIT_WINDOW) {
        emailCounts.set(ip, { count: 1, timestamp: now });
      } else {
        emailCounts.set(ip, { count: userEmails.count + 1, timestamp: userEmails.timestamp });
      }
    } else {
      emailCounts.set(ip, { count: 1, timestamp: now });
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (message.includes('http') || message.includes('www')) {
      return NextResponse.json({ error: 'Links not allowed in message' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Intuartha <onboarding@resend.dev>',
      to: ['paulbrowne2@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
} 