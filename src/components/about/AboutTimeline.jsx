import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2025',
    title: 'Senior MERN Stack Developer', 
    company: 'YataYati info solutions Pvt Ltd',
    description: 'Built scalable web applications using MERN stack' 
  },
  {
    year: '2021',
    title: 'Frontend Developer Intern',
    company: 'Azacus',
    description: 'Developed E-commerce responsive user interfaces'
  }
];

const AboutTimeline = () => {
  return (
    <div className="space-y-6">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-secondary/20"
        >
          <div className="absolute left-0 top-0 w-2 h-2 bg-secondary rounded-full -translate-x-[3px]" />
          <span className="text-secondary font-medium">{item.year}</span>
          <h3 className="text-lg font-semibold text-textPrimary mt-1">{item.title}</h3>
          <p className="text-sm text-textSecondary">{item.company}</p>
          <p className="text-sm text-textSecondary mt-1">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
export default AboutTimeline;