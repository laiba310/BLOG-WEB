'use client';
import { useEffect, useState } from 'react';

const texts = ["Discover Delicious Recipes", "Explore Tasty Dishes", "Cook with Joy!"];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = 2000;

    const handleTyping = () => {
      const fullText = texts[textIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="relative bg-gray-400 py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight font-heartbeat">
            <span>{currentText}</span>
            <span className="blinking-cursor">|</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
  Explore hundreds of mouth-watering recipes that are easy to follow
  and perfect for every occasion. Let&apos;s make cooking fun and exciting!
</p>
          <div className="mt-8 animate-pulse">
            <a
              href="#recipes"
              className="inline-block px-8 py-4 text-white bg-black hover:bg-gray-600 rounded-full shadow-lg font-medium text-lg transition duration-300"
            >
              Browse Recipes
            </a>
          </div>
        </div>
  
        {/* Hero Image */}
        <div className="flex-1">
          <div className="relative group animate-zoomIn">
            <img
              src="/hero.jpg"
              alt="Delicious food"
              className="rounded-lg shadow-xl w-full lg:w-[700px] lg:h-[400px] transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-50 transition duration-500 rounded-lg"></div>
          </div>
        </div>
      </div>
  
      {/* Background Blur Elements */}
      <div className="absolute top-10 left-[-80px] w-60 h-60 bg-blue-400 rounded-full filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-[-80px] right-[-100px] w-96 h-96 bg-green-300 rounded-full filter blur-xl opacity-20 animate-float"></div>
    </section>
  );
  

}
