import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("resend");
const fromEmail = "http://localhost:3000/";

export async function POST(req) {
  const body = await req.json();
  const { email, subject, message } = body;

  console.log('Attempting to send email to:', email);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["raiteb.ahlam@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 });
  }
}

