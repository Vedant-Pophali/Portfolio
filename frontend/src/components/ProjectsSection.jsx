import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
    {
        title: "Food Ordering Service",
        description: "A fault-tolerant food ordering platform with secure JWT login, RESTful APIs, cloud deployment, and Postman-tested endpoints.",
        tags: ["Spring Boot", "Spring Security", "JWT", "MongoDB", "AWS", "Postman", "React"],
        github: "https://github.com/Vedant-Pophali/FoodApps",
        icon: "fa-solid fa-burger"
    },
    {
        title: "Invoice Generator",
        description: "A full-stack tool to create, export, and manage invoices with user login and MongoDB-powered record storage.",
        tags: ["Spring Boot", "MongoDB", "React", "PDF Generation", "JWT"],
        github: "https://github.com/Vedant-Pophali/InvoiceGenerator",
        icon: "fa-solid fa-file-invoice-dollar"
    },
    {
        title: "DSA Questions",
        description: "A structured Java repository of data structures and algorithms with CI/CD workflows and test cases.",
        tags: ["Java", "GitHub Actions", "CI/CD"],
        github: "https://github.com/Vedant-Pophali/DSA",
        icon: "fa-solid fa-code"
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="min-h-screen py-24 px-8 relative z-10">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">My Work</span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Explore some of my latest work.</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.15} className="h-full">
                                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full group hover:shadow-[0_10px_40px_rgba(236,72,153,0.15)] backdrop-blur-md transition-shadow">
                                    {/* Dummy Image Placeholder for modern feel */}
                                    <div className="h-48 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                                        {/* Abstract visual representation instead of missing images */}
                                        <i className={`${project.icon} text-6xl text-white/20 group-hover:scale-125 transition-transform duration-500`}></i>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1 shadow-black shadow-none!">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/10 text-neutral-300 text-xs rounded-full border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                                            >
                                                <i className="fa-brands fa-github text-xl"></i>
                                                <span className="text-sm font-medium">Source Code</span>
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all pointer-events-none"
                                            >
                                                <i className="fa-solid fa-arrow-right -rotate-45"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
