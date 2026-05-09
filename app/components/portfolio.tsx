"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { projects } from "../data/projects";
import "swiper/css";

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();
  const linkText = "Zobacz pelne portfolio";

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 1.45,
        duration: shouldReduceMotion ? 0 : 0.42,
        when: "beforeChildren" as const,
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.32,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.12,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
      scale: shouldReduceMotion ? 1 : 0.965,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.48,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.section
      className="mt-6 px-4 antialiased sm:px-6 lg:mt-[16px] lg:px-[240px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="mb-4 flex flex-col items-start" variants={headingVariants}>
        <h2 className="text-[21px] font-bold text-[#FFFFFF] sm:text-[24px]">Projekty, które działają</h2>

        <motion.a
          href="/portfolio"
          className="group relative mt-2 block h-[20px] overflow-hidden cursor-pointer"
          variants={headingVariants}
        >
          <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
            <div className="flex h-[20px] items-center text-[14px] font-medium text-[#C7C9D1]">
              {linkText.split("").map((char, i) => (
                <span key={i} className="inline-block transition-all" style={{ transitionDelay: `${i * 15}ms` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            <div className="flex h-[20px] items-center text-[14px] font-medium text-white">
              {linkText.split("").map((char, i) => (
                <span key={i} className="inline-block transition-all" style={{ transitionDelay: `${i * 15}ms` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      </motion.div>

      <motion.div variants={cardsContainerVariants}>
        <Swiper
          autoHeight
          modules={[Autoplay]}
          autoplay={
            shouldReduceMotion
              ? false
              : {
                  delay: 2600,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          loop={projects.length > 3}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.15 },
            1280: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug}>
              <motion.div className="overflow-hidden rounded-[16px] bg-[#16161a]" variants={cardVariants}>
                <Link href={`/portfolio/${project.slug}`} className="group block cursor-pointer">
                  <img
                    src={project.cover}
                    alt={project.name}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="block aspect-video h-auto w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
                  />
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}
