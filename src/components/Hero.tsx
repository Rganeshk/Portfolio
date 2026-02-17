"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono text-xl mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
          >
            Ramya Ganesh
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-6"
          >
            I build{" "}
            <span className="text-gradient">intelligent systems</span> at scale.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-xl text-lg leading-relaxed mb-8 mx-auto lg:mx-0"
          >
            I&apos;ve spent 3+ years building cloud-native applications,
            scalable ML systems, and real-time data platforms — whether
            it&apos;s breathing new life into legacy systems or building
            from scratch, I love turning bold ideas into production-ready
            software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/Rganeshk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200 hover:-translate-y-1 transform"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ramyapriyanandhini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200 hover:-translate-y-1 transform"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:ramyaganesh.cmu@gmail.com"
              className="text-gray-400 hover:text-accent transition-colors duration-200 hover:-translate-y-1 transform"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
            <a
              href="#contact"
              className="ml-4 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 animate-gradient p-1">
              <div className="w-full h-full rounded-full bg-background p-1">
                <Image
                  src="https://avatars.githubusercontent.com/u/207455579?s=400&v=4"
                  alt="Ramya Ganesh"
                  width={320}
                  height={320}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  );
}
