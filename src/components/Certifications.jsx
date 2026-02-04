import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';

const certifications = [
    // [UPDATE REQUIRED]: Update your certifications here.
    {
        id: 1,
        title: 'NPTEL (IIT/IISc)',
        file: '/NPTEL.pdf',
        description: 'Elite certification in Joy of Computing using Python.',
    },
    {
        id: 2,
        title: 'Generative AI Apps (Infosys)',
        file: '/Infosys - Build Generative AI Apps and Solutions with No-Code Tools .pdf',
        description: 'Building AI solutions using no-code tools.',
    },
    {
        id: 3,
        title: 'Prompt Engineering (Infosys)',
        file: '/Infosys - ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf',
        description: 'Mastering ChatGPT-4 and LLM prompt engineering.',
    },
    {
        id: 4,
        title: 'Theory of Computation',
        file: '/Computational Theory Language Principle & Finite Automata Theory .pdf',
        description: 'Finite Automata and Language Principles.',
    },
    {
        id: 5,
        title: 'SEBI Investment Awareness',
        file: '/SEBI Investment Awareness Test.pdf',
        description: 'Financial literacy and investment awareness accomplishment.',
    },
    {
        id: 6, title: 'Code-A-Haunt Hackathon',
        file: '/Code-A-Haunt Hackathon.pdf',
        description: 'Participation and achievement in coding hackathon.',
    },
];

const Certifications = () => {
    const [activeCert, setActiveCert] = useState(certifications[0]);

    return (
        <section id="certifications" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-green-600 dark:text-green-400 font-bold text-2xl mr-4 font-mono">05.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            Certifications
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
                    {/* List of Certs */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Select a Certificate:</h3>
                        {certifications.map((cert) => (
                            <motion.button
                                key={cert.id}
                                onClick={() => setActiveCert(cert)}
                                whileHover={{ x: 5 }}
                                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex justify-between items-center group ${activeCert.id === cert.id
                                    ? 'bg-white dark:bg-gray-800 border-blue-500 shadow-lg'
                                    : 'bg-white/50 dark:bg-gray-900/50 border-transparent hover:bg-white dark:hover:bg-gray-800'
                                    }`}
                            >
                                <span className={`font-medium ${activeCert.id === cert.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold'
                                    : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                    }`}>
                                    {cert.title}
                                </span>
                                {activeCert.id === cert.id && (
                                    <FaChevronRight className="text-blue-500" />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Display Area */}
                    <div className="w-full lg:w-1/2">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeCert.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-4xl text-blue-600 dark:text-blue-400 shadow-sm">
                                        <FaAward />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                        {activeCert.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                                        {activeCert.description}
                                    </p>
                                    <a
                                        href={activeCert.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 group/btn"
                                    >
                                        <span>View Certificate</span>
                                        <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;