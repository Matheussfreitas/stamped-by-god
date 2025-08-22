'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroCarousel() {
  // Imagens relacionadas ao surf e surfboards
  const images = [
    {
      url: '/imagem1.jpg',
      title: 'Stamped by God',
      subtitle: 'Pranchas criadas para dominar as ondas',
    },
    {
      url: '/imagem2.jpeg',
      title: 'Sua próxima onda te espera',
      subtitle: 'Maximize sua performance nas ondas',
    },
    {
      url: '/imagem3.jpg',
      title: 'Sinta a liberdade no mar',
      subtitle: 'Cada prancha é uma obra de arte única',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <Image
              src={image.url}
              alt={image.title}
              className="absolute inset-0 w-full h-full object-cover"
              fill
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span
                    className="block opacity-0 animate-fade-in-up text-[#D95032]"
                    style={{
                      animation:
                        currentSlide === index
                          ? 'fadeInUp 1s ease-out 0.3s forwards'
                          : 'none',
                    }}
                  >
                    {image.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 opacity-90">
                  <span
                    className="block opacity-0 text-[#D95032]"
                    style={{
                      animation:
                        currentSlide === index
                          ? 'fadeInUp 1s ease-out 0.6s forwards'
                          : 'none',
                    }}
                  >
                    {image.subtitle}
                  </span>
                </p>
                <div
                  className="opacity-0"
                  style={{
                    animation:
                      currentSlide === index
                        ? 'fadeInUp 1s ease-out 0.9s forwards'
                        : 'none',
                  }}
                >
                  <button className="bg-gradient-to-r from-[#D95032] to-[#F2BC57] hover:from-[#F2BC57] hover:to-[#D95032] text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                    Começar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 cursor-pointer"
      >
        <ChevronLeft size={24} className="text-black" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 cursor-pointer"
      >
        <ChevronRight size={24} className="text-black" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div
          className="h-full bg-gradient-to-l from-[#D95032] to-[#F2BC57] transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
