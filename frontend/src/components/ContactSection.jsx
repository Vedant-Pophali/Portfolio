import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ContactSection = () => {
    return (
        <section id="contact" className="min-h-screen py-24 px-8 relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/5">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Get in Touch</span>
                    </h2>
                    <p className="text-neutral-400 text-lg">Let's work together.</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto rounded-full mt-6"></div>
                </motion.div>

                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2500}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">

                        {/* Decorative background blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                        {/* Left: Info Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center relative z-10"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6">Let's build something great!</h3>
                            <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-md">
                                Whether you have an idea, a question, or just want to say hi — feel free to get in touch with me.
                            </p>

                            <div className="flex gap-6">
                                <a href="https://www.linkedin.com/in/vedant-pophali/" target="_blank" rel="noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/Vedant-Pophali" target="_blank" rel="noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="mailto:officialvedantpophali2005@gmail.com"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <form action="https://api.web3forms.com/submit" method="post" className="flex flex-col gap-6">
                                <input type="hidden" name="access_key" value="f5e66cbb-795a-40a7-bd15-66b7cb47395d" />

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-400">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        className="bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-400">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Type your message here..."
                                        rows="5"
                                        required
                                        className="bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold py-4 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-3 group"
                                >
                                    Send Message
                                    <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </Tilt>
            </div>
        </section>
    );
};

export default ContactSection;
