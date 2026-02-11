import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center transition-colors duration-300 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Background Gradient/Mesh for Depth */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-xl sm:text-2xl font-bold text-secondary-600 dark:text-secondary-400 mb-4 uppercase tracking-wider"
                        >
                            Portfolio
                        </motion.h2>
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
                        >
                            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent"> C Adikesava</span>
                        </motion.h1>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Full-Stack Developer | MERN Stack Specialist | Problem Solver
                        </motion.p>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto lg:mx-0"
                        >
                            B.Tech Computer Science Engineering Student at Lovely Professional University.
                            Passionate about building scalable backend systems and responsive web applications.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all transform cursor-pointer"
                            >
                                Contact Me
                            </Link>
                            <a
                                href="/MY_CV_UPDATED.pdf" target="_blank" rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold text-lg shadow-md hover:shadow-xl hover:border-secondary-500 hover:-translate-y-1 transition-all transform"
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center lg:justify-end relative"
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Glowing Blob Behind Image */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/40 to-purple-500/40 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        <motion.div
                            className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-white/10 to-white/30 dark:from-white/5 dark:to-white/10 backdrop-blur-lg border border-white/20 shadow-2xl z-10"
                            style={{
                                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
                            }}
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                            }}
                        >
                            <img
                                src="/photo.png"
                                alt="C Adikesava"
                                className="w-full h-full object-cover shadow-inner"
                                style={{
                                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
                                }}
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
export default Hero;
