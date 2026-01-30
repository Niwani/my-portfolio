import { ArrowRight, Code2, Download } from 'lucide-react';
import { motion } from 'framer-motion';

import HeroImage from '../assets/hero-bg.png';

export default function Hero() {
    return (
       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay: White/30% in Light Mode (for dark text), Dark/80% in Dark Mode (for white text) */}
        <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Code2 size={14} />
              <span>Frontend Engineer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
              Building for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Modern Web.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-medium">
              Specializing in high-performance React applications. I bridge the gap between complex backend logic and pixel-perfect frontend design.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-bold transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50 dark:bg-white/10 dark:backdrop-blur-md dark:text-white dark:border-white/20 dark:hover:bg-white/20 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    );
}