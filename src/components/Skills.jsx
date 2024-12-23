import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsHeader from './skills/SkillsHeader';
import SkillsGrid from './skills/SkillsGrid';
import SkillsBackground from './skills/SkillsBackground';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-tertiary to-primary relative overflow-hidden">
      <SkillsBackground />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SkillsHeader inView={inView} />
          <SkillsGrid inView={inView} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;