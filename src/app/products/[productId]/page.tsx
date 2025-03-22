import { ProductPage } from "@/pages/product-page";
import { TProduct } from "@/entities/products";

export default async function Product({ params }: { params: { productId: TProduct["id"] } }) {
  const { productId } = await params;

  return <ProductPage productId={productId} />;
}
