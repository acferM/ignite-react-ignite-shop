import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  id: string
  name: string
  price: string
  imageUrl: string
}

export function Product({ id, imageUrl, name, price }: ProductProps) {
  return (
    <Link
      href={`/product/${id}`} 
      className="keen-slider__slide group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-product p-1"
    >
      <Image 
        src={imageUrl} 
        alt="acferm" 
        width={520} 
        height={480} 
        className="object-cover" 
      />
  
      <footer 
        className="absolute inset-x-1 bottom-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
      >
        <strong className="text-lg">{name}</strong>
        <span className="w-32 text-right text-xl font-bold text-green-300">{price}</span>
      </footer>
    </Link>
  )
}