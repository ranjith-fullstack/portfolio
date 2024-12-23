import { motion } from 'framer-motion';

const SkillsHeader = ({ inView }) => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="inline-block"
      >
        <h2 className="text-4xl font-bold text-textPrimary mb-4">
          Technical <span className="text-secondary">Skills</span>
        </h2>
        <div className="flex items-center justify-center gap-2">
          <motion.div
            className="h-1 w-12 bg-secondary rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 48 } : {}}
            transition={{ delay: 0.4 }}
          />
          <motion.div
            className="h-1 w-8 bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 32 } : {}}
            transition={{ delay: 0.5 }}
          />
          <motion.div
            className="h-1 w-4 bg-secondary rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 16 } : {}}
            transition={{ delay: 0.6 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsHeader;