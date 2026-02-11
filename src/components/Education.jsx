import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const educationData = [
    {
        id: 0,
        name: 'Lovely Professional University',
        degree: 'B.Tech - Computer Science & Engineering',
        institution: '@ Punjab, India',
        duration: 'Aug 2023 - 2027 (Expected)',
        score: 'CGPA : 6.0',
        points: [
            'Pursuing core computer science subjects with a focus on practical implementation.',
            'Engaging in problem-solving and algorithmic thinking through coursework.',
            'Participating in technical workshops and coding competitions.',
            'Building a strong foundation in full-stack development technologies.',
        ],
    },
    {
        id: 1,
        name: 'Sri Siddartha Junior College',
        degree: 'Intermediate',
        institution: '@ Andhra Pradesh, India',
        duration: 'July 2020 - April 2023',
        score: 'Percentage : 78.9%',
        points: [
            'Completed intermediate education with a focus on sciences.',
            'Developed strong analytical and mathematical skills.',
            'Participated in academic and extracurricular activities.',
            'Maintained a consistent academic performance.',
        ],
    },
    {
        id: 2,
        name: 'Vasishta School (ICSE)',
        degree: 'Matriculation',
        institution: '@ Andhra Pradesh, India',
        duration: 'June 2018 - July 2020',
        score: 'Percentage : 90.60%',
        points: [
            'Completed matriculation with distinction.',
            'Active participant in school events and science fairs.',
            'Built a strong foundation in mathematics and science.',
            'Demonstrated holistic growth in academics and personal development.',
        ],
    },
];

const Education = () => {
    const [selectedId, setSelectedId] = useState(0);

    return (
        <section id="education" className="py-24 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-12"
                >
                    <span className="text-green-600 dark:text-green-400 font-bold text-2xl mr-4">02.</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Where I’ve Studied</h2>
                    <div className="ml-6 flex-grow h-px bg-gray-300 dark:bg-gray-700 max-w-xs"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="relative md:w-64 flex-shrink-0 overflow-x-auto md:overflow-visible flex md:flex-col border-b md:border-b-0 md:border-l-2 border-gray-300 dark:border-gray-700">
                        {/* Animated Line */}
                        <motion.div
                            className="absolute left-[-2px] top-0 w-[2px] h-10 bg-green-500 hidden md:block"
                            animate={{ top: selectedId * 40 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        {/* Buttons */}
                        {educationData.map((edu, index) => (
                            <button
                                key={edu.id}
                                onClick={() => setSelectedId(index)}
                                className={`text-left px-5 py-3 text-sm font-medium transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/10 hover:text-green-600 dark:hover:text-green-400 whitespace-nowrap md:whitespace-normal border-l-2 md:border-l-0 md:border-l-transparent -mb-[2px] md:mb-0
                                    ${selectedId === index
                                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 border-green-500 md:border-l-green-500'
                                        : 'text-gray-500 dark:text-gray-400 border-transparent'
                                    }
                                    md:border-l-2
                                `}
                                style={{
                                    borderLeftColor: selectedId === index ? '#22c55e' : 'transparent'
                                }}
                            >
                                {edu.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-h-[400px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={selectedId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {educationData[selectedId].degree}
                                </h3>
                                <p className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
                                    {educationData[selectedId].institution}
                                </p>
                                <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">
                                    {educationData[selectedId].duration} &nbsp; | &nbsp; {educationData[selectedId].score}
                                </p>
                                <ul className="space-y-4">
                                    {educationData[selectedId].points.map((point, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                            <span className="text-green-500 mr-2 mt-1">▹</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;