import { getProducts } from "@/actions/get-products";
import { CarouselWrapper } from "@/components/carousel-wrapper";
import { Product } from "@/components/product";

export const revalidate = 60 * 60 * 2 // 2 hours

export default async function Home() {
  const products = await getProducts()

  return (
    <CarouselWrapper>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </CarouselWrapper>
  );
}
