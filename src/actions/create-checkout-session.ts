'use server'

import { stripe } from "@/lib/stripe"

type createCheckoutSessionParams = {
  priceId: string
}

export async function createCheckoutSession({ priceId }: createCheckoutSessionParams) {
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: process.env.NEXT_URL + '/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: process.env.NEXT_URL,
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
  })

  return checkoutSession.url!
}