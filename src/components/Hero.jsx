import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <p className="mb-2 text-sm tracking-widest text-white/70">
          ARCHITECTURE • INTERIORS • URBAN DESIGN
        </p>
        <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Minimal forms. Timeless spaces.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          We craft considerate, light-filled environments rooted in clarity, material honesty, and human experience.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View portfolio <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
