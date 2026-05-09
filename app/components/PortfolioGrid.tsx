"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

export default function PortfolioGrid() {
  const shouldReduceMotion = useReducedMotion();

  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.1,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
      scale: shouldReduceMotion ? 1 : 0.965,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="flex w-full justify-center px-4 sm:px-6 lg:px-[240px]">
      <motion.div
        className="grid w-full max-w-[1439px] grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-[16px] xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={gridVariants}
      >
        {projects.map((project, index) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block overflow-hidden rounded-[16px]">
            <motion.div variants={cardVariants}>
              <div className="relative aspect-video w-full overflow-hidden bg-[#16161a]">
                <img
                  src={project.cover}
                  alt={project.name}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  style={{ display: "block" }}
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
