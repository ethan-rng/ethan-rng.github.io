import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from "@/components/(root)/NavBar";
import Footer from "@/components/(root)/Footer";
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
      </Head>

      <body className={inter.className}>
        <div className="bg-primary">
          <NavBar />
          <div className='mt-'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
