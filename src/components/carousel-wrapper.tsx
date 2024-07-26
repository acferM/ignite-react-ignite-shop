'use client'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { PropsWithChildren } from 'react'

export function CarouselWrapper({ children }: PropsWithChildren) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <main 
      ref={sliderRef} 
      className="keen-slider ml-auto flex min-h-[616px] w-full max-w-carousel"
    >
      {children}
    </main>
  )
}