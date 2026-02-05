import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center transition-colors duration-300 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.h2
                        variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="text-xl sm:text-2xl font-semibold text-secondary-600 dark:text-secondary-400 mb-4 uppercase tracking-wide"
                    >
                        Portfolio
                    </motion.h2>
                    <motion.h1
                        variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                        className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">  C Adikesava</span>
                    </motion.h1>
                    <motion.p
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Full-Stack Developer | MERN Stack Specialist | Problem Solver
                    </motion.p>
                    <motion.p
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        B.Tech Computer Science Engineering Student at Lovely Professional University.
                        Passionate about building scalable backend systems and responsive web applications.
                    </motion.p>
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all transform cursor-pointer"
                        >
                            Contact Me
                        </Link>
                        <a
                            href="/MY_CV_UPDATED.pdf" target="_blank"
                            className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold text-lg shadow-md hover:shadow-lg hover:border-secondary-500 hover:-translate-y-1 transition-all transform"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
