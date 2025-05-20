import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Zoho Mail configuration
// Store these in environment variables in production
// In Vercel, add these as environment variables in the project settings
const ZOHO_USER = process.env.ZOHO_USER; // Add as environment variable: info@veltron.in
const ZOHO_PASS = process.env.ZOHO_PASS; // Add your Zoho mail app password
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@veltron.in';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message || body.service === 'Select a service') {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the form submission (useful for debugging in Vercel logs)
    console.log('Form submission received:', {
      name: body.name,
      email: body.email,
      phone: body.phone || 'Not provided',
      company: body.company || 'Not provided',
      service: body.service,
      timestamp: new Date().toISOString(),
    });

    // For local development or when credentials are not available
    if (!ZOHO_USER || !ZOHO_PASS) {
      console.log('Zoho credentials not found. In production, set ZOHO_USER and ZOHO_PASS environment variables.');
      return NextResponse.json({ message: 'Form submitted successfully (email not sent in development mode)' });
    }
    
    // Configure nodemailer for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in', // Use smtp.zoho.com for international
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: ZOHO_USER,
        pass: ZOHO_PASS,
      },
    });
    
    // Email content
    const mailOptions = {
      from: ZOHO_USER,
      to: RECIPIENT_EMAIL,
      replyTo: body.email,
      subject: `New Website Inquiry: ${body.service}`,
      text: `
New contact form submission from the Veltron website:

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Company: ${body.company || 'Not provided'}
Service: ${body.service}
Message: ${body.message}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #128C7E; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Name:</td>
      <td style="padding: 8px 0;">${body.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #128C7E;">${body.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
      <td style="padding: 8px 0;">${body.phone || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Company:</td>
      <td style="padding: 8px 0;">${body.company || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Service:</td>
      <td style="padding: 8px 0;">${body.service}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
      <td style="padding: 8px 0;">${body.message.replace(/\n/g, '<br>')}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Submitted on:</td>
      <td style="padding: 8px 0;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
    </tr>
  </table>
  
  <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
    This is an automated message from the Veltron website contact form.
  </div>
</div>
`
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We'll still return success to the user, but log the error on the server
    }

    return NextResponse.json({ message: 'Thank you for your message. We will get back to you soon!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request. Please try again or contact us directly at info@veltron.in' },
      { status: 500 }
    );
  }
}
