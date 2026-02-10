import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { name, email, message } = await readBody(event)

  // Validate required fields
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required.',
    })
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.',
    })
  }

  const resend = new Resend(config.resendApiKey)

  try {
    await resend.emails.send({
      from: `Navy Octopus Website <${config.resendFromEmail}>`,
      to: ['info@navyoctopus.ie'],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from the Navy Octopus website contact form.</p>
      `,
    })

    return { success: true }
  } catch (error: any) {
    console.error('Failed to send email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message. Please try again later.',
    })
  }
})

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
