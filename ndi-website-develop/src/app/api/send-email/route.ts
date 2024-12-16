import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string)
/* eslint-disable import/prefer-default-export */
export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, eventName } = await request.json()
    if (!email || !firstName || !lastName || !eventName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    const msg = {
      to: email,
      from: 'eventssignup@bhutanndi.com',
      subject: `Registration Confirmation for ${eventName}`,
      text: `Thank you for signing up for our event! We are excited to have you join us and will share more details
soon. Follow our socials to stay tuned!`,
      html: `<p>Thank you for signing up for our event! We are excited to have you join us and will share more details
soon. Follow our socials to stay tuned!</p>`
    }
    await sgMail.send(msg)

    const response = NextResponse.json({ message: 'Email sent successfully' })
    // eslint-disable-next-line no-console
    console.log('response from sendgrid', response)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error sending email:', error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}
