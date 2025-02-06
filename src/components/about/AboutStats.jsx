import { motion } from 'framer-motion';
import StatCard from './StatCard';

const stats = [
  { number: '5', label: 'Projects Completed' },
  { number: '3', label: 'Happy Clients' },
  { number: '2', label: 'Years Experience' },
  { number: '10', label: 'Technologies' }
];

const AboutStats = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          number={stat.number}
          label={stat.label}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
};

export default AboutStats;