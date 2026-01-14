import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  // 1. ЗАГОЛОВОК И ОПИСАНИЕ (SEO)
  title: "Breaking the Chains of Aging | The Biochemical Drama",
  description: "Discover the new scientific paradigm of Lipid Peroxidation and the Isotope Effect. A groundbreaking book by Mikhail S. Shchepinov, PhD.",
  
  // 2. ИКОНКА (FAVICON)
  icons: {
    icon: 'https://fav.farm/🧬', // Иконка ДНК
  },

  // 3. СОЦСЕТИ (OPEN GRAPH)
  openGraph: {
    title: "Breaking the Chains of Aging",
    description: "The Biochemical Drama. Why antioxidants fail and how Deuterium can stop the aging chain reaction.",
    images: ['https://i.ibb.co/QFBzgZ6K/71uv-J6-U35-JL-SL1360.jpg'], // Обложка книги
    type: 'book',
  },

  // 4. SEO ЩИТ (ПОКА ВКЛЮЧЕН)
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}