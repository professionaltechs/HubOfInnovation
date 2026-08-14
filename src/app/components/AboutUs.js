"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiPenTool,
  FiImage,
  FiLayers,
  FiBox,
  FiFeather,
  FiHexagon,
  FiSmile,
  FiSquare,
} from "react-icons/fi";
import hilogo from "../Images/hublogo.png";

// Featured-work stack images (unchanged)
import stackLogo from "../Images/logo3.jpg";
import stackModel3d from "../Images/model3d3.png";
import stackIllustration from "../Images/illustration3.jpg";
import stackEmote from "../Images/emote3.jpg";

/* Fades + rises content once it scrolls into view */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* SIGNATURE #1 — hero: floating, mouse-tilted 3D tiles that double as portfolio shortcuts */
const SCENE_TILES = [
  { label: "Identity", href: "/Portfolio/Logos", color: "#C1694F", x: -128, y: -46, z: 70, r: -8 },
  { label: "Motion", href: "/Portfolio/Animation2D", color: "#3E7C74", x: 118, y: -88, z: 30, r: 6 },
  { label: "3D", href: "/Portfolio/Model3D", color: "#C9973F", x: 140, y: 58, z: 96, r: -4 },
  { label: "Illustration", href: "/Portfolio/Illustration", color: "#33473B", x: -110, y: 96, z: 44, r: 9 },
];

