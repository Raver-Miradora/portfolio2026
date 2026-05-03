import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronLeft, 
  Ellipsis, 
  MoveRight, 
  Sparkle, 
  Moon, 
  Sun,
  Layout,
  Smartphone,
  Database,
  Code2
} from 'lucide-react'

const glassProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
}

const ProjectCard = ({ title, description, image, tags, link, stats }) => (
  <motion.div 
    {...glassProps}
    className="group relative flex flex-col md:flex-row gap-8 items-center bg-liquid-glass p-6 rounded-3xl"
  >
    <div className="relative w-full md:w-3/5 aspect-video overflow-hidden rounded-2xl">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <a href={link} className="btn-glass bg-white text-black font-bold">
          Visit Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
    
    <div className="flex-1 space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold tracking-tighter">{title}</h3>
        <a href={link} className="opacity-50 hover:opacity-100 transition-opacity">
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      
      <div className="space-y-2">
        {stats?.map((stat, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-zinc-500">
            <Sparkle size={10} className="text-indigo-400" />
            <span>{stat}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-2">
        {tags?.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/5 bg-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Header */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'mt-0' : 'mt-4'}`}>
        <nav className="max-w-4xl mx-auto flex justify-between items-center bg-liquid-glass/80 backdrop-blur-xl px-4 py-2 rounded-full border-white/5">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <h1 className="font-bold tracking-tighter text-lg">raver.dev</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <Ellipsis size={20} />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-8 pt-32 pb-20 space-y-32">
        {/* Hero / About Section */}
        <section className="flex flex-col gap-4 font-mono" aria-label="About Section">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold tracking-tighter text-2xl"
          >
            raver
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 text-pretty leading-relaxed"
          >
            <p>
              <b className="text-gradient">Hey, Raver here.</b> If you’re even reading this, we’re basically friends already XD. Oh—wait, I forgot to introduce myself...
            </p>
            <p>
              I’m a <u>full-stack web developer specializing in React, Next.js, and Flutter.</u> I build applications like <u>IEMS</u> and <u>TindaTrack</u> that simplify workflows, improve efficiency, and help users get things done faster. My background in technical development gives me an eye for precision and attention to detail.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 flex-wrap items-center pt-4"
          >
            <a className="opacity-50 hover:opacity-100 transition-opacity" target="_blank" aria-label="Github" href="#">
              <Github size={18} />
            </a>
            <a className="opacity-50 hover:opacity-100 transition-opacity" target="_blank" aria-label="LinkedIn" href="#">
              <Linkedin size={18} />
            </a>
            <a className="opacity-50 hover:opacity-100 transition-opacity" href="mailto:hello@raver.dev">
              <Mail size={18} />
            </a>

            <div className="flex gap-6 items-center md:ml-auto">
              <div className="flex gap-2 items-center cursor-pointer hover:opacity-100 opacity-50">
                <Sparkle size={14} className="animate-bounce" />
                <p className="text-sm underline font-mono">meow</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer hover:opacity-100 opacity-50">
                <Moon size={14} />
                <p className="text-sm underline font-mono">theme</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Case Study */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Case Study</span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div 
              {...glassProps}
              className="flex-1 relative aspect-[4/3] w-full rounded-3xl overflow-hidden group"
            >
              <img 
                src="/Mockups/PRISM-1.png" 
                alt="PRISM" 
                className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
            </motion.div>
            
            <div className="flex-1 space-y-6">
              <h3 className="text-4xl font-bold tracking-tighter">PRISM: Revolutionizing Internship Tracking</h3>
              <p className="text-zinc-400 leading-relaxed">
                A specialized mobile application designed to streamline the internship journey. 
                Featuring real-time location tracking, biometric attendance, and automated progress reports.
              </p>
              <button className="btn-glass pr-6 py-3 group">
                View Case Study 
                <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Selected Works</span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>

          <div className="grid gap-16">
            <ProjectCard 
              title="IEMS Dashboard"
              description="Integrated Employee Management System for LGU Lagonoy. Centralizing attendance, payroll, and record management with high precision."
              image="/Mockups/IEMS-1.png"
              tags={["React", "Node.js", "PostgreSQL"]}
              stats={["Serving 500+ employees", "99.9% Attendance accuracy", "Automated Payroll generation"]}
              link="#"
            />
            
            <ProjectCard 
              title="TindaTrack POS"
              description="A robust Sari-Sari store inventory and Point of Sale system. Designed for local entrepreneurs to track sales and stock in real-time."
              image="/Mockups/TINDATRACK-1.png"
              tags={["Flutter", "Firebase", "Dart"]}
              stats={["Inventory management", "Real-time sales analytics", "Offline mode support"]}
              link="#"
            />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Technologies</span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Frontend", icon: <Layout />, items: ["React", "Next.js", "Tailwind"] },
              { name: "Mobile", icon: <Smartphone />, items: ["Flutter", "React Native"] },
              { name: "Backend", icon: <Database />, items: ["Node.js", "PostgreSQL", "Firebase"] },
              { name: "Languages", icon: <Code2 />, items: ["TypeScript", "Dart", "Python"] },
            ].map((stack) => (
              <div key={stack.name} className="bg-liquid-glass p-6 rounded-2xl space-y-4 hover:border-white/20 transition-colors">
                <div className="p-3 bg-white/5 w-fit rounded-xl text-indigo-400">
                  {stack.icon}
                </div>
                <h4 className="font-bold tracking-tight">{stack.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="text-[10px] text-zinc-500">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 flex justify-between items-center text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
          <p>© 2026 Raver Miradora</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </footer>
      </main>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>
    </div>
  )
}
