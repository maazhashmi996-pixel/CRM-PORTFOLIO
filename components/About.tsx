"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Monitor, GraduationCap, ArrowRight } from "lucide-react";

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

const About = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-[#050505] text-white">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            {/* Outer Glow effect */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                            <div className="relative h-[380px] w-[300px] md:h-[520px] md:w-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
                                <img
                                    src="/shahmeer-pic.jpg"
                                    alt="Shahmeer SoftHub Owner"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 md:-left-12 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl"
                            >
                                <span className="block text-3xl font-bold text-blue-500">SoftHub</span>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">Tech Revolution</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInRight}
                        className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                    >
                        <div className="space-y-4">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider"
                            >
                                Expert Web Developer & Mentor
                            </motion.span>

                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                Shahmeer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                                    Leading SoftHub
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Hum SoftHub mein modern tech solutions design karte hain. Sirf software house nahi, balki ek aisi community jahan students ko industry-ready banaya jata hai through advanced courses.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors group">
                                <GraduationCap className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="text-white font-bold text-lg">Tech Courses</h3>
                                <p className="text-sm text-gray-500">Full Stack, MERN & Next.js mastery.</p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors group">
                                <Monitor className="w-8 h-8 text-cyan-500 mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="text-white font-bold text-lg">Software House</h3>
                                <p className="text-sm text-gray-500">Scalable apps for global clients.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <button className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-700">
                                Join Our Hub <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;