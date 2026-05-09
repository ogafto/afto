"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import Hero from "./hero";
import Portfolio from "./portfolio";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <motion.main
      className="flex min-h-0 flex-1 flex-col overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
    >
      <div className="flex flex-col">
        <Hero />
        <Portfolio />
      </div>
    </motion.main>
  );
}
