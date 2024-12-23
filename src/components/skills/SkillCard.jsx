import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Glowing background effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300" />
      
      {/* Card content */}
      <div className="relative bg-white p-6 rounded-lg shadow-astra">
        {/* Icon with floating animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl mb-4 text-secondary"
        >
          {skill.icon}
        </motion.div>

        {/* Category title */}
        <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors duration-300">
          {skill.category}
        </h3>

        {/* Skills list with staggered animation */}
        <ul className="space-y-2">
          {skill.technologies.map((tech, index) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-textSecondary group-hover:text-textPrimary transition-colors duration-300"
            >
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 group-hover:bg-accent transition-colors duration-300" />
              {tech}
            </motion.li>
          ))}
        </ul>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary rounded-b-lg overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-secondary to-accent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;