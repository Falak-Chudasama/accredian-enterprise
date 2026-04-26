import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import AccredianEdge from '@/components/sections/AccredianEdge';
import DomainExpertise from '@/components/sections/DomainExpertise';
import Testimonials from '@/components/sections/Testimonials';
import CatFramework from '@/components/sections/CatFramework';
import Faq from '@/components/sections/Faq';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <AccredianEdge />
      <DomainExpertise />
      <Testimonials />
      <CatFramework />
      <Faq />
    </main>
  );
}