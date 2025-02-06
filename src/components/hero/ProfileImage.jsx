import { motion } from 'framer-motion';
import Img from "../images/img.jpg"

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-64 h-64 mx-auto mb-8 md:mb-0"
    >
   <div className="flex items-center justify-center w-80 h-80">
    <div className="relative mx-auto w-80 h-80">
  {/* Decorative circles */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-20 blur-lg" />
  <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" />
  
  {/* Image container */}
  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
    <img
      src={Img} // Replace with your image path
      alt="Profile"
      className="w-full h-full object-cover"
    />
    
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
  </div>
</div>
</div>
      {/* Floating elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        👨‍💻
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        🚀
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;