import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative p-8">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Textual Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-6"
                >
                    <div className="text-xl text-neutral-400 uppercase tracking-widest font-semibold">Hello, I am</div>

                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Vedant Pophali
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-neutral-200">
                        Developer, Squash Enthusiast,<br />
                        Passionate about National Security and Geopolitics
                    </h2>

                    <p className="text-neutral-400 text-lg leading-relaxed max-w-lg shadow-black drop-shadow-md">
                        I'm a software developer focused on building resilient, scalable systems and enhancing user experiences.
                        A squash enthusiast off the clock, I bring the same discipline and energy to both court and code.
                        I'm also deeply engaged with national security and geopolitics, driven by civic curiosity and strategic thinking.
                        Together, these passions shape my approach to problem-solving and growth.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-purple-500/30">
                            View Projects <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Get in Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 pt-6">
                        <a href="mailto:officialvedantpophali2005@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-2xl">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vedant-pophali/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-2xl">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Vedant-Pophali" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-2xl">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </motion.div>

                {/* Right: Floating Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative h-full flex flex-col justify-center items-center gap-6"
                >
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] relative mt-8 md:mt-0 z-10 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                            {/* Fallback avatar if image isn't available yet */}
                            <i className="fa-solid fa-user text-6xl text-neutral-600"></i>
                        </div>
                    </Tilt>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-10 right-0 md:-right-10 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
                    >
                        <i className="fa-solid fa-code text-purple-400 text-xl"></i>
                        <span className="text-white font-medium">Developer</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute bottom-10 left-0 md:-left-10 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
                    >
                        <i className="fa-solid fa-table-tennis-paddle-ball text-pink-400 text-xl"></i>
                        <span className="text-white font-medium">Squash Enthusiast</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-20 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20"
                    >
                        <i className="fa-solid fa-shield-halved text-blue-400 text-xl"></i>
                        <span className="text-white font-medium">National Security Buff</span>
                    </motion.div>
                </motion.div>

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-neutral-500">
                <span className="text-sm uppercase tracking-widest mb-2 font-medium">Scroll Down</span>
                <i className="fa-solid fa-arrow-down text-xl"></i>
            </div>
        </section>
    );
};

export default HeroSection;
