import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import { site } from "@/content/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: `${site.name} — Wedding, Candid & Baby Photography in Chennai`,
  description: site.intro,
  keywords: [
    "photographer in Chennai",
    "wedding photography Chennai",
    "candid photography",
    "candid video",
    "baby shoot Chennai",
    "couple shoot",
    "Arani photographer",
    "Magesh Photography",
  ],
  openGraph: {
    title: site.name,
    description: site.intro,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0d0c0b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} is-loading`} suppressHydrationWarning>
      <body>
        <noscript>
          <style>{`.loader{display:none!important}.is-loading body{overflow:auto!important}.is-loading .hero *{animation-play-state:running!important}`}</style>
        </noscript>
        <div className="grain" aria-hidden="true" />
        <Loader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
