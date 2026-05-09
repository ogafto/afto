"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../data/projects";

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.58,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren" as const,
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16, filter: shouldReduceMotion ? "none" : "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.62,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.main
      className="w-full px-4 pb-12 pt-6 text-left sm:px-6 lg:px-[240px] lg:pt-[32px]"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div variants={item}>
        <Link href="/portfolio" className="mb-6 inline-block text-[14px] font-medium text-[#C7C9D1] hover:text-white">
          {"Wróć do portfolio"}
        </Link>
      </motion.div>

      <motion.section className="flex w-full flex-col items-start space-y-4 text-left" variants={item}>
        <h1 className="text-[28px] font-bold text-white sm:text-[36px]">{project.name}</h1>
        <p className="w-full max-w-[900px] text-left text-[15px] leading-relaxed text-[#C7C9D1] sm:text-[16px]">
          {project.description}
        </p>
      </motion.section>

      {project.images.length > 0 ? (
        <motion.section className="mt-8 flex w-full flex-col gap-4" variants={item}>
          {project.images.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="group w-full"
              variants={item}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              <div className="mx-auto w-full max-w-[1920px] overflow-hidden rounded-[16px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block h-auto w-full rounded-[16px] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          ))}
        </motion.section>
      ) : null}
    </motion.main>
  );
}