"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import art1 from "../Images/art1.jpg";
import art2 from "../Images/art2.jpeg";
import art3 from "../Images/art3.jpg";
import art4 from "../Images/art4.jpg";
import art5 from "../Images/art5.jpg";
import art6 from "../Images/art6.jpg";
import art7 from "../Images/art7.jpeg";
import art8 from "../Images/art8.jpg";
import art9 from "../Images/art9.jpg";
import art10 from "../Images/art10.jpg";
import art11 from "../Images/art11.jpg";
import art12 from "../Images/art12.jpg";
import art13 from "../Images/art13.jpg";
import art14 from "../Images/art14.jpg";
import art15 from "../Images/art15.jpg";

const artworks = [
  { src: art1, label: "Untitled I" },
  { src: art2, label: "Untitled II" },
  { src: art3, label: "Untitled III" },
  { src: art4, label: "Untitled IV" },
  { src: art5, label: "Untitled V" },
  { src: art6, label: "Untitled VI" },
  { src: art7, label: "Untitled VII" },
  { src: art8, label: "Untitled VIII" },
  { src: art9, label: "Untitled IX" },
  { src: art10, label: "Untitled X" },
  { src: art11, label: "Untitled XI" },
  { src: art12, label: "Untitled XII" },
  { src: art13, label: "Untitled XIII" },
  { src: art14, label: "Untitled XIV" },
  { src: art15, label: "Untitled XV" },
];

// next/image static imports resolve to an object ({src, width, height...});
// plain string paths also work, so this covers both.
const getUrl = (img) => (typeof img === "string" ? img : img.src);

/* ----------------------------------------------------------------------
   Puzzle reveal lightbox: image splits into a scattered grid of pieces,
   then the pieces fly back into place, "solving" the puzzle before the
   full picture is shown. Re-triggers on every prev/next navigation.
------------------------------------------------------------------------*/
const COLS = 6;
const ROWS = 4;

