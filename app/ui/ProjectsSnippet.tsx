// ui/ProjectsSnippet.tsx
'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of Project One' },
  { id: 2, title: 'Project Two', description: 'Description of Project Two' },
  { id: 3, title: 'Project Three', description: 'Description of Project Three' },
  { id: 4, title: 'Project Four', description: 'Description of Project Four' },
];

const ProjectsSnippet = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map(project => (
          <motion.div 
            key={project.id} 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-6 text-center">
        <Link href="/projects" className="text-blue-500 hover:underline">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSnippet;
