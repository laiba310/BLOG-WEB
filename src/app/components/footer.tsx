import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white py-8 border-t">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section: Cookbook Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Pinch of Yum Cookbook</h2>
            <p className="text-lg mb-4">
              The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we’ll send it right over!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
         
          </div>
        </div>

        {/* Bottom Section: Links & Signup */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Pinch of Yum Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pinch of Yum</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-500">About</a></li>
              <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-500">Recipe Index</a></li>
              <li><a href="#" className="hover:text-yellow-500">Blogging Resources</a></li>
              <li><a href="#" className="hover:text-yellow-500">Income Reports</a></li>
              <li><a href="#" className="hover:text-yellow-500">Sponsored Content</a></li>
              <li><a href="#" className="hover:text-yellow-500">Media Mentions</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Food & Recipes Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Food & Recipes</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-500">Sugar Free January</a></li>
              <li><a href="#" className="hover:text-yellow-500">Freezer Meals 101</a></li>
              <li><a href="#" className="hover:text-yellow-500">Quick and Easy Recipes</a></li>
              <li><a href="#" className="hover:text-yellow-500">Instant Pot Recipes</a></li>
              <li><a href="#" className="hover:text-yellow-500">Pasta Recipes</a></li>
              <li><a href="#" className="hover:text-yellow-500">Vegan Recipes</a></li>
              <li><a href="#" className="hover:text-yellow-500">Soup Recipes</a></li>
              <li><a href="#" className="hover:text-yellow-500">Taco Recipes</a></li>
              <li><a href="#" className="hover:text-yellow-500">Meal Prep Recipes</a></li>
            </ul>
          </div>

          {/* Signup Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sign up for Email Updates</h3>
            <form className= "gap-4">
              <input type="text" className="px-3  mb-3 py-2 rounded-l-full border-black text-gray-800" placeholder="First Name" />
              <input type="email" className="px-3  mb-3 py-2 rounded-l-full border-black text-gray-800" placeholder="Email" />
              <div>
              <button type="submit" className="px-6 py-2 bg-yellow-500 text-white rounded-r-full hover:bg-yellow-600">GO</button>
              </div>  </form>
          </div>
        </div>

        {/* Bottom Section: Brands */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
          <Link href="/">
 <h1 className='text-6xl font-bold text-white '>Noodle Doodle</h1>
 </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
