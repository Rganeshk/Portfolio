"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

const links = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "ramyaganesh.cmu@gmail.com",
    href: "mailto:ramyaganesh.cmu@gmail.com",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "ramyapriyanandhini",
    href: "https://www.linkedin.com/in/ramyapriyanandhini",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/Rganeshk",
    href: "https://github.com/Rganeshk",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Pittsburgh, PA",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-3xl px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-sm mb-4">What&apos;s Next?</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about ML, cloud
            infrastructure, and building things at scale. Feel free to reach out!
          </p>

          <motion.a
            href="mailto:ramyaganesh.cmu@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 mb-12"
          >
            Say Hello
          </motion.a>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="glass rounded-lg p-4 flex items-center gap-3 hover:border-accent/40 transition-all duration-200 group"
                  >
                    <span className="text-accent group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <div className="text-left">
                      <p className="text-gray-500 text-xs">{link.label}</p>
                      <p className="text-gray-300 text-sm truncate">{link.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-lg p-4 flex items-center gap-3">
                    <span className="text-accent">{link.icon}</span>
                    <div className="text-left min-w-0">
                      <p className="text-gray-500 text-xs">{link.label}</p>
                      <p className="text-gray-300 text-sm truncate">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-800 pt-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Designed & Built by Ramya Ganesh
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rganeshk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ramyapriyanandhini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:ramyaganesh.cmu@gmail.com"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
