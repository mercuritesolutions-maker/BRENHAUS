import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, pickupTime, items, total } = request.body;

  if (!name || !items || items.length === 0) {
    return response.status(400).json({ error: 'Missing order details' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Knoah Mari Orders <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL_RECEIVER || 'le.advena08@gmail.com'],
      subject: `☕ New Online Order from ${name}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Pickup Time:</strong> ${pickupTime || 'Not specified'}</p>
        <hr />
        <h3>Order Items:</h3>
        <ul>
          ${items.map((item: any) => `<li>${item.qty}x ${item.name} - ₱${item.price * item.qty}</li>`).join('')}
        </ul>
        <hr />
        <p><strong>Total Amount:</strong> ₱${total}</p>
      `,
    });

    return response.status(200).json(data);
  } catch (error) {
    console.error('Order email error:', error);
    return response.status(500).json({ error: 'Failed to process order' });
  }
}
