"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "eParts Services",
    subtitle: "CMU Capstone Project",
    role: "Senior Software Engineer",
    focus: "Cloud-Native Data Platform | ML Ops",
    period: "Jan 2025 - Dec 2025",
    location: "Pittsburgh, PA",
    bullets: [
      "Led a cross-functional team of 6 in architecting a multi-tenant cloud-native Data Warehouse on Azure, harnessing Snowflake for real-time analytics and cutting reporting latency by 60% across ~50K+ records/day.",
      "Architected fault-tolerant real-time ELT pipelines (Kafka, Debezium) on Azure Kubernetes Service to stream ~150K+ SQL Server CDC events/day into Snowflake, achieving 85% improvement in data freshness.",
      "Unified advanced observability using Snowflake query logs, Grafana dashboards, and Prometheus metrics, decreasing incident triage time by 50% and ensuring >99.9% SLA adherence.",
    ],
    tags: ["Azure", "Snowflake", "Kafka", "Kubernetes", "Grafana", "ML Ops"],
  },
  {
    company: "Philips",
    role: "Software Engineer II",
    focus: "Cloud-Native Medical Imaging Platform | SaaS",
    period: "Mar 2023 - Jun 2024",
    location: "Bengaluru, India",
    bullets: [
      "Pioneered a scalable Medical Imaging Platform on AWS EKS, replacing legacy systems with Kubernetes-orchestrated containers, boosting radiology efficiency by ~30% for ~15K+ daily sessions.",
      "Designed fault-tolerant imaging services with Angular/TypeScript and .NET Core, handling ~20K+ image requests/day with zero downtime across 5+ DICOM modalities.",
      "Optimized backend with AWS ElastiCache and DynamoDB, implementing data pipelines for real-time ML inference, attaining 99.999% uptime across ~10K+ diagnostic workflows.",
      "Collaborated globally (Netherlands, Israel) to architect HIPAA-compliant data flows, incorporating Kafka for streaming ~500K+ image metadata events/day.",
    ],
    tags: ["AWS EKS", ".NET Core", "Angular", "Kafka", "DynamoDB", "DICOM"],
  },
  {
    company: "Philips",
    role: "Software Engineer",
    focus: "Platform Engineering | SaaS",
    period: "Aug 2021 - Mar 2023",
    location: "Bengaluru, India",
    bullets: [
      "Revamped legacy imaging into a modular SaaS platform with C#/.NET Core and Angular, leveraging MongoDB sharding to reduce latency by 30% for ~8K+ daily sessions.",
      "Accelerated deployments using Docker and AWS ECS, automating Terraform-based CI/CD pipelines, accomplishing 99.99% release reliability.",
      "Implemented caching and streaming with AWS Kinesis, cutting image load times by 40% for ~5K+ concurrent users.",
    ],
    tags: ["C#", ".NET Core", "Docker", "AWS ECS", "Terraform", "MongoDB"],
  },
  {
    company: "Philips",
    role: "Software Engineer Intern",
    focus: "Data Engineering Team",
    period: "Aug 2020 - Jul 2021",
    location: "Bengaluru, India",
    bullets: [
      "Built scalable pipelines with Apache Spark and Kafka, processing ~1M+ healthcare events/day to power ML-driven anomaly detection.",
      "Developed a health check API with ReactJS, Java, and Spring Boot, boosting node uptime from 95% to 99.99% across ~10+ nodes.",
      "Automated 65% of testing with Python scripts in CI/CD pipelines for healthcare analytics workloads.",
    ],
    tags: ["Apache Spark", "Kafka", "Java", "Spring Boot", "React", "Python"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-accent shadow-lg shadow-accent/30" />

                <div className="glass rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                      {exp.subtitle && (
                        <span className="text-gray-400 font-normal text-sm ml-2">
                          ({exp.subtitle})
                        </span>
                      )}
                    </h3>
                    <span className="text-accent font-mono text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent-light font-medium mb-1">
                    {exp.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.focus} &middot; {exp.location}
                  </p>

                  <ul className="space-y-3 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 flex-shrink-0">&#9656;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
