"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiDotnet,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiApachekafka,
  SiApachespark,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiElasticsearch,
  SiPytorch,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiJenkins,
  SiSnowflake,
  SiGrafana,
  SiFastapi,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C#", icon: null },
      { name: "Java", icon: <FaJava /> },
      { name: ".NET Core", icon: <SiDotnet /> },
      { name: "React", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Azure", icon: <VscAzure /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Git", icon: <SiGit /> },
    ],
  },
  {
    title: "Data & Streaming",
    skills: [
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Spark", icon: <SiApachespark /> },
      { name: "Snowflake", icon: <SiSnowflake /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Elasticsearch", icon: <SiElasticsearch /> },
      { name: "Grafana", icon: <SiGrafana /> },
    ],
  },
  {
    title: "ML & AI",
    skills: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "XGBoost", icon: null },
      { name: "LangChain", icon: null },
      { name: "Hugging Face", icon: null },
      { name: "Vertex AI", icon: null },
      { name: "RAG", icon: null },
      { name: "LLMs", icon: null },
      { name: "Transformers", icon: null },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-light/50 border border-gray-700/50 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 cursor-default"
                  >
                    {skill.icon && (
                      <span className="text-accent text-lg">{skill.icon}</span>
                    )}
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
