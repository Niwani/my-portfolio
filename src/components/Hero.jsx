import { ArrowRight, Code2, Download, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[url('https://play.tailwindcss.com/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Code2 size={14} />
              <span>Frontend Engineer</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
              Building for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Modern Web.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Specializing in high-performance React applications. I bridge the gap between complex backend logic and pixel-perfect frontend design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-blue-600  rounded-xl font-bold transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </motion.div>

          {/* 4. Tech Stack Showcase */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-6">Powered By</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* These are placeholders for your tech icons */}
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">React</span>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">Vite</span>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">Tailwind</span>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">Framer</span>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">Vercel</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
}