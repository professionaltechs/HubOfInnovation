import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Hub of Innovation",
  description:
    "Hub of Innovation — Creative design, animation, illustration and digital art services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="p:domain_verify"
          content="465c43d35b71192355f4e6d3ba74df08"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={`${jost.variable} font-jost`}>
        {children}
      </body>
    </html>
  );
}