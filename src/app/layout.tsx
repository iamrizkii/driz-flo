import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DRIZ.FLO - Kreasi Cantik dari Kawat Bulu",
  description: "DRIZ.FLO adalah brand kerajinan kreatif yang menghadirkan produk handmade berkualitas dari kawat bulu (pipe cleaner). Buket bunga, gantungan kunci, dekorasi, dan produk custom lainnya.",
  keywords: ["kawat bulu", "pipe cleaner", "buket bunga", "handmade", "kerajinan tangan", "gantungan kunci", "dekorasi", "DRIZ.FLO", "bunga handmade"],
  authors: [{ name: "DRIZ.FLO" }],
  creator: "DRIZ.FLO",
  publisher: "DRIZ.FLO",
  openGraph: {
    title: "DRIZ.FLO - Kreasi Cantik dari Kawat Bulu",
    description: "Buket bunga, gantungan kunci, dan dekorasi unik dari kawat bulu yang dibuat dengan penuh cinta.",
    url: "https://driz-flo.vercel.app",
    siteName: "DRIZ.FLO",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DRIZ.FLO - Kreasi Cantik dari Kawat Bulu",
    description: "Buket bunga, gantungan kunci, dan dekorasi unik dari kawat bulu yang dibuat dengan penuh cinta.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
