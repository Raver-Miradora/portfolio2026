import ActionBar from "@/components/ActionBar";
import MockupCarousel from "@/components/MockupCarousel";
import { Sparkle, ArrowUpRight, FileText } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const ProjectSection = ({ title, description, images, stats, links, reverse = false }: any) => (
  <div className={`flex flex-col md:flex-row gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    {/* Image Container */}
    <div className="flex-[1.4] w-full relative group">
      <div className="aspect-[16/9] border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 transition-all shadow-lg dark:shadow-indigo-500/5 rounded-2xl">
        <MockupCarousel images={images} />
      </div>
    </div>
    
    {/* Text Content */}
    <div className="flex-1 space-y-6 text-left">
      <div className="space-y-1">
        <div className="flex items-center gap-2 group cursor-pointer w-fit">
          <h3 className="text-2xl font-bold tracking-tighter font-sans">{title}</h3>
          <ArrowUpRight size={20} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-base font-bold font-sans dark:text-white/90">{description}</p>
      </div>

      <div className="space-y-1.5">
        {stats?.map((stat: string, i: number) => (
          <div key={i} className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-mono">
            <span>{stat}</span>
            {i < stats.length - 1 && <Sparkle size={10} className="text-zinc-300 dark:text-zinc-700" />}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-6">
        {links?.visit && (
          <a 
            href={links.visit} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-medium transition-transform active:scale-95 bg-black text-white hover:bg-gray-800 dark:bg-[#f0f0f0] dark:text-[#111] dark:hover:bg-white"
          >
            visit
          </a>
        )}
        {links?.source && (
          <a 
            href={links.source} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-medium transition-all active:scale-95 shadow-sm bg-gradient-to-b from-white to-[#f0f0f0] border border-[#e5e5e5] text-[#111] hover:brightness-95 dark:bg-gradient-to-b dark:from-[#2a2a2a] dark:to-[#151515] dark:border dark:border-[#333] dark:text-[#ededed] dark:hover:brightness-110"
          >
            view source
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function Home() {
  const prismImages = [
    "/Mockups/PRISM-1.png",
    "/Mockups/PRISM-2.png",
    "/Mockups/PRISM-3.png",
    "/Mockups/PRISM-4.png",
    "/Mockups/PRISM-5.png",
  ];

  const iemsImages = [
    "/Mockups/IEMS-1.png",
    "/Mockups/IEMS-2.png",
    "/Mockups/IEMS-3.png",
    "/Mockups/IEMS-4.png",
    "/Mockups/IEMS-5.png",
  ];

  const tindaImages = [
    "/Mockups/TINDATRACK-1.png",
    "/Mockups/TINDATRACK-2.png",
    "/Mockups/TINDATRACK-3.png",
    "/Mockups/TINDATRACK-4.png",
    "/Mockups/TINDATRACK-5.png",
    "/Mockups/TINDATRACK-6.png",
  ];

  const githubTheme = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#ffffff", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-32">
      {/* Bio / About Section */}
      <section className="flex flex-col gap-6" aria-label="About Section">
        <h1 className="font-bold tracking-tighter text-4xl font-sans">raver</h1>

        <div className="flex flex-col gap-5 text-pretty leading-relaxed text-base font-mono opacity-90">
          <p>
            <span className="font-sans font-bold text-indigo-500 dark:text-indigo-400">Hey, Raver here.</span> If you’re even reading this, we’re basically friends already XD. Oh—wait, I forgot to introduce myself...
          </p>
          <p>
            I’m a <u className="decoration-zinc-500/50">full-stack web developer specializing in React, Next.js, and Flutter.</u> I build applications like <u className="decoration-indigo-500/50 text-indigo-400/80">IEMS</u> and <u className="decoration-purple-500/50 text-purple-400/80">TindaTrack</u> that simplify workflows, improve efficiency, and help users get things done faster. My background in technical development gives me an eye for precision and attention to detail.
          </p>
        </div>

        <ActionBar />
      </section>

      {/* Projects Section */}
      <section className="space-y-16">
        <h2 className="text-sm font-sans font-medium text-zinc-500 dark:text-zinc-500">Projects</h2>

        <div className="space-y-32">
          {/* PRISM */}
          <ProjectSection 
            title="PRISM"
            description="Revolutionizing Internship Tracking"
            images={prismImages}
            stats={["Real-time location tracking", "Biometric attendance", "Automated progress reports"]}
            links={{ visit: "https://prism-rave-dev.vercel.app/", source: "https://github.com/Raver-Miradora/prism" }}
            reverse={false}
          />

          {/* TindaTrack POS */}
          <ProjectSection 
            title="TindaTrack POS"
            description="Sari-Sari store inventory and Point of Sale"
            images={tindaImages}
            stats={["Inventory management", "Sales analytics", "Offline support"]}
            links={{ source: "https://github.com/Raver-Miradora/tindatrack" }}
            reverse={true}
          />

          {/* IEMS Dashboard */}
          <ProjectSection 
            title="IEMS Dashboard"
            description="Integrated Employee Management System"
            images={iemsImages}
            stats={["Centralized attendance", "Automated Payroll", "Record management"]}
            links={{ source: "https://github.com/Raver-Miradora/IEMS" }}
            reverse={false}
          />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="space-y-6 pt-12">
        <h2 className="text-sm font-sans font-medium text-zinc-500 dark:text-zinc-500">Technologies</h2>
        <div className="flex flex-wrap items-center gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {/* React */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM10.622 8.415l4.879 2.817a.88.88 0 010 1.536l-4.879 2.817a.88.88 0 01-1.32-.768V9.183a.88.88 0 011.32-.768z"/></svg>
          {/* Next.js */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.1-4.9l-6.8-9.4h-1.3v9.3h1.3v-7.3l5.5 7.6c.1.1.2.1.3.1.5 0 .9-.4.9-1v-4.4c.1-.1.1-.2.1-.3v.4h-1.3v5z"/></svg>
          {/* Tailwind */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
          {/* TypeScript */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-.818-.139c-.299-.03-.586-.045-.857-.045-.472 0-.839.067-1.101.201-.262.134-.44.322-.533.563-.093.241-.14.514-.14.818 0 .247.038.463.113.648s.182.346.32.484.306.271.503.399c.197.128.407.249.631.361.242.121.492.246.751.376.259.13.511.276.758.436.247.16.467.355.658.584.191.229.336.518.435.866.099.348.148.773.148 1.275 0 .54-.086 1.025-.259 1.455-.173.43-.429.791-.767 1.083-.338.292-.759.516-1.264.672-.505.156-1.089.234-1.753.234-.54 0-1.037-.044-1.492-.132a7.12 7.12 0 01-1.2-.337v-2.42c.426.225.852.394 1.278.506.426.112.877.168 1.354.168.488 0 .872-.079 1.154-.236.282-.157.473-.375.574-.652.101-.277.152-.593.152-.948 0-.312-.039-.58-.116-.804s-.184-.421-.321-.592-.303-.319-.498-.445-.405-.24-.63-.342c-.225-.102-.453-.207-.685-.316-.232-.109-.46-.232-.685-.369a3.593 3.593 0 01-.628-.484 3.031 3.031 0 01-.482-.663 2.801 2.801 0 01-.286-.9c-.066-.341-.099-.756-.099-1.245 0-.54.088-1.025.264-1.455a3.506 3.506 0 01.769-1.084c.337-.292.766-.516 1.285-.672.519-.156 1.139-.234 1.86-.234zm-8.832.171V21.75H7.282V12.379H4.156V9.921h8.505z"/></svg>
          {/* Git */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452a1.492 1.492 0 00-2.112 0l-2.047 2.047 3.174 3.174a1.5 1.5 0 11-2.112 2.112L6.797 4.612l-2.04 2.04a1.492 1.492 0 000 2.112l10.479 10.479a1.492 1.492 0 002.112 0l10.201-10.2a1.492 1.492 0 000-2.113zm-8.232 4.414a1.5 1.5 0 11-2.112-2.112 1.5 1.5 0 012.112 2.112z"/></svg>
          {/* PostgreSQL */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-12h2v4h-2v-4zm4 0h2v4h-2v-4z"/></svg>
          {/* Linux */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-sm font-sans font-medium text-zinc-500 dark:text-zinc-500">Education</h2>
        <div className="space-y-2">
          <h3 className="font-mono font-bold text-zinc-900 dark:text-white text-base">BS in Information Technology</h3>
          <p className="font-mono text-zinc-500 dark:text-zinc-400 text-sm">Partido State University</p>
          
          <a 
            href="/Miradora Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-8 w-fit text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all underline decoration-zinc-300 dark:decoration-zinc-800 underline-offset-4 group"
          >
            <FileText className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            view resume
          </a>
        </div>
      </section>

      {/* GitHub Calendar Section */}
      <section className="flex justify-center w-full mt-24 mb-16 overflow-x-auto">
        <div className="min-w-fit">
          <GitHubCalendar 
            username="Raver-Miradora" 
            theme={githubTheme}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </section>

      {/* Global Footer */}
      <footer className="w-full text-center pb-12 font-mono text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
        <p>© 2026. ravermiradora. All rights reserved.</p>
      </footer>
    </main>
  );
}
