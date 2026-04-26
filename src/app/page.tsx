import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import AccredianEdge from '@/components/sections/AccredianEdge';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <AccredianEdge />
    </main>
  );
}