import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimatedLink from '@/components/AnimatedLink';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}