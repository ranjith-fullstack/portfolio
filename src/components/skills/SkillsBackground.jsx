import { motion } from 'framer-motion';

const SkillsBackground = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(14,165,233,0.1),transparent)] pointer-events-none" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-secondary/5 rounded-full mix-blend-overlay"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SkillsBackground;