import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skills = [
    { name: 'Java', icon: 'fa-brands fa-java', color: 'text-orange-500' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: 'text-green-500' },
    { name: 'Spring AI', icon: 'fa-solid fa-brain', color: 'text-purple-400' },
    { name: 'React', icon: 'fa-brands fa-react', color: 'text-blue-400' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: 'text-green-600' },
    { name: 'MySQL', icon: 'fa-solid fa-database', color: 'text-blue-600' },
    { name: 'REST APIs', icon: 'fa-solid fa-plug', color: 'text-gray-300' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: 'text-orange-600' },
    { name: 'Agile', icon: 'fa-solid fa-diagram-project', color: 'text-indigo-400' },
    { name: 'WebSocket', icon: 'fa-solid fa-wave-square', color: 'text-cyan-400' },
    { name: 'JIRA', icon: 'fa-brands fa-jira', color: 'text-blue-500' },
    { name: 'Postman', icon: 'fa-solid fa-truck-fast', color: 'text-orange-400' },
];

const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen py-24 px-8 relative z-10 bg-black/20 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">About Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Background & Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-book-open text-emerald-400"></i>
                            My Background
                        </h3>
                        <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
                            <p>
                                With a solid academic foundation in Computer Science, I specialize in engineering resilient and scalable software architectures.
                                Beyond code, my approach to problem-solving and leadership is deeply influenced by competitive squash and a strategic interest in national security, instilling persistence and a long-term perspective.
                            </p>
                            <p>
                                I thrive on creating performant, user-centric solutions while maintaining a disciplined attitude toward both systems and people.
                                Outside of work, I enjoy reading books, trekking, and running, and I often unwind by stargazing or playing the harmonica.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                            <i className="fa-solid fa-layer-group text-blue-400"></i>
                            Tech Stack
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={1000} className="rounded-2xl h-full">
                                    <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 bg-white/10 transition-colors backdrop-blur-md group">
                                        <i className={`${skill.icon} text-4xl ${skill.color}`}></i>
                                        <span className="text-neutral-200 font-medium text-sm text-center">{skill.name}</span>
                                    </div>
                                </Tilt>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
