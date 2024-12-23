import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutHeader from './about/AboutHeader';
import AboutStats from './about/AboutStats';
import AboutContent from './about/AboutContent';
import BackgroundAnimation from './shared/BackgroundAnimation';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary to-tertiary relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto relative"
        >
          <AboutHeader inView={inView} />
          <AboutStats inView={inView} />
          <AboutContent inView={inView} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;