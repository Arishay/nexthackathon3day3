//////////////////////////////////////////////////////////////////////

// import { notFound } from "next/navigation";
// import ClientProductPage from "./ClientProductPage";

// interface Product {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
//   price: string;
// }

// const products: Product[] = [
//   { id: "1", image: "/Image (1).png", title: "Nike Air Force", price: "₹6,995", description: "Classic sneakers for everyday wear." },
//   { id: "2", image: "/Image (10).png", title: "Nike Pegasus Trail", price: "₹9,995", description: "Trail running shoes with comfort." },
//   { id: "3", image: "/Rectangle (3).png", title: "Nike Yoga Wear", price: "₹4,995", description: "Perfect yoga wear for workouts." },
//   { id: "4", image: "/Rectangle (4).png", title: "Nike Zoom Indestruct", price: "₹8,995", description: "High-performance running shoes." },
//   { id: "5", image: "/Rectangle (5).png", title: "Nike Metcon", price: "₹10,995", description: "Comfortable training wear." },
//   { id: "6", image: "/Rectangle (6).png", title: "Nike Yoga Wear", price: "₹4,995", description: "Perfect yoga wear for workouts." },
// ];

// export async function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id,
//   }));
// }

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const product = products.find((p) => p.id === params.id);

//   if (!product) {
//     notFound();
//   }

//   return <ClientProductPage product={product} />;
// }




// import { notFound } from "next/navigation";
// import ClientProductPage from "./ClientProductPage";
// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// // Configure Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: true,
//   apiVersion: "2021-08-31",
// });

// // Configure image URL builder
// const builder = imageUrlBuilder(client);
// function urlFor(source: any) {
//   return builder.image(source);
// }

// // Fetch product data dynamically
// export async function generateStaticParams() {
//   const products = await client.fetch('*[_type == "product"]{_id}');
//   return products.map((product: { _id: string }) => ({
//     id: product._id,
//   }));
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await client.fetch(
//     '*[_type == "product" && _id == $id][0]',
//     { id: params.id }
//   );

//   if (!product) {
//     notFound();
//   }

//   return (
//     <ClientProductPage
//       product={{
//         id: product._id,
//         image: urlFor(product.image.asset).url(),
//         title: product.productName,
//         description: product.description,
//         price: `₹${product.price}`,
//       }}
//     />
//   );
// }
































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
