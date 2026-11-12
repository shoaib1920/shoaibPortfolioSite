import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Hero } from '@/src/components/sections/Hero';
import { About } from '@/src/components/sections/About';
import { Skills } from '@/src/components/sections/Skills';
import { Experience } from '@/src/components/sections/Experience';
import { Projects } from '@/src/components/sections/Projects';
import { Education } from '@/src/components/sections/Education';
import { Contact } from '@/src/components/sections/Contact';

export function App() {
  const [projectSearch, setProjectSearch] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSelectTech = (tech: string) => {
    setProjectSearch((prev) =>
      prev.toLowerCase() === tech.toLowerCase() ? '' : tech
    );
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills
          activeTechFilter={projectSearch}
          onSelectTech={handleSelectTech}
        />
        <Experience />
        <Projects
          searchQuery={projectSearch}
          onSearchChange={setProjectSearch}
        />
        <Education />
        <Contact />
      </main>
      <Footer />

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#0C111D] border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default App;
