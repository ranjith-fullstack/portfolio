import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const SkillCategory = ({ category }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-astra">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl">{category.icon}</span>
        <h3 className="text-xl font-bold text-textPrimary">
          {category.category}
        </h3>
      </div>
      
      <div className="space-y-6">
        {category.technologies.map((tech, index) => (
          <SkillBar 
            key={tech} 
            skill={tech} 
            progress={95 - index * 5}
            delay={index * 0.1} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;