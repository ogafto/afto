"use client";

import { motion, useReducedMotion } from "framer-motion";
import Hero from "./hero";
import Portfolio from "./portfolio";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.main
      className="flex min-h-0 flex-1 flex-col"
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