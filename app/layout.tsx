import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
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
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Great+Vibes&family=Kanit&family=Orbitron&family=Poppins&display=swap" rel="stylesheet" />
      </Head>

      <body className={inter.className}>
        <div className="bg-primary ">
          <NavBar />
          <div className=''>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
