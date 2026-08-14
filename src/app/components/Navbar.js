"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import hilogo from "../Images/hublogo.png";

const portfolioItems = [
  { name: "Logos", href: "/Portfolio/Logos" },
  { name: "Banner", href: "/Portfolio/banner" },
  { name: "2D Model", href: "/Portfolio/Model2D" },
  { name: "3D Model", href: "/Portfolio/Model3D" },
  { name: "2D Animation", href: "/Portfolio/Animation2D" },
  { name: "3D Animation", href: "/Portfolio/Animation3D" },
  { name: "Static Overlay", href: "/Portfolio/StaticOverlay" },
  { name: "Animated Overlay", href: "/Portfolio/AnimatedOverlay" },
  { name: "Emotes", href: "/Portfolio/Emotes" },
  { name: "PFP's", href: "/Portfolio/Pfp" },
  { name: "NFT's", href: "/Portfolio/Nft" },
  { name: "Illustration", href: "/Portfolio/Illustration" },
  { name: "Subbadges", href: "/Portfolio/Subbadges" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobilePortfolioOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#221D17]/[0.07] bg-[#FBF8F2]/90 backdrop-blur-xl font-['Jost']">
      <nav className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-[82px] items-center justify-between lg:h-[90px]">

          {/* ==================== LOGO ==================== */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full">
              <Image
                src={hilogo}
                alt="Hub Of Innovation"
                fill
                priority
                sizes="58px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h1 className="text-[24px] font-bold capitalize leading-none tracking-[-0.03em] text-[#221D17] sm:text-[27px]">
              Hub Of Innovation
            </h1>
          </Link>

          {/* ==================== DESKTOP NAV ==================== */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-9">

            {/* Home + About */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative py-2 text-[16px] font-medium capitalize text-[#221D17] transition-colors duration-300"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 rounded-full bg-[#33473B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* ==================== PORTFOLIO ==================== */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 text-[16px] font-medium capitalize text-[#221D17] transition-colors duration-300"
              >
                Portfolio

                <FiChevronDown className="text-[15px] transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Portfolio Dropdown */}
              <div className="pointer-events-none absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">

                <div className="overflow-hidden rounded-2xl border border-[#221D17]/[0.07] bg-[#FFFDF9] p-5 shadow-[0_20px_60px_rgba(34,29,23,0.10)]">

                  {/* Dropdown Header */}
                  <div className="mb-4 flex items-end justify-between border-b border-[#221D17]/[0.07] pb-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8C8271]">
                        Our Work
                      </p>

                      <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-[#221D17]">
                        Explore Portfolio
                      </h3>
                    </div>

                    <FiArrowUpRight className="text-lg text-[#8C8271]" />
                  </div>

                  {/* Dropdown Items */}
                  <div className="grid grid-cols-3 gap-1">
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group/item rounded-xl px-3 py-3 text-[14px] font-medium text-[#221D17]/70 transition-all duration-200 hover:bg-[#F6F1E6] hover:text-[#221D17]"
                      >
                        <span className="flex items-center justify-between">
                          {item.name}

                          <FiArrowUpRight className="text-sm text-[#33473B] opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== GET IN TOUCH ==================== */}
            <Link
              href="/GetInTouch"
              className="group flex items-center gap-2 rounded-full bg-[#33473B] px-5 py-3 text-[15px] font-medium text-[#F6F1E6] transition-all duration-300 hover:bg-[#28382E]"
            >
              Get In Touch

              <FiArrowUpRight className="text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Contact */}
            <Link
              href="/Contactus"
              className="text-[16px] font-medium capitalize text-[#221D17] transition-colors duration-300 hover:text-[#8C8271]"
            >
              Contact Us
            </Link>
          </div>

          {/* ==================== MOBILE BUTTON ==================== */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#221D17]/10 text-[#221D17] transition-all duration-300 hover:bg-[#33473B] hover:border-[#33473B] hover:text-[#F6F1E6] lg:hidden"
          >
            {mobileMenuOpen ? (
              <IoClose className="text-[23px]" />
            ) : (
              <FaBarsStaggered className="text-[18px]" />
            )}
          </button>
        </div>

        {/* ==================== MOBILE NAV ==================== */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen
              ? "max-h-[900px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#221D17]/[0.06] py-5">

            {/* Home */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center justify-between border-b border-[#221D17]/[0.06] py-4 text-[17px] font-medium text-[#221D17]"
            >
              Home
              <FiArrowUpRight className="text-lg text-[#8C8271]" />
            </Link>

            {/* About */}
            <Link
              href="/aboutus"
              onClick={closeMobileMenu}
              className="flex items-center justify-between border-b border-[#221D17]/[0.06] py-4 text-[17px] font-medium text-[#221D17]"
            >
              About Us
              <FiArrowUpRight className="text-lg text-[#8C8271]" />
            </Link>

            {/* Portfolio */}
            <div className="border-b border-[#221D17]/[0.06]">
              <button
                type="button"
                onClick={() =>
                  setMobilePortfolioOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between py-4 text-[17px] font-medium text-[#221D17]"
              >
                Portfolio

                <FiChevronDown
                  className={`text-lg transition-transform duration-300 ${
                    mobilePortfolioOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Portfolio Items */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  mobilePortfolioOpen
                    ? "max-h-[700px] pb-3 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-1 rounded-xl bg-[#F6F1E6] p-2 sm:grid-cols-3">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-3 text-[14px] font-medium text-[#221D17]/70 transition-colors hover:bg-[#FFFDF9] hover:text-[#221D17]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <Link
              href="/GetInTouch"
              onClick={closeMobileMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#33473B] px-5 py-3.5 text-[15px] font-medium text-[#F6F1E6]"
            >
              Get In Touch
              <FiArrowUpRight className="text-lg" />
            </Link>

            {/* Contact */}
            <Link
              href="/Contactus"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center rounded-full border border-[#221D17]/10 px-5 py-3.5 text-[15px] font-medium text-[#221D17]"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;