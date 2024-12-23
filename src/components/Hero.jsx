import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import ProfileImage from './hero/ProfileImage';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-tertiary via-primary to-tertiary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/5"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen max-w-6xl mx-auto py-20">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-textPrimary">
                Hi, I'm{' '}
                <span className="text-secondary relative">
                  S.Ranjith Kumar Reddy
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-textSecondary/80">
                MERN Stack Developer
              </h2>
            </motion.div>

            <motion.p {...fadeInUp} transition={{ delay: 0.6 }} className="text-lg text-textSecondary max-w-2xl">
              I'm a passionate MERN Stack Developer with a love for creating elegant solutions to complex problems.
              My journey in web development started with curiosity and has evolved into a professional pursuit of excellence.
            </motion.p>

            <motion.div {...fadeInUp} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="projects" smooth={true}>
                <button className="btn-primary flex items-center gap-2 group">
                  View My Work
                  <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
                </button>
              </Link>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: <FiGithub />, url: 'https://github.com/ranjith-fullstack' },
                  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ranjith-kumar-reddy-sirigireddy-5226851a5/' },
                    // { icon: <FiTwitter />, url: 'https://twitter.com' }
                ].map((social, index) => (
                  <motion.a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-textSecondary hover:text-secondary transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;