import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ethan Rong | Website",
  description: "Figuring Life Out One Step At A Time ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Ethan Rong's Personal Website</title>
        <meta name="description" content="Welcome to My Personal Website" />
        <link rel="icon" href="@/public/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Great+Vibes&family=Kanit&family=Orbitron&family=Poppins&display=swap" rel="stylesheet" />
      </Head>

      <body className={inter.className}>
        <div className="dark:bg-primary bg-darkPrimary w-full h-full flex flex-col items-center pt-8 pb-6 proxima-nova">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
