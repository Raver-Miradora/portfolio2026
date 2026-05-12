"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, MoreHorizontal } from "lucide-react";

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-[-10px] pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-8 px-2 py-2 rounded-full shadow-lg backdrop-blur-md bg-white/70 dark:bg-black/50 border border-gray-200/50 dark:border-white/10">
        {/* Left Action */}
        <button 
          onClick={scrollToTop}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-gray-200 group"
          title="Scroll to top"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Center Logo */}
        <span className="font-bold text-lg tracking-tight text-black dark:text-white font-sans">
          raver
        </span>

        {/* Right Action */}
        <button 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-gray-200"
          title="More options"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>
    </nav>
  );
}