function PuzzleLightbox({ artworks, index, onClose, onPrev, onNext }) {
  const [assembled, setAssembled] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const art = artworks[index];
  const url = getUrl(art.src);

  const pieces = useMemo(() => {
    return Array.from({ length: COLS * ROWS }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 260 + Math.random() * 380;
      return {
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        rot: (Math.random() - 0.5) * 260,
        delay: Math.random() * 380,
      };
    });
  }, [index]);

  useEffect(() => {
    setAssembled(false);
    setShowCaption(false);
    const start = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAssembled(true))
    );
    const captionTimer = setTimeout(() => setShowCaption(true), 1300);
    return () => {
      cancelAnimationFrame(start);
      clearTimeout(captionTimer);
    };
  }, [index]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
      >
        ✕
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous artwork"
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:flex"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next artwork"
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:flex"
      >
        ›
      </button>

      <div
        className="relative aspect-square w-[min(86vw,460px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full overflow-visible rounded-lg shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)]">
          {pieces.map((p, i) => {
            const r = Math.floor(i / COLS);
            const c = i % COLS;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${100 / COLS}%`,
                  height: `${100 / ROWS}%`,
                  left: `${c * (100 / COLS)}%`,
                  top: `${r * (100 / ROWS)}%`,
                  opacity: assembled ? 1 : 0,
                  transform: assembled
                    ? "translate(0,0) rotate(0deg)"
                    : `translate(${p.dx}px, ${p.dy}px) rotate(${p.rot}deg)`,
                  transition: `transform 950ms cubic-bezier(0.22,1,0.36,1) ${p.delay}ms, opacity 450ms ease ${p.delay}ms`,
                  backgroundImage: `url(${url})`,
                  backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(c / (COLS - 1)) * 100}% ${(r / (ROWS - 1)) * 100}%`,
                  boxShadow: assembled ? "none" : "0 8px 20px rgba(0,0,0,0.45)",
                }}
              />
            );
          })}
        </div>

        <div
          className={`absolute inset-x-0 -bottom-12 flex items-center justify-center transition-opacity duration-500 ${
            showCaption ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-sans text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
            {art.label} — {index + 1} / {artworks.length}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------
   Gallery card: soft glass card, colorful ambient glow, gentle 3D tilt.
------------------------------------------------------------------------*/
function ArtCard({ art, index, onOpen }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ ry: (px - 0.5) * 14, rx: (0.5 - py) * 14 });
  }, []);

  const accent = index % 2 === 0 ? "#1c85f3" : "#d42147";

  return (
    <button
      onClick={() => onOpen(index)}
      style={{
        opacity: 0,
        animation: `fadeInUp 0.6s ease forwards`,
        animationDelay: `${(index % 10) * 60}ms`,
      }}
      className="group relative block w-full text-left"
    >
      <div style={{ perspective: "1000px" }}>
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            transformStyle: "preserve-3d",
            transform: hovering
              ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-6px) scale(1.03)`
              : "rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
            transition: hovering
              ? "transform 120ms ease-out"
              : "transform 450ms cubic-bezier(0.22,1,0.36,1)",
          }}
          className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0_10px_30px_-12px_rgba(20,20,20,0.25)] ring-1 ring-black/5"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: accent }}
          />

          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              alt={art.label}
              src={art.src}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 220px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center justify-between px-3 pb-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-white/85">
                  {art.label}
                </span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-xs text-white"
                  style={{ background: accent }}
                >
                  ⤢
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + artworks.length) % artworks.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % artworks.length));

  return (
    <>
      {/* ================= ORIGINAL BANNER — NOW TAILWIND, NO CSS FILE ================= */}
      <div className="HomeSection">
        <div className="relative mx-auto mb-[50px] mt-0 h-[130px] w-[740px] overflow-hidden rounded-2xl bg-[#e8e8e8] font-['Jost',sans-serif] text-[#141414] shadow-[0px_8px_28px_-9px_rgba(0,0,0,0.45)] max-[1024px]:mt-[80px] max-[1024px]:w-[640px] max-[768px]:mt-[50px] max-[768px]:w-[500px] max-[600px]:mt-[35px] max-[600px]:h-[150px] max-[600px]:w-[400px] max-[500px]:mt-0 max-[500px]:h-[150px] max-[500px]:w-[280px]">
          {/* wave 1 (was .wave:nth-child(2) -> 4000ms) */}
          <div className="absolute left-0 top-[210px] -ml-[50%] -mt-[70%] h-[700px] w-[1040px] rounded-[40%] bg-[linear-gradient(89.5deg,#041d37_-0.1%,#024387_25.1%,#1c85f3_49.6%,#73b5fa_74.5%,#d6effd_99.3%)] opacity-60 animate-[wave_4000ms_linear_infinite] max-[1024px]:w-[900px] max-[768px]:w-[650px] max-[600px]:h-[500px] max-[600px]:w-[500px] max-[500px]:h-[400px] max-[500px]:w-[380px]" />
          {/* wave 2 (was .wave:nth-child(3) -> 5000ms) */}
          <div className="absolute left-0 top-[210px] -ml-[50%] -mt-[70%] h-[700px] w-[1040px] rounded-[40%] bg-[linear-gradient(89.5deg,#041d37_-0.1%,#024387_25.1%,#1c85f3_49.6%,#73b5fa_74.5%,#d6effd_99.3%)] opacity-60 animate-[wave_5000ms_linear_infinite] max-[1024px]:w-[900px] max-[768px]:w-[650px] max-[600px]:h-[500px] max-[600px]:w-[500px] max-[500px]:h-[400px] max-[500px]:w-[380px]" />
          {/* wave 3 (default .wave -> 3000ms) */}
          <div className="absolute left-0 top-0 -ml-[50%] -mt-[70%] h-[700px] w-[1040px] rounded-[40%] bg-[linear-gradient(89.5deg,#041d37_-0.1%,#024387_25.1%,#1c85f3_49.6%,#73b5fa_74.5%,#d6effd_99.3%)] opacity-60 animate-[wave_3000ms_linear_infinite] max-[1024px]:w-[900px] max-[768px]:w-[650px] max-[600px]:h-[500px] max-[600px]:w-[500px] max-[500px]:h-[400px] max-[500px]:w-[380px]" />

          <div className="absolute inset-x-0 top-[1em] text-center font-['Jost',sans-serif] text-[20px] font-semibold text-white max-[768px]:text-[17px] max-[600px]:mx-[10px] max-[600px]:text-[15px] max-[500px]:text-[14px]">
            Discover Your Creative Canvas : Unveil Exclusive Art Deals Now !
            <div className="relative top-[1em] text-[14px] font-thin lowercase">
              <Link href="/Deals">
                <button className="group relative mx-auto flex w-max cursor-pointer items-center border-none bg-transparent px-[18px] py-[12px] transition-all duration-200 ease-linear before:absolute before:left-0 before:top-0 before:block before:h-[45px] before:w-[45px] before:rounded-full before:bg-gradient-to-br before:from-[#f5f7fa] before:to-[#c3cfe2] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full active:scale-95 max-[500px]:px-[14px] max-[500px]:py-[10px]">
                  <span className="relative font-['Jost',sans-serif] text-[18px] font-bold tracking-[0.05em] text-black max-[500px]:text-[15px]">
                    Explore
                  </span>
                  <svg
                    width="15px"
                    height="10px"
                    viewBox="0 0 13 10"
                    className="relative ml-[10px] -translate-x-[5px] fill-none stroke-black stroke-2 transition-all duration-300 ease-in-out [stroke-linecap:round] [stroke-linejoin:round] group-hover:translate-x-0"
                  >
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= NEW: MODERN GALLERY SECTION ================= */}
        <section className="mx-auto max-w-6xl px-2 py-16 sm:py-20">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-brand-red">
              Portfolio
            </span>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Unveiling Our Latest{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
                Creations
              </span>
            </h1>
            <p className="mt-4 max-w-md font-sans text-sm text-ink/50">
              Tap any piece — it doesn&apos;t just open, it comes together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
            {artworks.map((art, i) => (
              <ArtCard key={i} art={art} index={i} onOpen={openAt} />
            ))}
          </div>
        </section>
      </div>

      {activeIndex !== null && (
        <PuzzleLightbox
          artworks={artworks}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;