import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Validation only for the existence of keys (optional, but helpful for debugging)
        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are missing!");
            alert("EmailJS configuration is missing. Please check your .env file.");
            setStatus('error');
            return;
        }

        console.log("Using EmailJS Keys:", {
            serviceId: serviceId,
            templateId: templateId,
            publicKey: publicKey
        });

        try {
            const response = await emailjs.send(
                serviceId,
                templateId,
                formData,
                publicKey
            );

            console.log("SUCCESS!", response.status, response.text);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 5000);

        } catch (error) {
            console.error("FAILED...", error);
            if (error.text) console.error("Error Text:", error.text);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-green-600 dark:text-green-400 font-bold text-2xl mr-4 font-mono">06.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Type something to start...</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        {/* Email Card */}
                        <div className="group relative flex items-start p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 dark:hover:from-blue-500/20 dark:hover:via-purple-500/20 dark:hover:to-pink-500/20 hover:bg-[length:200%_200%] hover:animate-gradient-x transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-purple-200 dark:hover:border-purple-900 overflow-hidden">
                            <div className="flex-shrink-0 relative z-10">
                                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-blue-600 dark:text-blue-300 text-2xl group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope />
                                </div>
                            </div>
                            <div className="ml-5 overflow-hidden relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">Email</h3>
                                <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">Drop me a line anytime!</p>
                                {/* [UPDATE REQUIRED]: Update your email address in href and text */}
                                <a href="mailto:adhikeysavachandragiri@gmail.com" className="font-bold block truncate mt-1 bg-gradient-to-r from-gray-700 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-[length:200%_auto] bg-left hover:bg-right bg-clip-text text-transparent transition-all duration-500">
                                    adhikeysavachandragiri@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <div className="group relative flex items-start p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 dark:hover:from-blue-500/20 dark:hover:via-purple-500/20 dark:hover:to-pink-500/20 hover:bg-[length:200%_200%] hover:animate-gradient-x transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900 overflow-hidden">
                            <div className="flex-shrink-0 relative z-10">
                                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-blue-400 text-2xl group-hover:scale-110 transition-transform duration-300">
                                    <FaLinkedin />
                                </div>
                            </div>
                            <div className="ml-5 overflow-hidden relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-blue-500 transition-all duration-300">LinkedIn</h3>
                                <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">Let's connect professionally.</p>
                                {/* [UPDATE REQUIRED]: Update your LinkedIn URL */}
                                <a href="https://linkedin.com/in/keshava1171" target="_blank" rel="noopener noreferrer" className="font-bold block mt-1 bg-gradient-to-r from-gray-700 via-blue-700 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-400 bg-[length:200%_auto] bg-left hover:bg-right bg-clip-text text-transparent transition-all duration-500">
                                    linkedin.com/in/keshava1171
                                </a>
                            </div>
                        </div>

                        {/* GitHub Card */}
                        <div className="group relative flex items-start p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 dark:hover:from-blue-500/20 dark:hover:via-purple-500/20 dark:hover:to-pink-500/20 hover:bg-[length:200%_200%] hover:animate-gradient-x transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 overflow-hidden">
                            <div className="flex-shrink-0 relative z-10">
                                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                                    <FaGithub />
                                </div>
                            </div>
                            <div className="ml-5 overflow-hidden relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">GitHub</h3>
                                <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">Check out my code.</p>
                                {/* [UPDATE REQUIRED]: Update your GitHub URL */}
                                <a href="https://github.com/keshava1171" target="_blank" rel="noopener noreferrer" className="font-bold block mt-1 bg-gradient-to-r from-gray-700 via-black to-gray-600 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-[length:200%_auto] bg-left hover:bg-right bg-clip-text text-transparent transition-all duration-500">
                                    github.com/keshava1171
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                    >
                        {/* Decoration Blob */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-0 dark:text-white transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600"
                                    placeholder="Type your name..."
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-0 dark:text-white transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600"
                                    placeholder="Type your email..."
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-0 dark:text-white transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600"
                                    placeholder="Type your message..."
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium">
                                    ❌ Something went wrong. Please try again later.
                                </div>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none transform hover:-translate-y-1 transition-all duration-300 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'submitting' ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-2" /> Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;