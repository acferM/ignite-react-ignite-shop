'use server'

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function getProducts() {
  const { data: products } = await stripe.products.list({
    expand: ['data.default_price']
  })

  
  return products.map(product => {
    const stripePrice = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        currency: 'brl',
        style: 'currency'
      }).format(stripePrice.unit_amount! / 100)
    }
  })
}