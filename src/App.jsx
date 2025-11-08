import React from 'react';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-geist text-lg font-semibold tracking-tight">Atelier Nova</a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#portfolio" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">Practice</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="about">
          <About />
        </div>
        <WorkGrid />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Atelier Nova — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Press Kit</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
