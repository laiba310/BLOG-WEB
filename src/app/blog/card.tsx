import Link from "next/link";
import React from "react";

// Interface for Card props
interface CardProps {
  description: string;
  image: string;
  title: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  slug,
  description,
}) => {
  return (
    <div className="border mb-9 rounded-lg bg-gray-100 group cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/product/${slug}`}>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-500 text-gray-700 rounded-lg shadow-sm font-medium text-base transition duration-200 ease-in-out">
          View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
