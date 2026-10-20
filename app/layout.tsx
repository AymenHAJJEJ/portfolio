import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aymen HAJJEJ — Full Stack Developer",
  description:
    "Portfolio of Aymen HAJJEJ, a Full Stack Developer (MERN, Python, Java) with a mechanical engineering background and growing expertise in AI.",
  authors: [{ name: "Aymen HAJJEJ" }],
  openGraph: {
    title: "Aymen HAJJEJ — Full Stack Developer",
    description:
      "Full Stack Developer working with MERN, Python, Java, and AI. Based in Gabès, Tunisia.",
    type: "website",
    images: ["/aymen.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#4a4d52",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
