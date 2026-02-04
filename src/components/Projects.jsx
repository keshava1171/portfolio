import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
    // [UPDATE REQUIRED]: Update this array with your actual projects.
    // Add 'demo' link if available.
    {
        title: 'MediTrack Pro (MERN)',
        description: 'Full-stack healthcare platform with real-time vitals monitoring, secure medical records, role-based access control, live doctor–patient chat, and dual database architecture.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Socket.io', 'Tailwind CSS', 'PostgreSQL'],
        github: 'https://github.com/keshava1171/MediTrack-', // Updated based on earlier fix, please verify
        demo: '#',
        image: '/MERN.png',
    },
    {
        title: 'Public Transportation Route Planner',
        description: 'Multi-criteria route optimization system using Dijkstra’s Algorithm for time and cost efficiency.',
        tech: ['C++', 'Graphs', 'Priority Queue', 'File I/O', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/keshava1171/Public-Transportation-Route-Planner-with-Multi-Criteria-Optimization',
        demo: null,
        image: '/Public Transportation Route Planner.png',
    },
    {
        title: 'Academic Progress Tracking System',
        description: 'Role-based academic management system with secure authentication, CRUD operations, and dashboards.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        github: 'https://github.com/keshava1171/AcademicTracker',
        demo: null,
        image: '/academic_tracker.png',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-green-600 dark:text-green-400 font-bold text-2xl mr-4 font-mono">04.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Some of my recent work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl group-hover:animate-blob"></div>
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl group-hover:animate-blob animation-delay-2000"></div>
                            </div>

                            <div className="h-48 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                                        <FaCode className="text-white text-6xl opacity-50" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col relative z-10">
                                <h3 className="text-xl font-bold mb-2">
                                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-blue-600 group-hover:to-purple-600 bg-clip-text text-transparent transition-all duration-300">
                                        {project.title}
                                    </span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 group/link"
                                    >
                                        <FaGithub className="text-xl text-gray-700 dark:text-gray-300 group-hover/link:text-blue-600 transition-colors" />
                                        <span className="font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover/link:bg-[length:100%_2px] group-hover/link:from-blue-600 group-hover/link:to-purple-600 transition-all duration-300 bg-clip-text group-hover/link:text-transparent">
                                            GitHub
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;