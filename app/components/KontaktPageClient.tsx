"use client";

import { useState } from "react";
import { Mail, Phone, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type NotifyType = "info" | "success" | "error";

export default function KontaktPageClient() {
  const shouldReduceMotion = useReducedMotion();
  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.56,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };
  const fieldVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12, filter: shouldReduceMotion ? "none" : "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [notify, setNotify] = useState<{ type: NotifyType; message: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    email: "",
    phone: "",
    message: "",
  });

  const servicesRow1 = ["Strona internetowa", "Branding", "Projekt UI/UX"];
  const servicesRow2 = ["Hosting", "Marketing"];
  const budgetOptions = ["50-300", "300-500", "500-1000", "1000-1500", "1500+"];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
      return;
    }
    setSelectedServices([...selectedServices, service]);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotify({ type: "info", message: "Wysylanie formularza..." });

    if (!formData.name || !formData.email || !formData.message || !formData.budget) {
      setNotify({ type: "error", message: "Uzupelnij imie, e-mail, budzet i opis projektu." });
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, services: selectedServices }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setNotify({ type: "error", message: data.error || "Nie udalo sie wyslac formularza." });
        return;
      }

      setNotify({ type: "success", message: "Wiadomosc wyslana. Dzieki, odezwiemy sie wkrotce." });
      setFormData({ name: "", budget: "", email: "", phone: "", message: "" });
      setSelectedServices([]);
    } catch {
      setNotify({ type: "error", message: "Wystapil blad sieci. Sprobuj ponownie." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col bg-transparent antialiased">
      <motion.div
        className="flex flex-1 flex-col gap-10 px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:gap-12 lg:px-10 xl:flex-row xl:items-start xl:justify-between xl:gap-[64px] xl:px-[240px] xl:pb-[80px] xl:pt-[64px]"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex w-full min-w-0 flex-col items-start xl:min-w-[469px]"
          variants={sectionVariants}
        >
          <p className="text-[13px] font-medium text-[#A1A1AA]">Skontaktuj się</p>
          <h1 className="mt-[12px] bg-gradient-to-r from-[#FFFFFF] to-[#E9E5FF] bg-clip-text text-[36px] font-bold leading-[1.1] text-transparent sm:text-[48px] lg:text-[56px] xl:text-[64px]">
            Twój projekt <br /> zaczyna się tutaj
          </h1>
          <p className="mt-4 max-w-[620px] text-[15px] font-normal text-[#A1A1AA] sm:mt-6 sm:text-[16px] lg:text-[17px]">Napisz kilka słów o projekcie, a wspólnie znajdziemy najlepszy kierunek.</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 xl:mt-[48px]">
            <ContactBox title="Wyślij wiadomość tutaj:" value="hello@afto.works" href="mailto:hello@afto.works" icon={<Mail size={20} className="text-white" />} />
            <ContactBox title="Zadzwoń do mnie pod numer:" value="+48 518 323 533" href="tel:+48518323533" icon={<Phone size={20} className="text-white" />} />
            <ContactBox title="Discord" value="Dołącz do społeczności" href="https://discord.gg/KYtNCvqvvY" icon={<DiscordIcon />} />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="z-10 mb-2 flex w-full shrink-0 flex-col rounded-[16px] border border-[#7F5AF0] bg-[#050507]/25 p-4 backdrop-blur-[5px] sm:p-6 xl:mb-[40px] xl:w-[591px]"
          variants={sectionVariants}
        >
          <h2 className="text-[26px] font-bold text-[#FFFFFF] sm:text-[30px] xl:text-[32px]">Rozpocznij projekt</h2>


          <p className="mt-6 text-left text-[16px] font-medium text-[#FFFFFF] sm:mt-8">Twoje dane</p>
          <motion.div className="mt-5 flex flex-col gap-4 sm:mt-6" variants={sectionVariants}>
            <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2" variants={sectionVariants}>
              <motion.div variants={fieldVariants}>
              <input type="text" placeholder="Wpisz swoje imie" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="h-[56px] w-full rounded-[8px] border border-white/24 bg-transparent px-[16px] text-[16px] text-[#FFFFFF] outline-none transition-all placeholder:text-[#A1A1AA] hover:border-[#7F5AF0] focus:border-[#7F5AF0]" required />
              </motion.div>
              <motion.div className="relative w-full" variants={fieldVariants}>
              <div className="relative w-full">
                <select value={formData.budget} onChange={(e) => handleInputChange("budget", e.target.value)} className="h-[56px] w-full cursor-pointer appearance-none rounded-[8px] border border-white/24 bg-transparent px-[16px] text-[16px] text-[#A1A1AA] outline-none transition-all hover:border-[#7F5AF0] focus:border-[#7F5AF0]" required>
                  <option value="">Wybierz budzet</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#101014] text-white">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2 text-[#A1A1AA]" />
              </div>
              </motion.div>
            </motion.div>
            <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2" variants={sectionVariants}>
              <motion.div variants={fieldVariants}>
              <input type="email" placeholder="Podaj adres e-mail" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="h-[56px] w-full rounded-[8px] border border-white/24 bg-transparent px-[16px] text-[16px] text-[#FFFFFF] outline-none transition-all placeholder:text-[#A1A1AA] hover:border-[#7F5AF0] focus:border-[#7F5AF0]" required />
              </motion.div>
              <motion.div variants={fieldVariants}>
              <input type="tel" placeholder="Podaj numer telefonu" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="h-[56px] w-full rounded-[8px] border border-white/24 bg-transparent px-[16px] text-[16px] text-[#FFFFFF] outline-none transition-all placeholder:text-[#A1A1AA] hover:border-[#7F5AF0] focus:border-[#7F5AF0]" />
              </motion.div>
            </motion.div>
            <motion.div variants={fieldVariants}>
            <textarea placeholder="Opowiedz nam o swoim projekcie" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="h-[120px] w-full resize-none rounded-[8px] border border-white/24 bg-transparent p-[16px] text-[16px] text-[#FFFFFF] outline-none transition-all placeholder:text-[#A1A1AA] hover:border-[#7F5AF0] focus:border-[#7F5AF0]" required />
            </motion.div>
          </motion.div>

          <p className="mt-6 text-left text-[16px] font-medium text-[#FFFFFF] sm:mt-8">Jakie uslugi cie interesuja?</p>
          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {servicesRow1.map((label) => (
                <ServiceCheckbox key={label} label={label} isSelected={selectedServices.includes(label)} onClick={() => toggleService(label)} />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {servicesRow2.map((label) => (
                <ServiceCheckbox key={label} label={label} isSelected={selectedServices.includes(label)} onClick={() => toggleService(label)} />
              ))}
            </div>
          </div>


          {notify ? <FormNotify type={notify.type} message={notify.message} /> : null}
          <button type="submit" disabled={isSending} className="mt-5 h-[56px] w-full rounded-[8px] bg-[#FFFFFF] text-[16px] font-bold text-[#000000] transition-all hover:bg-purple-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70">
            {isSending ? "Wysylanie..." : "Zacznijmy Twoj projekt"}
          </button>
        </motion.form>
      </motion.div>

    </main>
  );
}

function DiscordIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#fff"
        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
      />
    </svg>
  );
}

function FormNotify({ type, message }: { type: NotifyType; message: string }) {
  const styles = {
    info: "border-[#7F5AF0]/50 bg-[#7F5AF0]/15 text-[#E9E5FF]",
    success: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
    error: "border-rose-400/40 bg-rose-500/15 text-rose-200",
  };

  return <p className={`mt-4 rounded-[10px] border px-3 py-2 text-[14px] ${styles[type]}`}>{message}</p>;
}

function ServiceCheckbox({ label, isSelected, onClick }: { label: string; isSelected: boolean; onClick: () => void }) {
  return (
    <label className="group flex cursor-pointer select-none items-center gap-[8px]" onClick={onClick}>
      <div className={`h-[20px] w-[20px] rounded-[4px] border border-[#7F5AF0] transition-all duration-200 ${isSelected ? "bg-[#7F5AF0]" : "bg-transparent"}`} />
      <span className="text-[14px] font-medium text-[#FFFFFF] sm:text-[15px] xl:text-[16px]">{label}</span>
    </label>
  );
}

function ContactBox({ title, value, href, icon }: { title: string; value: string; href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="group relative flex h-[72px] w-full items-center overflow-hidden rounded-[16px] border border-[#7F5AF0] bg-[#050507]/25 px-[12px] backdrop-blur-[5px] transition-all xl:w-[469px]">
      <div className="absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]" />
      <div className="relative z-10 flex w-full items-center">
        <div className="relative flex h-[48px] min-w-[48px] items-center justify-center overflow-hidden rounded-[8px] border border-white/24 bg-[#7F5AF0]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
          {icon}
        </div>
        <div className="ml-[16px] flex flex-1 flex-col justify-center">
          <span className="text-left text-[14px] font-medium leading-tight text-[#A1A1AA]">{title}</span>
          <span className="mt-[2px] text-left text-[16px] font-medium text-[#FFFFFF]">{value}</span>
        </div>
        <ArrowUpRight size={24} className="mr-[12px] text-[#A1A1AA] transition-colors group-hover:text-white" />
      </div>
    </a>
  );
}
