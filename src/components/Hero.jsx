import { ArrowRight, Code2, Download } from 'lucide-react';
import { motion } from 'framer-motion';

import HeroImage from '../assets/hero-bg.png';

export default function Hero() {
    return (
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 2. Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 3. The "Pro" Overlay: Darkens the image so text pops */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Code2 size={14} />
              <span>Frontend Engineer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-6">
              Building for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Modern Web.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Specializing in high-performance React applications. I bridge the gap between complex backend logic and pixel-perfect frontend design.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-bold transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
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