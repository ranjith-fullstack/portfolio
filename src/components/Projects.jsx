import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './projects/ProjectCard';
import ProjectTags from './projects/ProjectTags';
import { useState } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTag, setSelectedTag] = useState('all');

  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedTag));

  const allTags = ['all', ...new Set(projects.flatMap(p => p.technologies))];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary to-tertiary relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-textPrimary"
            >
              Featured <span className="text-secondary">Projects</span>
            </motion.h2>
          </div>

          <ProjectTags 
            tags={allTags} 
            selectedTag={selectedTag} 
            onSelectTag={setSelectedTag} 
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;