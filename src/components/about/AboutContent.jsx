import { motion } from 'framer-motion';
import AboutCard from './AboutCard';
import FeatureCard from './FeatureCard';
import AboutTimeline from './AboutTimeline';
import SkillProgress from './SkillProgress';
import { FiCode, FiDatabase, FiLayers, FiGitBranch } from 'react-icons/fi';

const features = [
  { icon: <FiCode />, label: "Clean Code" },
  { icon: <FiDatabase />, label: "Scalable" },
  { icon: <FiLayers />, label: "Modern Stack" },
  { icon: <FiGitBranch />, label: "Best Practices" }
];

const AboutContent = ({ inView }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        <AboutCard>
          <p className="text-lg text-textSecondary leading-relaxed">
          I am a highly motivated Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I possess a strong foundation in JavaScript and a deep understanding of front-end and back-end development principles.
          </p>
        </AboutCard>

        <AboutCard className="bg-gradient-to-r from-secondary/5 to-accent/5">
          <h3 className="text-xl font-semibold text-secondary mb-4">Skills Progress</h3>
          <SkillProgress />
        </AboutCard>

        {/* <div className="grid grid-cols-2 gap-4">
          {features.map((item, index) => (
            <FeatureCard
              key={item.label}
              icon={item.icon}
              label={item.label}
              delay={index * 0.1}
            />
          ))}
        </div> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4 }}
      >
        <AboutCard className="h-full">
          <h3 className="text-xl font-semibold text-secondary mb-4">Experience Timeline</h3>
          <AboutTimeline />
        </AboutCard>
      </motion.div>
    </div>
  );
};

export default AboutContent;