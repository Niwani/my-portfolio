import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, githubLink, liveLink, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={githubLink} className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-500 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={liveLink} className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-500 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={16} className="text-blue-500" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;