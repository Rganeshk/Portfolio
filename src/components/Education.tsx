"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";

const education = [
  {
    school: "Carnegie Mellon University",
    department: "School of Computer Science",
    degree: "Master of Software Engineering",
    period: "2024 - 2025",
    location: "Pittsburgh, PA",
    highlight: "MSE Director's Scholarship",
    highlightDesc: "Awarded for leadership, program citizenship, and academic excellence",
    courses: [
      "Distributed Systems",
      "Cloud Computing",
      "Software Architecture",
      "Machine Learning",
      "Generative AI",
      "Agile Methods",
    ],
    awards: ["MSE Director's Scholarship", "Best Paper Award"],
  },
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "Master of Technology",
    field: "Artificial Intelligence & Data Science",
    period: "2019 - 2021",
    location: "Coimbatore, India",
    courses: [
      "Deep Learning",
      "Natural Language Processing",
      "Big Data Analytics",
      "Computer Vision",
    ],
    publication: "Anomaly Detection in Thermal Images of Perishable Items (Springer, 2021)",
  },
  {
    school: "PSG College of Technology",
    degree: "Bachelor of Engineering",
    field: "Biomedical Engineering",
    period: "2014 - 2018",
    location: "Coimbatore, India",
    courses: [
      "Medical Image Processing",
      "Signal Processing",
      "Biomechanics",
      "Embedded Systems",
    ],
    publication: "Malaria Cell Detection Using Digital Image Processing Methods (2017)",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-12 bg-grid">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass rounded-xl p-6 hover:border-accent/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <FiBookOpen className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-accent font-mono text-xs">{edu.period}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {edu.school}
              </h3>
              {edu.department && (
                <p className="text-accent-light text-sm mb-1">{edu.department}</p>
              )}
              <p className="text-gray-300 text-sm font-medium">{edu.degree}</p>
              {edu.field && (
                <p className="text-gray-400 text-sm">{edu.field}</p>
              )}
              <p className="text-gray-500 text-xs mb-4">{edu.location}</p>

              {edu.highlight && (
                <div className="flex items-start gap-2 mb-4 bg-accent/5 border border-accent/20 rounded-lg p-3">
                  <FiAward className="text-yellow-400 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-yellow-400 text-sm font-medium">{edu.highlight}</p>
                    <p className="text-gray-400 text-xs">{edu.highlightDesc}</p>
                  </div>
                </div>
              )}

              <div className="mt-auto">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Key Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-1 rounded-md bg-surface-light text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {edu.publication && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Publication
                  </p>
                  <p className="text-gray-400 text-xs italic">{edu.publication}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
