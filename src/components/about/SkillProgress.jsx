import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend Development', progress: 90 },
  { name: 'Backend Development', progress: 85 },
  { name: 'RESTful APIs', progress: 75 },
  { name: 'GIT', progress: 70 }
];

const SkillProgress = () => {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-textSecondary">{skill.name}</span>
            <span className="text-secondary font-medium">{skill.progress}%</span>
          </div>
          <div className="h-2 bg-tertiary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-secondary to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkillProgress;