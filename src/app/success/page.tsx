import { getCheckoutSession } from "@/actions/get-checkout-session";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type SuccessProps = {
  searchParams: {
    session_id: string
  }
}

export const metadata: Metadata = {
  title: 'Compra efetuada! | Ignite Shop',
  robots: {
    index: false
  }
}

export default async function Success({ searchParams }: SuccessProps) {
  if (!searchParams.session_id) {
    return redirect('/')
  }

  const checkout = await getCheckoutSession({ sessionId: searchParams.session_id })

  return (
    <main className="mx-auto flex h-[656px] flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-100">Compra efetuada!</h1>

      <div className="mt-16 flex h-36 w-full max-w-[130px] items-center justify-center rounded-lg bg-product object-cover p-1">
        <Image src={checkout.image} alt={checkout.product} width={120} height={110} />
      </div>

      <p className="mt-8 max-w-[560px] text-center text-xl text-gray-300">
        Uhuul <strong>{checkout.customer}</strong>, sua <strong>{checkout.product}</strong> já está a caminho da sua casa.
      </p>

      <Link 
        href="/" 
        className="mt-20 block text-lg font-bold text-green-500 transition-colors hover:text-green-300"
      >
        Voltar ao catálogo
      </Link>
    </main>
  )
}