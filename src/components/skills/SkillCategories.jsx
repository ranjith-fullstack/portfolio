import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SkillCategory from './SkillCategory';

const SkillCategories = ({ inView }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
        >
          <SkillCategory category={category} />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillCategories;