import { motion } from 'framer-motion';

const FeatureCard = ({ icon, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-astra hover:shadow-lg transition-all duration-300"
    >
      <span className="text-2xl text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-sm text-textSecondary group-hover:text-secondary transition-colors duration-300">
        {label}
      </span>
    </motion.div>
  );
};

export default FeatureCard;