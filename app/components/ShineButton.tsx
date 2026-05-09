export default function ShineButton({ text }: { text: string }) {
  return (
    <button className="group relative overflow-hidden px-6 py-3 bg-[#7F5AF0] text-white font-bold rounded-[6px] transition-all active:scale-95 shadow-lg">
      
      {/* Napis na przycisku */}
      <span className="relative z-10">{text}</span>

      {/* EFEKT BŁYSKU (SHINE) */}
      <div className="absolute inset-0 z-0 flex h-full w-full justify-center">
        <div className="relative h-full w-full">
          <div className="absolute -left-[100%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-500 group-hover:left-[150%]" />
        </div>
      </div>

    </button>
  );
}