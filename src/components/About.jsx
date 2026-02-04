import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaLaptopCode, FaBook, FaMusic } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-green-600 dark:text-green-400 font-bold text-2xl mr-4 font-mono">01.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {/* Quick Facts Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl group-hover:animate-blob"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full blur-2xl group-hover:animate-blob animation-delay-2000"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Facts</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 mr-3">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Location</p>
                                        <p className="text-gray-900 dark:text-white font-medium">Andhra Pradesh, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                                        <FaGraduationCap />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Education</p>
                                        <p className="text-gray-900 dark:text-white font-medium">B.Tech Computer Science</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        {/* Hobbies Card */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl group-hover:animate-blob"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full blur-2xl group-hover:animate-blob animation-delay-2000"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">When I'm Not Coding</h3>
                            <div className="space-y-3">
                                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <FaLaptopCode className="text-blue-500 mr-3 text-lg" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">Exploring Tech</span>
                                </div>
                                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <FaBook className="text-green-500 mr-3 text-lg" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">Reading</span>
                                </div>
                                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <FaMusic className="text-purple-500 mr-3 text-lg" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">Music</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* My Journey Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl group-hover:animate-blob"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full blur-2xl group-hover:animate-blob animation-delay-2000"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
                                My Journey
                            </h3>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                <p>
                                    Hello! I’m <span className="font-bold text-gray-900 dark:text-white">C. Adikesava</span>, a Computer Science and Engineering undergraduate at Lovely Professional University, with a strong interest in building scalable, real-world software solutions.
                                </p>
                                <p>
                                    My academic journey has helped me develop a solid foundation in data structures, algorithms, and core programming languages such as <span className="text-blue-600 dark:text-blue-400 font-medium">C/C++, Java, Python, and JavaScript</span>. I have hands-on experience in full-stack development, working with modern technologies like MERN stack, React, Node.js, Express, MongoDB, PostgreSQL, and MySQL.
                                </p>
                            </div>
                        </motion.div>

                        {/* My Approach Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl group-hover:animate-blob"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full blur-2xl group-hover:animate-blob animation-delay-2000"></div>
                            </div>

                            {/* Reverting specifically the text colors to work with the lighter background now */}
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6 relative z-10">
                                My approach
                            </h3>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 text-lg">
                                <p>
                                    I’ve worked on impactful projects including a healthcare management system with real-time monitoring, a multi-criteria public transportation route planner using Dijkstra’s algorithm, and an academic progress tracking system with role-based access control. These projects strengthened my problem-solving skills and my ability to design secure, efficient, and user-centric applications.
                                </p>
                                <p>
                                    My career goal is to grow as a software engineer specializing in backend systems, scalable architectures, and full-stack development. I’m a quick learner, adaptable, and proactive, with a strong passion for applying theoretical concepts to practical solutions.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;