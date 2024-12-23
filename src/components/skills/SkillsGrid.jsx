import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skills } from '../../data/skills';

const SkillsGrid = ({ inView }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;