"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import hilogo from "../Images/hublogo.png";

const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/aboutus"],
  ["Portfolio", "/Portfolio/Logos"],
  ["Contact", "/Contactus"],
];

const Footer = () => {
  return (
    <footer className="relative bg-[#EDE3D0] font-jost text-[#221D17]">
      {/* shimmering pine hairline — top of footer */}
      <div className="relative h-px w-full overflow-hidden bg-[#221D17]/[0.08]">
        <div className="absolute inset-y-0 w-1/3 animate-[shimmerLine_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#33473B]/70 to-transparent motion-reduce:hidden" />
      </div>

      {/* faint paper grain instead of a glow — fits the warm tone */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        {/* =========================================
            CTA ROW
        ========================================== */}
        <div className="flex flex-col gap-5 border-b border-[#221D17]/[0.08] py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33473B] opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#33473B]" />
            </span>
            <p className="text-[19px] font-normal tracking-[-0.01em] text-[#221D17] sm:text-[22px]">
              Have a project in mind?{" "}
              <span className="text-[#8C8271]">Let&apos;s talk.</span>
            </p>
          </div>

          <Link
            href="/GetInTouch"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-full border border-[#33473B]/30 px-5 py-2.5 text-[13px] font-medium text-[#221D17] transition-colors duration-300 hover:border-[#33473B]/60"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#33473B]/[0.08] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            Start a Project
            <FiArrowUpRight className="text-[14px] text-[#33473B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* =========================================
            COLUMNS
        ========================================== */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div style={{ perspective: "400px" }}>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full p-[1.5px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(20deg)_rotateX(6deg)]">
                  <div
                    className="absolute inset-0 rounded-full opacity-80"
                    style={{
                      background:
                        "conic-gradient(from 180deg, #33473B, transparent 30%, transparent 70%, #33473B)",
                    }}
                  />
                  <Image
                    src={hilogo}
                    width={36}
                    height={36}
                    alt="Hub Of Innovation"
                    className="relative h-9 w-9 rounded-full bg-[#EDE3D0]"
                  />
                </div>
              </div>
              <span className="text-[15px] font-medium tracking-[-0.01em]">Hub Of Innovation</span>
            </Link>

            <p className="mt-4 max-w-[280px] text-[13px] leading-6 text-[#8C8271]">
              Creative design, digital art and animation, crafted with imagination.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#8C8271]">Explore</p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-1.5 text-[13px] text-[#221D17]/70 transition-colors duration-300 hover:text-[#221D17]"
                >
                  {label}
                  <FiArrowUpRight className="-translate-x-1 text-[11px] text-[#33473B] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#8C8271]">Connect</p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.behance.net/hubofinnovation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#221D17]/15 text-[#221D17]/70 transition-all duration-300 hover:scale-105 hover:border-[#33473B] hover:bg-[#33473B] hover:text-[#EDE3D0]"
              >
                <FaBehance className="text-[13px]" />
              </Link>
              <Link
                href="https://x.com/hubofinnovation?t=laksvKZ0JgQwS4R8O8PP7w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#221D17]/15 text-[#221D17]/70 transition-all duration-300 hover:scale-105 hover:border-[#33473B] hover:bg-[#33473B] hover:text-[#EDE3D0]"
              >
                <FaXTwitter className="text-[13px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM
        ========================================== */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#221D17]/[0.08] py-5 text-[11px] text-[#8C8271] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Hub Of Innovation. All rights reserved.</p>

          <Link
            href="/"
            className="group flex items-center gap-1.5 transition-colors duration-300 hover:text-[#221D17]"
          >
            Back to top
            <FiArrowUpRight className="text-[11px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmerLine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(320%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;