import { motion } from 'framer-motion';

const SkillBar = ({ skill, progress, delay }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-textSecondary">{skill}</span>
        <span className="text-sm font-medium text-secondary">{progress}%</span>
      </div>
      <div className="h-2 bg-tertiary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-secondary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;