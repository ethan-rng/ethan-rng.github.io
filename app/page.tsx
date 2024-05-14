import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience"
import Projects from "@/components/Projects";


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </main>
  );
}
