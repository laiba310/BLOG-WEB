"use client"
import React from "react";

import { productData } from "../app/api/recipes/page";
import Card from '@/app/api/recipes/card';
import Header from "./components/header";  // Capitalize 'header' to 'Header'
import NavItems from "./components/navitems";
import Footer from "./components/footer";
import HeroSection from "./components/hero-sec";
import SearchBar from "./components/searchbar";

export default function Home() {
  return (
    <main>
      <Header />  {/* Use the corrected component name here */}
<HeroSection />
<SearchBar />
      <div>
        <div className=" grid w-full max-w-[1300px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 p-6 mx-auto transform group-hover:scale-105 transition duration-200  ">
          {productData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              slug={item.slug}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
