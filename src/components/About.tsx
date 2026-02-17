"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCloud, FiCpu, FiDatabase } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCpu size={28} />,
    title: "ML & AI Systems",
    description:
      "Designing and deploying ML pipelines, from model training to real-time inference at scale. Experienced with PyTorch, Transformers, and Generative AI.",
  },
  {
    icon: <FiDatabase size={28} />,
    title: "Data Engineering",
    description:
      "Building fault-tolerant data platforms with Kafka, Spark, Snowflake, and streaming architectures processing millions of events daily.",
  },
  {
    icon: <FiCloud size={28} />,
    title: "Cloud Infrastructure",
    description:
      "Architecting cloud-native applications on AWS, Azure, and GCP using Kubernetes, Terraform, and microservices patterns.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 bg-grid">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m a software engineer who thrives at the{" "}
                <span className="text-white font-medium">
                  intersection of Machine Learning, Data, and Cloud
                  Infrastructure
                </span>
                . With 3+ years of experience at Philips Healthcare, I&apos;ve built
                scalable, reliable systems that power critical healthcare
                workflows serving thousands of users daily.
              </p>
              <p>
                At Philips, I progressed from an intern on the Data Engineering
                team to a Software Engineer II, where I pioneered cloud-native
                medical imaging platforms on AWS, designed HIPAA-compliant data
                pipelines, and collaborated with globally distributed teams
                across the Netherlands and Israel.
              </p>
              <p>
                I graduated with my{" "}
                <span className="text-white font-medium">
                  Master of Software Engineering from Carnegie Mellon University
                </span>{" "}
                (School of Computer Science), where I was awarded the MSE
                Director&apos;s Scholarship for leadership and academic excellence.
                My coursework spanned Distributed Systems, Cloud Computing,
                Machine Learning, and Generative AI.
              </p>
              <p>
                I also hold an M.Tech in AI &amp; Data Science from Amrita Vishwa
                Vidyapeetham and a B.E. in Biomedical Engineering from PSG
                College of Technology.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="glass rounded-xl p-5 hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
