"use client";

import React, { useRef, useState } from "react";

/* Inline icons (no external icon package required) */
const IconUser = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
const IconMessage = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconArrow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);
const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/**
 * ContactUs — aligned to the Hub Of Innovation brand system already
 * established in the navbar: warm ivory ground, a gold emblem accent
 * (echoing the circular "H" mark), a deep forest-green call-to-action
 * (matching "Get In Touch"), and a serif display face paired with the
 * site's existing Jost body type.
 *
 * Signature element: a single gold ring behind the headline, echoing the
 * logo's circular mark, plus a card that tilts gently in 3D and a
 * magnetic send button — restrained, not flashy.
 */

const ContactUs = () => {
  const cardRef = useRef(null);
  const btnRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleCardMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const handleCardLeave = () => setTilt({ x: 0, y: 0 });

  const handleBtnMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.3;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    setBtnPos({ x, y });
  };

  const handleBtnLeave = () => setBtnPos({ x: 0, y: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3200);
  };

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F7F2E7] px-6 py-24"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* soft gold emblem glow, echoing the logo mark */}
      <div className="pointer-events-none absolute left-1/2 top-[6%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9992E] opacity-[0.10] blur-[110px]" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        {/* eyebrow */}
        <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-[#1F3D2E]">
          <span className="h-[1px] w-6 bg-[#C9992E]" />
          Get in touch
          <span className="h-[1px] w-6 bg-[#C9992E]" />
        </span>

        {/* headline with a single gold ring, echoing the logo emblem */}
        <div className="relative mb-14 flex items-center justify-center">
          <span className="absolute h-28 w-28 rounded-full border border-[#C9992E]/35" />
          <span className="absolute h-28 w-28 rounded-full border border-[#C9992E]/60 animate-[ping_3.5s_ease-out_infinite]" />
          <h1
            className="relative px-4 text-center text-[42px] font-bold leading-[1.08] tracking-tight text-[#221F1A] sm:text-[56px]"
            style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
          >
            Reach Out
            <br />
            <span className="text-[#1F3D2E]">to Us.</span>
          </h1>
        </div>

        {/* tilt card */}
        <div style={{ perspective: "1200px" }} className="w-full">
          <form
            ref={cardRef}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            onSubmit={handleSubmit}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.25s ease-out",
              transformStyle: "preserve-3d",
            }}
            className="w-full rounded-2xl border border-[#221F1A]/10 bg-white p-8 shadow-[0_25px_50px_-20px_rgba(34,31,26,0.25)] sm:p-10"
          >
            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* name field */}
              <div className="relative">
                <IconUser className="pointer-events-none absolute left-4 top-[18px] h-4 w-4 text-[#8A8374]" />
                <input
                  id="fullname"
                  type="text"
                  placeholder=" "
                  required
                  className="peer w-full rounded-lg border border-[#221F1A]/15 bg-[#FBF8F1] py-4 pl-11 pr-4 text-[15px] text-[#221F1A] outline-none transition-colors focus:border-[#1F3D2E]"
                />
                <label
                  htmlFor="fullname"
                  className="pointer-events-none absolute left-11 top-4 text-[15px] text-[#8A8374] transition-all duration-200 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-[#1F3D2E] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Full name
                </label>
              </div>

              {/* email field */}
              <div className="relative">
                <IconMail className="pointer-events-none absolute left-4 top-[18px] h-4 w-4 text-[#8A8374]" />
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                  className="peer w-full rounded-lg border border-[#221F1A]/15 bg-[#FBF8F1] py-4 pl-11 pr-4 text-[15px] text-[#221F1A] outline-none transition-colors focus:border-[#1F3D2E]"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-11 top-4 text-[15px] text-[#8A8374] transition-all duration-200 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-[#1F3D2E] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  E-mail address
                </label>
              </div>
            </div>

            {/* message field */}
            <div className="relative mb-8">
              <IconMessage className="pointer-events-none absolute left-4 top-[18px] h-4 w-4 text-[#8A8374]" />
              <textarea
                id="message"
                placeholder=" "
                required
                rows={5}
                className="peer w-full resize-none rounded-lg border border-[#221F1A]/15 bg-[#FBF8F1] py-4 pl-11 pr-4 text-[15px] leading-relaxed text-[#221F1A] outline-none transition-colors focus:border-[#1F3D2E]"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-11 top-4 text-[15px] text-[#8A8374] transition-all duration-200 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-[#1F3D2E] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Write us a message
              </label>
            </div>

            {/* magnetic submit button, matching the navbar's "Get In Touch" pill */}
            <div className="flex justify-center">
              <button
                ref={btnRef}
                type="submit"
                onMouseMove={handleBtnMove}
                onMouseLeave={handleBtnLeave}
                style={{
                  transform: `translate(${btnPos.x}px, ${btnPos.y}px)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#1F3D2E] px-9 py-4 text-[15px] font-medium text-white shadow-[0_10px_25px_-8px_rgba(31,61,46,0.5)] transition-transform hover:bg-[#234A37] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "sent" ? (
                    <>
                      <IconCheck className="h-4 w-4" /> Message sent
                    </>
                  ) : (
                    <>
                      Send message
                      <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </span>
                {status === "sent" && (
                  <span className="absolute inset-0 animate-[ping_0.8s_ease-out_1] rounded-full bg-[#C9992E]/60" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;