function HeroScene() {
  const sceneRef = useRef(null);
  const rest = { rx: 8, ry: -10 };
  const [tilt, setTilt] = useState(rest);

  const handleMove = (e) => {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: rest.rx - py * 16, ry: rest.ry + px * 20 });
  };

  return (
    <div style={{ perspective: "1600px" }} className="mx-auto h-[360px] w-full max-w-[520px] sm:h-[420px]">
      <div
        ref={sceneRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt(rest)}
        className="relative h-full w-full transition-transform duration-500 ease-out motion-reduce:!transform-none"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#221D17]/10 bg-[#FFFDF9] shadow-[0_25px_50px_-18px_rgba(34,29,23,0.35)]">
          <Image src={hilogo} width={44} height={44} alt="Hub Of Innovation" className="h-11 w-11 rounded-full" />
        </div>

        {SCENE_TILES.map((t, i) => (
          <div
            key={t.label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) translate3d(${t.x}px, ${t.y}px, ${t.z}px) rotate(${t.r}deg)`,
            }}
          >
            <Link
              href={t.href}
              className="group flex h-[84px] w-[84px] items-center justify-center rounded-2xl text-center text-[11px] font-medium uppercase tracking-[0.06em] text-[#F6F1E6] shadow-[0_25px_45px_-16px_rgba(34,29,23,0.4)] transition-transform duration-300 hover:scale-[1.06] motion-reduce:animate-none"
              style={{
                backgroundColor: t.color,
                animation: `floatTile 5.5s ease-in-out ${i * 0.4}s infinite alternate`,
              }}
            >
              {t.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* SIGNATURE #2 — a fanned 3D stack of real work, tilts toward the cursor */
function WorkStack() {
  const stackRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e) => {
    const el = stackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 8 });
  };

  const cards = [
    { src: stackLogo, r: -11, x: -105, z: 0 },
    { src: stackIllustration, r: -3, x: -35, z: 20 },
    { src: stackEmote, r: 5, x: 35, z: 20 },
    { src: stackModel3d, r: 12, x: 105, z: 0 },
  ];

  return (
    <div style={{ perspective: "1300px" }}>
      <div
        ref={stackRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        className="relative mx-auto flex h-[300px] w-full max-w-[560px] items-center justify-center transition-transform duration-300 ease-out motion-reduce:!transform-none"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="absolute h-[250px] w-[180px] overflow-hidden rounded-2xl border border-[#221D17]/[0.08] shadow-[0_30px_55px_-20px_rgba(34,29,23,0.35)] transition-transform duration-300 hover:z-30 hover:-translate-y-3"
            style={{
              transform: `translateX(${c.x}px) translateZ(${c.z}px) rotate(${c.r}deg)`,
              zIndex: i,
            }}
          >
            <Image src={c.src} alt="Featured work" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* SIGNATURE #3 — portfolio section: category tiles orbiting a center hub, like planets */
const ORBIT_ITEMS = [
  { label: "Logos", href: "/Portfolio/Logos", icon: FiPenTool, color: "#C1694F" },
  { label: "Banners", href: "/Portfolio/banner", icon: FiImage, color: "#3E7C74" },
  { label: "2D Models", href: "/Portfolio/Model2D", icon: FiLayers, color: "#C9973F" },
  { label: "3D Models", href: "/Portfolio/Model3D", icon: FiBox, color: "#33473B" },
  { label: "Illustration", href: "/Portfolio/Illustration", icon: FiFeather, color: "#8A5A44" },
  { label: "NFT's", href: "/Portfolio/Nft", icon: FiHexagon, color: "#4A6670" },
  { label: "Emotes", href: "/Portfolio/Emotes", icon: FiSmile, color: "#B5793B" },
  { label: "Static Overlay", href: "/Portfolio/StaticOverlay", icon: FiSquare, color: "#5C5240" },
];

function OrbitShowcase() {
  const count = ORBIT_ITEMS.length;
  const angleStep = 360 / count;

  return (
    <div
      style={{ perspective: "1500px" }}
      className="orbit-wrap relative mx-auto h-[380px] w-full max-w-[720px] sm:h-[440px]"
    >
      {/* center hub */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#221D17]/10 bg-[#FFFDF9] shadow-[0_25px_50px_-18px_rgba(34,29,23,0.35)]">
        <Image src={hilogo} width={38} height={38} alt="Hub Of Innovation" className="h-9 w-9 rounded-full" />
      </div>

      {/* faint orbit ring for depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#221D17]/[0.08] sm:h-[320px] sm:w-[320px]" />

      <div className="orbit-ring absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {ORBIT_ITEMS.map((item, i) => {
          const Icon = item.icon;
          const angle = i * angleStep;
          return (
            <div
              key={item.label}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{
                transform: `rotate(${angle}deg) translateX(190px) rotate(${-angle}deg)`,
              }}
            >
              <Link
                href={item.href}
                className="orbit-item group flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl px-3 py-4"
                style={{
                  animation: `bobTile 4.5s ease-in-out ${i * 0.3}s infinite alternate`,
                }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_20px_38px_-14px_rgba(34,29,23,0.4)] transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="text-[20px] text-[#F6F1E6]" />
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.04em] text-[#221D17]">
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .orbit-ring {
          animation: orbitSpin 40s linear infinite;
        }
        .orbit-wrap:hover .orbit-ring {
          animation-play-state: paused;
        }
        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

const AboutUs = () => {
  return (
    <div className="bg-[#F6F1E6] font-jost">
      {/* =========================================
          HERO — text + 3D scene
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#33473B]/[0.06] blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-12 lg:px-14">
          <Reveal className="lg:col-span-6">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#33473B]">Who we are</p>
            <h1 className="text-[42px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#221D17] sm:text-[54px] lg:text-[60px]">
              About Us
            </h1>
            <p className="mt-6 max-w-[420px] text-[15px] leading-7 text-[#565144]">
              A design studio built on imagination — identity,
              motion and digital craft, shaped by a team that
              cares about the details.
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <HeroScene />
          </Reveal>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================== */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#33473B]">Something about us</p>
            <h2 className="mt-4 text-[28px] font-normal leading-[1.25] tracking-[-0.01em] text-[#221D17] sm:text-[34px] lg:text-[38px]">
              We are Hub Of Innovation — a studio run on{" "}
              <span className="font-serif italic font-light text-[#33473B]">imagination</span>.
            </h2>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6 lg:col-span-7">
            <p className="text-[15px] leading-7 text-[#565144]">
              Welcome to Hub Of Innovation. We&apos;re a dynamic team of
              designers with one goal: turning your ideas into
              work that actually lands. Whether you need a logo
              that carries a whole brand, banners that stop the
              scroll, or a full brand experience, we build it
              with intent.
            </p>
            <p className="text-[15px] leading-7 text-[#565144]">
              Creativity is at the heart of everything we do. We&apos;re
              designers, artists and innovators who turn ideas into
              visually striking realities — from sleek logos to
              immersive animation. We&apos;re not just designers; we&apos;re
              partners in getting it right.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-16">
          <WorkStack />
        </Reveal>
      </section>

      {/* =========================================
          PORTFOLIO — orbiting category hub
      ========================================== */}
      <section className="border-t border-[#221D17]/[0.06] bg-[#EDE3D0] py-20 sm:py-24">
        <Reveal className="mx-auto max-w-[1320px] px-6 text-center sm:px-10 lg:px-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#33473B]">Explore our work</p>
          <h2 className="mx-auto mt-4 max-w-[520px] text-[30px] font-semibold capitalize tracking-[-0.01em] text-[#221D17] sm:text-[38px]">
            Our portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-7 text-[#565144]">
            A strong portfolio is how we show, not tell — spanning
            digital painting, illustration, 3D modelling and
            interactive work built for real brands.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <OrbitShowcase />
        </Reveal>

        <Reveal delay={250} className="mt-14 flex justify-center">
          <Link
            href="/Portfolio/Logos"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#221D17]/20 px-6 py-3 text-[13px] font-medium text-[#221D17] transition-all duration-300 hover:border-[#33473B]/60 hover:bg-[#33473B]/[0.06]"
          >
            View Full Portfolio
            <FiArrowUpRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </section>

      <style jsx global>{`
        @keyframes floatTile {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-10px);
          }
        }
        @keyframes bobTile {
          from {
            transform: translate(-50%, -50%) translateY(0px);
          }
          to {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;