import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center space-x-8 mb-4">
                    {/* [UPDATE REQUIRED]: Update social links if needed */}
                    <a href="https://github.com/keshava1171" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://linkedin.com/in/keshava1171" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="mailto:adhikeysavachandragiri@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors transform hover:scale-110">
                        <FaEnvelope size={28} />
                    </a>
                </div>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} C Adikesava. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;