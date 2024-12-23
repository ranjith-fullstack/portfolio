import { motion } from "framer-motion";

const ProjectTags = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {tags.map((tag, index) => (
        <motion.button
          key={tag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelectTag(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTag === tag
              ? "bg-secondary text-white shadow-md"
              : "bg-tertiary text-textSecondary hover:bg-secondary/10"
          }`}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectTags;
