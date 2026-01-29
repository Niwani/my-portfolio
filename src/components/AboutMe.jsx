import { User, GraduationCap, MapPin, Zap, Coffee, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from "../assets/profile.jpeg";

const AboutSection = () => {
  const coreValues = [
    { icon: <Zap size={20} />, title: "Fast Learner", desc: "Quickly picking up new frameworks & patterns." },
    { icon: <Search size={20} />, title: "Detail Oriented", desc: "Obsessed with clean code and pixel-perfect UI." },
    { icon: <Coffee size={20} />, title: "Problem Solver", desc: "Turning complex hurdles into elegant solutions." }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#020617] transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <img 
                src={profileImg} 
                alt="Your Name" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-2xl -z-10"></div>
          </motion.div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                I am a passionate **Junior Front-End Developer** based in Nigeria, dedicated to building accessible, user-centric web applications. My journey started with a curiosity for how things work on the internet, which quickly evolved into a deep-seated love for the **React** ecosystem.
              </p>
              <p>
                I thrive in environments where I can tackle fresh challenges and collaborate with teams to build scalable solutions. When I'm not debugging or tweaking **Tailwind** classes, I'm likely exploring new animation patterns in **Framer Motion** or documenting my learning journey on GitHub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <MapPin className="text-blue-600" size={18} />
                <span>Lagos, Nigeria (Remote / Hybrid)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <GraduationCap className="text-blue-600" size={18} />
                <span>Self-Taught / Junior Developer</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                >
                  <div className="text-blue-600 mb-2">{value.icon}</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{value.title}</h4>
                  <p className="text-sm text-slate-500">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;