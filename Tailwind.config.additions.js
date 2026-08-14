/**
 * Merge into your existing tailwind.config.js -> theme.extend.
 * Only 3 colors are new — everything else in the redesigned
 * section uses default Tailwind utilities. The old CSS file
 * (HomeSection.css) does NOT need to change; the banner
 * (.e-card, .wave, .infotop, .name, .cta) still reads from it
 * exactly as before. The .HomeSection, .HomeSectionContainer,
 * .ImageBox, and h1 rules in that file are simply unused now —
 * safe to leave them or delete them, your call.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        ink: "#141414",        // matches the original .e-card text color
        "brand-blue": "#1c85f3", // pulled from the existing wave gradient
        "brand-red": "#d42147",  // the original accent red used on "U"
      },
    },
  },
};