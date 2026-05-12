"use client";

import { Github, Linkedin, Mail, Cat, Moon, Sun } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const MEOW_MESSAGES = [
  "Mew. Try harder, hooman.",
  "Miiiiaao~ I require attention.",
  "Mrrrreeeow! The zoomies have begun!",
  "Mao. I will allow it.",
  "Mee-yow~ I accept your presence.",
  "Mewww... pet me, now",
  "Mee-yow! You call that effort?",
  "M'row! I am your ruler.",
  "Prrrrt! Bow before me.",
  "Prrt. You may proceed... for now.",
  "Mewp. I *saw* what you did.",
  "Hiss! Fix your mistakes.",
  "Mewp! That scared me!",
  "Mrrrow! My standards are higher than this.",
  "Mowww! There is no escape."
];

export default function ActionBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMeow = () => {
    const randomMessage = MEOW_MESSAGES[Math.floor(Math.random() * MEOW_MESSAGES.length)];
    toast(randomMessage, {
      icon: <Cat size={16} className="text-black dark:text-white" />
    });
    
    try {
      const audio = new Audio("/meow.mp3");
      audio.play().catch(() => {
        // Fallback or silent fail if audio missing
      });
    } catch (error) {
      console.error("Failed to play meow audio:", error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="flex justify-between items-center w-full text-[13px] text-zinc-500 dark:text-gray-400 font-mono">
      {/* Left side: Social Icons */}
      <div className="flex gap-5">
        <a 
          href="https://github.com/Raver-Miradora" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          title="GitHub Profile"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://www.linkedin.com/in/raver-miradora-992529277/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          title="LinkedIn Profile"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href="mailto:ravemiradora@gmail.com" 
          className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          title="Email Me"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Right side: Interactive Buttons */}
      <div className="flex gap-8 items-center">
        <button 
          onClick={handleMeow}
          className="flex gap-2 items-center hover:text-black dark:hover:text-white transition-colors cursor-pointer group"
        >
          <Cat size={16} className="group-hover:animate-bounce" />
          <span className="underline decoration-zinc-300 dark:decoration-gray-600 underline-offset-4">meow</span>
        </button>

        <button 
          onClick={toggleTheme}
          className="flex gap-2 items-center hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          <span className="underline decoration-zinc-300 dark:decoration-gray-600 underline-offset-4">theme</span>
        </button>
      </div>
    </div>
  );
}
