import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Prepare email data
    const msg = {
      to: 'MITCHDES51@gmail.com',
      from: 'MITCHDES51@gmail.com', // This MUST be the verified sender email in SendGrid
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `,
    };

    try {
      console.log('Attempting to send email...');
      const [response] = await sgMail.send(msg);
      console.log('SendGrid Response:', {
        statusCode: response.statusCode,
        headers: response.headers,
        body: response.body
      });
      
      if (response.statusCode === 202) {
        console.log('Email sent successfully!');
        return NextResponse.json({ 
          success: true,
          message: 'Email sent successfully',
          statusCode: response.statusCode 
        });
      } else {
        console.warn('Unexpected status code:', response.statusCode);
        return NextResponse.json(
          { error: 'Unexpected response from email service' },
          { status: response.statusCode }
        );
      }
    } catch (error: any) {
      console.error('SendGrid Error Details:', {
        message: error.message,
        response: error?.response?.body,
        code: error?.code
      });
      return NextResponse.json(
        { error: 'Failed to send email', details: error?.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request Error:', error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
} 