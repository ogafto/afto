"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="relative z-50 w-full bg-transparent px-4 pt-4 antialiased sm:px-6 sm:pt-5 lg:px-[240px] lg:pt-[48px]"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 1.25,
        duration: shouldReduceMotion ? 0 : 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} priority />
        </Link>

        <MobileMenu />
      </div>

      <div className="hidden items-center justify-between gap-3 lg:flex">
        <div className="flex items-center gap-4 lg:gap-12">
          <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95">
            <Image src="/logo.svg" alt="Logo" width={48} height={50} priority />
          </Link>

          <div className="flex items-center gap-6 lg:gap-10">
            <NavLink href="/" label="Start" />
            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/kontakt" label="Kontakt" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center leading-none">
            <div
              className="animate-pulse rounded-full"
              style={{ width: "6px", height: "6px", backgroundColor: "#00FD11", boxShadow: "0 0 8px #00FD11" }}
            />
            <span className="ml-[10px] text-[13px] font-medium tracking-tight text-[#EAEAEA] opacity-90 lg:text-[14px]">
              Dostepny do pracy
            </span>
          </div>

          <StartProjectButton className="ml-4 lg:ml-6" />
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group relative block h-[22px] overflow-hidden">
      <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
        <div className="flex h-[22px] items-center">
          {label.split("").map((char, i) => (
            <span key={i} className="text-[14px] font-medium text-[#C7C9D1] transition-all lg:text-[16px]" style={{ transitionDelay: `${i * 30}ms` }}>
              {char}
            </span>
          ))}
        </div>
        <div className="flex h-[22px] items-center">
          {label.split("").map((char, i) => (
            <span key={i} className="text-[14px] font-medium text-white lg:text-[16px]" style={{ transitionDelay: `${i * 30}ms` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        aria-expanded={open}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setOpen((s) => !s)}
        className="inline-flex h-10 w-10 items-center justify-center p-0 text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60"
      >
        <span className="sr-only">Menu</span>
        {open ? <MenuXIcon /> : <MenuHamburgerIcon />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Zamknij menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/35 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col px-4 pb-6 pt-4"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center p-0 text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60"
                aria-label="Zamknij menu"
              >
                <MenuXIcon />
              </button>
            </div>

            <nav className="ml-auto flex flex-col items-end gap-3 pr-1">
              <MenuLink href="/" label="Start" onClick={() => setOpen(false)} />
              <MenuLink href="/portfolio" label="Portfolio" onClick={() => setOpen(false)} />
              <MenuLink href="/kontakt" label="Kontakt" onClick={() => setOpen(false)} />
            </nav>

            <StartProjectButton className="ml-auto mt-4" />
          </motion.div>
        </>
      ) : null}
    </div>
  );
}

function MenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[22px] font-medium leading-tight text-[#EAEAEA] transition-colors duration-200 hover:text-white"
    >
      {label}
    </Link>
  );
}

function StartProjectButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/kontakt"
      className={`group relative overflow-hidden rounded-[6px] border border-white/25 px-4 py-2.5 text-[13px] font-medium text-[#EAEAEA] shadow-[0_0_20px_-5px_rgba(127,90,240,0.4)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 lg:px-6 lg:py-3 lg:text-[14px] ${className}`}
      style={{ backgroundColor: "#7F5AF0" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[100%] top-0 h-full w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[100%]" />
      </div>

      <div className="relative z-20 h-[20px] overflow-hidden">
        <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
          <div className="flex h-[20px] items-center justify-center">
            {"Zacznij projekt".split("").map((char, i) => (
              <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="flex h-[20px] items-center justify-center text-white">
            {"Zacznij projekt".split("").map((char, i) => (
              <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function MenuXIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8">
      <path
        d="M16.0001 17.8667L9.46673 24.4001C9.22229 24.6445 8.91118 24.7667 8.5334 24.7667C8.15562 24.7667 7.84451 24.6445 7.60006 24.4001C7.35562 24.1556 7.2334 23.8445 7.2334 23.4667C7.2334 23.089 7.35562 22.7778 7.60006 22.5334L14.1334 16.0001L7.60006 9.46673C7.35562 9.22229 7.2334 8.91118 7.2334 8.5334C7.2334 8.15562 7.35562 7.84451 7.60006 7.60006C7.84451 7.35562 8.15562 7.2334 8.5334 7.2334C8.91118 7.2334 9.22229 7.35562 9.46673 7.60006L16.0001 14.1334L22.5334 7.60006C22.7778 7.35562 23.089 7.2334 23.4667 7.2334C23.8445 7.2334 24.1556 7.35562 24.4001 7.60006C24.6445 7.84451 24.7667 8.15562 24.7667 8.5334C24.7667 8.91118 24.6445 9.22229 24.4001 9.46673L17.8667 16.0001L24.4001 22.5334C24.6445 22.7778 24.7667 23.089 24.7667 23.4667C24.7667 23.8445 24.6445 24.1556 24.4001 24.4001C24.1556 24.6445 23.8445 24.7667 23.4667 24.7667C23.089 24.7667 22.7778 24.6445 22.5334 24.4001L16.0001 17.8667Z"
        fill="white"
      />
    </svg>
  );
}

function MenuHamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d="M4 18C3.71667 18 3.47934 17.904 3.288 17.712C3.09667 17.52 3.00067 17.2827 3 17C2.99934 16.7173 3.09534 16.48 3.288 16.288C3.48067 16.096 3.718 16 4 16H20C20.2833 16 20.521 16.096 20.713 16.288C20.905 16.48 21.0007 16.7173 21 17C20.9993 17.2827 20.9033 17.5203 20.712 17.713C20.5207 17.9057 20.2833 18.0013 20 18H4ZM4 13C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H4ZM4 8C3.71667 8 3.47934 7.904 3.288 7.712C3.09667 7.52 3.00067 7.28267 3 7C2.99934 6.71733 3.09534 6.48 3.288 6.288C3.48067 6.096 3.718 6 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71733 21 7C20.9993 7.28267 20.9033 7.52033 20.712 7.713C20.5207 7.90567 20.2833 8.00133 20 8H4Z"
        fill="white"
      />
    </svg>
  );
}
