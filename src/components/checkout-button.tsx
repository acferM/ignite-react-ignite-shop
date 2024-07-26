'use client'

import { createCheckoutSession } from "@/actions/create-checkout-session"
import { useState } from "react"

type CheckoutButtonProps = {
  priceId: string
}

const Loading = () => (
  <div className="mx-auto size-[27px] animate-spin rounded-full border-2 border-white border-t-white/50"/>
)

export function CheckoutButton({ priceId }: CheckoutButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleClick() {
    setIsCreatingCheckoutSession(true)

    const checkoutUrl = await createCheckoutSession({ priceId })

    setIsCreatingCheckoutSession(false)

    window.location.href = checkoutUrl
  }

  return (
    <button 
      className="mt-auto w-full cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-md font-bold text-white transition-colors hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-green-500"
      disabled={isCreatingCheckoutSession}
      onClick={handleClick}
    >
      {isCreatingCheckoutSession ? <Loading /> : 'Comprar agora'}
    </button>
  )
}