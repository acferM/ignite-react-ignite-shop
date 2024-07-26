import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

type GetCheckoutSessionParams = {
  sessionId: string
}

export async function getCheckoutSession({ sessionId }: GetCheckoutSessionParams) {
  const checkoutSession  = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const { data: items } = checkoutSession.line_items as Stripe.ApiList<Stripe.LineItem>

  const { product } = items[0].price as Stripe.Price

  const { images, name } = product as Stripe.Product

  const { name: customer } = checkoutSession.customer_details as Stripe.Checkout.Session.CustomerDetails

  return {
    image: images[0],
    product: name,
    customer
  }
}