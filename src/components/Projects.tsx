"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "NYCabs - Ride-Matching & AI Travel Agent",
    subtitle: "Cloud Computing | CMU",
    description:
      "Engineered a Kafka-Samza streaming pipeline for real-time driver-rider matching with ~96% accuracy. Built an XGBoost fare prediction model tuned on Vertex AI (3.58 RMSE). Deployed a RAG-powered travel agent using Vertex AI RAG Engine and Llama-3.1-70B for 90% relevant NYC query response.",
    tags: ["Kafka", "Samza", "XGBoost", "Vertex AI", "RAG", "Llama 3.1"],
    image: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=600&h=340&fit=crop",
  },
  {
    title: "Multi-Object Cardinality in Stable Diffusion",
    subtitle: "Generative AI | CMU",
    description:
      "Extended Stable Diffusion for multi-object count fidelity in text-to-image generation by adopting Slot-Guided Attention and ALiBi embeddings. Fine-tuned with LoRA on structured cardinality datasets, achieving 31% F1-score improvement and 0.93 precision.",
    tags: ["Stable Diffusion", "LoRA", "PyTorch", "Attention Mechanisms"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
  },
  {
    title: "Brain Tumor Auto-Segmentation",
    subtitle: "Medical AI",
    description:
      "Developed a 3D U-NET architecture for automated brain tumor segmentation from MRI scans. Applied deep learning techniques for precise volumetric analysis to assist radiologists in diagnosis and treatment planning.",
    tags: ["3D U-NET", "Medical Imaging", "PyTorch", "MRI"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=340&fit=crop",
  },
  {
    title: "Medical Imaging Platform (Philips)",
    subtitle: "Cloud-Native SaaS | Production",
    description:
      "Pioneered a scalable annotation viewer on AWS EKS handling 15K+ daily sessions across 5+ DICOM modalities. Designed fault-tolerant services processing 20K+ image requests/day with zero downtime and 99.999% uptime.",
    tags: ["AWS EKS", "Kubernetes", ".NET Core", "Angular", "Kafka"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=340&fit=crop",
  },
  {
    title: "Prompt-to-Prompt Diffusion Image Editing",
    subtitle: "Generative AI Research",
    description:
      "Implemented text-driven image editing using diffusion models enabling localized edits through cross-attention manipulation. Explored attention control mechanisms for precise semantic-level image transformations.",
    tags: ["Diffusion Models", "Cross-Attention", "Python", "PyTorch"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=340&fit=crop",
  },
  {
    title: "Real-Time ELT Data Platform",
    subtitle: "eParts Services | CMU Capstone",
    description:
      "Architected a multi-tenant cloud-native Data Warehouse on Azure with Snowflake. Built fault-tolerant ELT pipelines (Kafka, Debezium) on AKS streaming 150K+ CDC events/day, reducing reporting latency by 60%.",
    tags: ["Azure", "Snowflake", "Kafka", "Debezium", "AKS", "Grafana"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-12 bg-grid">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl overflow-hidden flex flex-col hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-accent-light text-xs font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-surface-light/50 text-gray-400 font-mono"
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
    </section>
  );
}
