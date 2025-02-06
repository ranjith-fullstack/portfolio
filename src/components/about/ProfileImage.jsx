import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://stock.adobe.com/in/images/handsome-smiling-business-man-in-blue-shirt-isolated-on-gray-background/243123463"
          alt="Profile"
          className="w-full transform group-hover:scale-[1.02] transition duration-300"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
          whileHover={{ opacity: 1 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-sm text-textSecondary">Full Stack Developer</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;