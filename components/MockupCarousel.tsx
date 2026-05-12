"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Maximize2 } from "lucide-react";

interface MockupCarouselProps {
  images: string[];
}

export default function MockupCarousel({ images }: MockupCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isLightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [images, isLightboxOpen]);

  const toggleLightbox = useCallback(() => {
    setIsLightboxOpen((prev) => !prev);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div 
        className="relative w-full h-full overflow-hidden rounded-2xl cursor-zoom-in group"
        onClick={toggleLightbox}
      >
        {/* Maximize Icon Hint */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md p-2 rounded-full text-white pointer-events-none">
          <Maximize2 size={18} />
        </div>

        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Mockup ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={toggleLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            title="Close lightbox"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4">
            <img 
              src={images[currentIndex]} 
              alt="Project Mockup Fullscreen" 
              className="object-contain w-full h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm font-mono tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
