import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

type getProductDetailsParams = {
  productId: string
}

export async function getProductDetails({ productId }: getProductDetailsParams) {
  const data = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const stripePrice = data.default_price as Stripe.Price

  return {
    id: data.id,
    name: data.name,
    imageUrl: data.images[0],
    description: data.description,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(stripePrice.unit_amount! / 100),
    priceId: stripePrice.id
  }
}