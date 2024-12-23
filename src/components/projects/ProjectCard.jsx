import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-astra hover:shadow-lg transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-secondary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-textSecondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-tertiary text-secondary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-end space-x-4 pt-2 border-t border-tertiary">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-textSecondary hover:text-secondary transition-colors duration-300"
          >
            <FiGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-textSecondary hover:text-secondary transition-colors duration-300"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;