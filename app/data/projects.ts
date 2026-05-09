export type Project = {
  slug: string;
  name: string;
  description: string;
  cover: string;
  website: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "gemhost-design-strony-hosting-minecraft",
    name: "Gemhost – design strony hosting Minecraft",
    description: "Design strony dla Gemhost, zaprojektowany z naciskiem na czytelność, spójność wizualną i nowoczesny charakter.",
    cover: "/portfolio/gemhost/gemhostmockup.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/gemhost/gemhostmockup.png", alt: "Gemhost hosting Minecraft design UI" },
    { src: "/portfolio/gemhost/gemhost1.png", alt: "Gemhost strona główna hosting Minecraft" },
    { src: "/portfolio/gemhost/gemhostfontcolor.png", alt: "Gemhost kolory i typografia design" },
    ]
  },
  {
    slug: "silentmafia-design-strony-gaming-ui",
    name: "Silentmafia – design strony gaming UI",
    description: "Design strony dla Silentmafia, zaprojektowany w ciemnej stylistyce z naciskiem na czytelność, kontrast i nowoczesny interfejs gamingowy.",
    cover: "/portfolio/silentmafia/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/silentmafia/1.png", alt: "Silentmafia gaming UI design mockup" },
    { src: "/portfolio/silentmafia/2.png", alt: "Silentmafia strona główna gaming UI" },
    { src: "/portfolio/silentmafia/3.png", alt: "Silentmafia kolory i typografia design" },
    ]
  },
  {
    slug: "juicyrp",
    name: "JuicyRP – design strony RP gaming",
    description: "Design strony dla JuicyRP, z naciskiem na czytelność, ciepłą kolorystykę i nowoczesny interfejs gamingowy.",
    cover: "/portfolio/juicyrp/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/juicyrp/1.png", alt: "JuicyRP gaming design mockup" },
    { src: "/portfolio/juicyrp/2.png", alt: "JuicyRP strona główna RP UI" },
    { src: "/portfolio/juicyrp/3.png", alt: "JuicyRP kolory i typografia" },
    ]
  },
  {
    slug: "motywo-design-strony-agencja",
    name: "Motywo – design strony agencja marketingowa",
    description: "Design strony dla Motywo, z naciskiem na czytelność, jasny layout i nowoczesny interfejs z zielonymi akcentami.",
    cover: "/portfolio/motywo/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/motywo/1.png", alt: "Motywo design strony agencja marketingowa UI" },
    { src: "/portfolio/motywo/2.png", alt: "Motywo strona główna layout UI" },
    { src: "/portfolio/motywo/3.png", alt: "Motywo kolory i typografia design" },
    ]
  },
  {
    slug: "freshagency-design-strony-portfolio-gaming",
    name: "FreshAgency – design strony portfolio gaming",
    description: "Design strony dla FreshAgency w stylu gamingowym, z naciskiem na kontrast, czytelność i nowoczesny dark UI.",
    cover: "/portfolio/freshagency/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/freshagency/1.png", alt: "FreshAgency gaming portfolio UI design mockup" },
    { src: "/portfolio/freshagency/2.png", alt: "FreshAgency portfolio gaming strona główna UI" },
    { src: "/portfolio/freshagency/3.png", alt: "FreshAgency kolory i typografia design" },
    ]
  },
  {
    slug: "template-sklep-serwer-minecraft-ui",
    name: "Template sklepu – serwer Minecraft",
    description: "Template sklepu dla serwera Minecraft, z naciskiem na czytelność, prosty layout i nowoczesny interfejs UI.",
    cover: "/portfolio/vishop/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/vishop/1.png", alt: "Minecraft sklep serwera UI design mockup" },
    { src: "/portfolio/vishop/2.png", alt: "Panel sklepu Minecraft layout UI" },
    { src: "/portfolio/vishop/3.png", alt: "Kolory i typografia sklepu Minecraft" },
    ]
  },
  {
    slug: "template-portfolio-strona-ui",
    name: "Template portfolio – design strony",
    description: "Template portfolio z naciskiem na czytelność, nowoczesny layout i przejrzysty interfejs UI.",
    cover: "/portfolio/webportfolio/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/webportfolio/1.png", alt: "Template portfolio UI design mockup" },
    { src: "/portfolio/webportfolio/2.png", alt: "Strona portfolio layout UI" },
    { src: "/portfolio/webportfolio/3.png", alt: "Kolory i typografia portfolio design" },
    ]
  },
  {
    slug: "mtomkiel-portfolio-design-strony",
    name: "Mtomkiel – design strony portfolio",
    description: "Design strony portfolio dla Mtomkiel, z naciskiem na czytelność, nowoczesny dark UI i wyraziste fioletowe akcenty.",
    cover: "/portfolio/mtomkiel/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/mtomkiel/1.png", alt: "Mtomkiel portfolio design UI mockup" },
    { src: "/portfolio/mtomkiel/2.png", alt: "Mtomkiel strona portfolio layout UI" },
    { src: "/portfolio/mtomkiel/3.png", alt: "Mtomkiel kolory i typografia design" },
    ]
  },
  {
    slug: "schost-design-strony-hosting-minecraft",
    name: "Schost – design strony hosting Minecraft",
    description: "Design strony dla Schost, z naciskiem na czytelność, jasny layout i fioletowe akcenty dla hostingu Minecraft.",
    cover: "/portfolio/schost/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/schost/1.png", alt: "Schost hosting Minecraft design UI mockup" },
    { src: "/portfolio/schost/2.png", alt: "Schost strona hosting Minecraft layout UI" },
    { src: "/portfolio/schost/3.png", alt: "Schost kolory i typografia design" },
    ]
  },
  {
    slug: "epichost-design-strony-hosting-minecraft-vps",
    name: "Epichost – design strony hosting Minecraft i VPS",
    description: "Design strony dla Epichost, z naciskiem na czytelność, nowoczesny dark UI i fioletowe akcenty dla hostingu Minecraft i VPS.",
    cover: "/portfolio/epichost/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/epichost/1.png", alt: "Epichost hosting Minecraft VPS design UI mockup" },
    { src: "/portfolio/epichost/2.png", alt: "Epichost strona hosting Minecraft i VPS layout UI" },
    { src: "/portfolio/epichost/3.png", alt: "Epichost kolory i typografia design" },
    ]
  },
  {
    slug: "logofolio-projekty-logo",
    name: "Logofolio – projekty logo",
    description: "Zbiór projektów logo w nowoczesnym i minimalistycznym stylu.",
    cover: "/portfolio/logofolio/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/logofolio/2.png", alt: "logo dla tradie" },
    { src: "/portfolio/logofolio/3.png", alt: "logo dla epichost" },
    { src: "/portfolio/logofolio/4.png", alt: "logo dla ertishub" },
    { src: "/portfolio/logofolio/5.png", alt: "logo dla cdr" },
    { src: "/portfolio/logofolio/6.png", alt: "logo dla szymi" },
    { src: "/portfolio/logofolio/7.png", alt: "logo dla to i owo store" },
    { src: "/portfolio/logofolio/8.png", alt: "logo dla klienta" },    
    ]
  },   
  {
    slug: "miniaturki-youtube-minecraft",
    name: "Miniaturki – YouTube Minecraft",
    description: "Miniaturki dla YouTuberów",
    cover: "/portfolio/miniaturki/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/miniaturki/2.png", alt: "Miniaturka dla TrombaPowietrzna" },
    { src: "/portfolio/miniaturki/3.png", alt: "Miniaturka dla klienta" },
    { src: "/portfolio/miniaturki/4.png", alt: "Miniaturka dla Shogy" },
    { src: "/portfolio/miniaturki/5.png", alt: "Miniaturka dla Zeftis" },
    { src: "/portfolio/miniaturki/6.png", alt: "Miniaturka dla bejterek" },
    { src: "/portfolio/miniaturki/7.png", alt: "Miniaturka dla Zombiaczek" },
    { src: "/portfolio/miniaturki/8.png", alt: "Miniaturka dla Shogy" },
    { src: "/portfolio/miniaturki/9.png", alt: "Miniaturka dla klienta" },        
    ]
  },  
  {
    slug: "bannery-youtube-minecraft",
    name: "Bannery – YouTube Minecraft",
    description: "Bannery YouTube w stylu gamingowym dla twórców.",
    cover: "/portfolio/bannery/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/bannery/2.png", alt: "Banner dla k3ymilo" },
    { src: "/portfolio/bannery/3.png", alt: "Banner dla xalanix" },
    { src: "/portfolio/bannery/4.png", alt: "Banner dla Strycha" },
    { src: "/portfolio/bannery/5.png", alt: "Banner dla xkaj0" },
    { src: "/portfolio/bannery/6.png", alt: "Banner dla codemixtm" },
    { src: "/portfolio/bannery/7.png", alt: "Banner dla blueshark" },    
    ]
  },  
  {
    slug: "ikony-itemshop-minecraft",
    name: "Ikony – itemshop Minecraft",
    description: "Ikony do itemshopów i sklepów Minecraft w stylu gamingowym.",
    cover: "/portfolio/icons/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/icons/2.png", alt: "Ikonki itemshop dla klienta" },
    { src: "/portfolio/icons/3.png", alt: "Ikonki itemshop dla klienta" },
    { src: "/portfolio/icons/4.png", alt: "Ikonki itemshop dla klienta" },
    { src: "/portfolio/icons/5.png", alt: "Ikonki itemshop dla klienta" }, 
    ]
  }, 
  {
    slug: "minecraft-lobby-bannery",
    name: "Minecraft Lobby Bannery",
    description: "Bannery na lobby dla serwerów Minecraft",
    cover: "/portfolio/bannerforlobby/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/bannerforlobby/2.png", alt: "dla klienta" },
    { src: "/portfolio/bannerforlobby/3.png", alt: "dla klienta" },
    ]
  },    
  {
    slug: "grafiki-embedy-discord",
    name: "Grafiki – embedy Discord",
    description: "Grafiki do embedów Discord",
    cover: "/portfolio/embedy/1.png",
    website: "https://twojastrona.pl",
    images: [
    { src: "/portfolio/embedy/2.png", alt: "Grafika do embedu Discord" },
    { src: "/portfolio/embedy/3.png", alt: "Grafika do embedu Discord" },
    { src: "/portfolio/embedy/4.png", alt: "Grafika do embedu Discord" },
    { src: "/portfolio/embedy/5.png", alt: "Grafika do embedu Discord" },
    { src: "/portfolio/embedy/6.png", alt: "Grafika do embedu Discord" },
    ]
  },       
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
