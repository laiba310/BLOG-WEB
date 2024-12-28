"use client"; // Mark this component as a Client Component
import { productData } from "@/app/api/recipes/page"; // Ensure the path is correct

import { useParams } from "next/navigation";
import Footer from "@/app/components/footer";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { slug } = useParams();
console.log("Slug: ", slug);  // Debugging slug value

const [product, setProduct] = useState<any>(null);

useEffect(() => {
  if (slug) {
    console.log("Slug is available: ", slug);  // Check if slug is available
    const fetchedProduct = productData.find((item) => item.slug === slug);
    console.log(fetchedProduct);  // Check fetched product
    setProduct(fetchedProduct);
  }
}, [slug]);

  if (!slug) {
    return <div>Loading...</div>; 
  }

  if (!product) {
    return <div>Product not found!</div>; 
  }
  console.log("Product: ", product); 
  return (
    <div className="max-w-8xl mx-auto p-6 bg-gray-300">
      <div className="mt-4 mb-3 animate-pulse">
        <a
          href="/"
          className="inline-block text-center justify-center px-8 py-4 text-white bg-gray-500 hover:bg-gray-600 rounded-full shadow-lg font-medium text-lg transition duration-300"
        >
          Go Back
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-[1000px] mx-auto h-full max-h-[800px] object-cover rounded-lg justify-center"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">Summary Of {product.title}</h1>
          <h1 className="text-3xl font-semibold mb-4">Instruction:</h1>
          <p className="text-gray-600 mb-4 flex-wrap gap-4">
            {product.ingredients.map((ingredient: string) => (
              <span key={ingredient} className="block">{ingredient}</span>
            ))}
          </p>

          <ol className="list-decimal">
            <h1 className="text-3xl font-semibold mb-4">Steps:</h1>
            {product.steps.map((step: string) => (
              <li key={step} className="text-gray-600 mb-4">{step}</li>
            ))}
          </ol>
          <h1 className="mb-[12rem]">Enjoy your {product.title}</h1>
        </div>
      </div>
    </div>

  );
   
};

export default ProductDetails;
