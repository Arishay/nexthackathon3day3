import { notFound } from "next/navigation";
import ClientProductPage from "./ClientProductPage";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-08-31",
});

// Configure image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// Fetch product data dynamically
export async function generateStaticParams() {
  const products = await client.fetch('*[_type == "product"]{_id}');
  return products.map((product: { _id: string }) => ({
    id: product._id,
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await client.fetch(
    '*[_type == "product" && _id == $id][0]',
    { id: params.id }
  );

  if (!product) {
    notFound();
  }

  return (
    <ClientProductPage
      product={{
        id: product._id,
        image: urlFor(product.image.asset).url(),
        title: product.productName,
        description: product.description,
        price: `₹${product.price}`,
      }}
    />
  );
}
