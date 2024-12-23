import { motion } from 'framer-motion';

const StatCard = ({ number, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center p-4"
    >
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.2, type: "spring" }}
        className="block text-3xl font-bold text-secondary mb-2"
      >
        {number}+
      </motion.span>
      <span className="text-sm text-textSecondary">{label}</span>
    </motion.div>
  );
};
export default StatCard;