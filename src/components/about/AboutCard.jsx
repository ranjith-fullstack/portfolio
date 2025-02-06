import { motion } from 'framer-motion';

const AboutCard = ({ children, className = '' }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-25"></div>
      <div className={`relative bg-white p-6 rounded-lg shadow-astra ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default AboutCard;