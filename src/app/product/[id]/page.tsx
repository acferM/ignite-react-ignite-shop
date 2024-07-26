import { getProductDetails } from "@/actions/get-product-details"
import { CheckoutButton } from "@/components/checkout-button"
import { Metadata } from "next"
import Image from "next/image"

type ProductProps = {
  params: {
    id: string
  }
}

export const revalidate = 60 * 60 * 1 // 1 hour

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const product = await getProductDetails({ productId: params.id })

  return {
    title: `${product.name} | Ignite Shop `,
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await getProductDetails({ productId: params.id })

  return (
    <main className="mx-auto grid max-w-[1180px] grid-cols-2 items-stretch gap-16">
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-product p-1">
        <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
      </div>

      <aside className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-2xl text-green-300">
          {product.price}
        </span>

        <p className="mt-10 text-md text-gray-300">{product.description}</p>

        <CheckoutButton priceId={product.priceId} />
      </aside>
    </main>
  )
}