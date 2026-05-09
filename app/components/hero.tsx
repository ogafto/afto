"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const headlineLines = ["Twoja marka zasługuje", "na lepszy design"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.55,
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.56,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  const descriptionTransition = {
    duration: shouldReduceMotion ? 0 : 0.24,
    delay: shouldReduceMotion ? 0 : 1.05,
    ease: [0.25, 1, 0.5, 1] as const,
  };

  const buttonsContainerTransition = {
    delayChildren: shouldReduceMotion ? 0 : 1.2,
    staggerChildren: shouldReduceMotion ? 0 : 0.16,
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
      scale: shouldReduceMotion ? 1 : 0.94,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.56,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="flex flex-col items-start px-4 pt-8 antialiased sm:px-6 sm:pt-10 lg:px-[240px] lg:pt-[56px]">
      <span className="text-[12px] font-medium tracking-wide text-[#A1A1AA] sm:text-[13px]">Designer & Web Developer</span>

      <motion.h1
        className="mt-[10px] max-w-[900px] py-[4px] text-[40px] font-bold leading-[1.2] tracking-tight sm:text-[52px] sm:leading-[1.22] lg:text-[64px] lg:leading-[1.26]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {headlineLines.map((line, index) => (
          <motion.span
            key={line + index}
            variants={wordVariants}
            className="block pb-[0.08em] will-change-transform bg-gradient-to-r from-[#FFFFFF] to-[#E8E5FF] bg-clip-text text-transparent"
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mt-4 max-w-[620px] text-[15px] font-normal leading-relaxed text-[#A1A1AA] sm:text-[16px] lg:text-[17px]"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={descriptionTransition}
      >
        Nowoczesny design, który wyróżnia Twoją markę i przyciąga uwagę.
      </motion.p>

      <motion.div
        className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:items-center sm:gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: { transition: buttonsContainerTransition },
        }}
      >
        <Link href="/portfolio">
          <motion.div
            className="group relative w-full overflow-hidden border border-white/25 px-6 py-3 text-[15px] font-medium text-[#EAEAEA] shadow-[0_0_20px_-5px_rgba(127,90,240,0.4)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px]"
            style={{
              backgroundColor: "#7F5AF0",
              borderRadius: "6px",
            }}
            variants={buttonVariants}
          >
            <div className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute -left-[100%] top-0 h-full w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[100%]" />
            </div>

            <div className="relative z-20 h-[20px] overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                <div className="flex h-[20px] items-center justify-center">
                  {"Zobacz realizacje".split("").map((char, i) => (
                    <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
                <div className="flex h-[20px] items-center justify-center text-white">
                  {"Zobacz realizacje".split("").map((char, i) => (
                    <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href="/kontakt">
          <motion.div
            className="group relative w-full overflow-hidden border border-white/20 px-6 py-3 text-[15px] font-medium text-[#BDBDBD] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-white/35 hover:text-white active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px]"
            style={{
              borderRadius: "6px",
              backgroundColor: "transparent",
            }}
            variants={buttonVariants}
          >
            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-white/[0.04]" />
              <div className="absolute -left-[100%] top-0 h-full w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 group-hover:left-[100%]" />
            </div>

            <div className="relative z-20 h-[20px] overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                <div className="flex h-[20px] items-center justify-center">
                  {"Rozpocznij projekt".split("").map((char, i) => (
                    <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
                <div className="flex h-[20px] items-center justify-center text-white">
                  {"Rozpocznij projekt".split("").map((char, i) => (
                    <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
