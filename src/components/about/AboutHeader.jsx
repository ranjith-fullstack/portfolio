import { motion } from 'framer-motion';

const AboutHeader = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold">
        About <span className="text-secondary">Me</span>
      </h2>
      <motion.div 
        className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: 96 } : {}}
        transition={{ delay: 0.3 }}
      />
    </motion.div>
  );
}

export default AboutHeader;