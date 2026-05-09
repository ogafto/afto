"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="relative z-50 w-full bg-transparent px-4 py-0 antialiased sm:px-6 lg:px-[240px]"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 2.55,
        duration: shouldReduceMotion ? 0 : 0.56,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="mx-auto flex h-[67px] w-full max-w-[1440px] flex-col justify-center gap-4 text-center sm:text-left lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[12px] font-medium text-[#FFFFFF] opacity-60 sm:text-[13px] lg:text-[14px]">
          © 2025 Afto.Works. Wszelkie prawa zastrzeżone.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:gap-9">
          <FooterLink label="Zacznij projekt" href="/kontakt" />
          <FooterLink label="Napisz do mnie" href="/kontakt" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-end lg:gap-9">
          <FooterLink label="Dribbble" href="https://dribbble.com/afto" />
          <FooterLink label="Behance" href="https://www.behance.net/afto" />
          <FooterLink label="Discord" href="https://discord.gg/KYtNCvqvvY" />
        </div>
      </div>
    </motion.footer>
  );
}

function FooterLink({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a href={href} className="group relative block h-[20px] cursor-pointer overflow-hidden">
      <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
        <div className="flex h-[20px] items-center text-[14px] font-medium text-[#FFFFFF] opacity-80">{label}</div>
        <div className="flex h-[20px] items-center text-[14px] font-medium text-white">{label}</div>
      </div>
    </a>
  );
}
