import React from 'react';

const About = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:p-12">
        <h2 className="font-geist text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Practice
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          We are a studio focused on quiet, rigorous architecture. Our work seeks effortless clarity—spaces that feel inevitable yet generous. We favor natural light, honest materials, and carefully calibrated proportions to create environments that age gracefully and support everyday life.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-4 text-white/80 ring-1 ring-white/10">
            <p className="text-3xl font-semibold">12+</p>
            <p className="text-xs text-white/60">Years in practice</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 text-white/80 ring-1 ring-white/10">
            <p className="text-3xl font-semibold">40+</p>
            <p className="text-xs text-white/60">Built projects</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 text-white/80 ring-1 ring-white/10">
            <p className="text-3xl font-semibold">8</p>
            <p className="text-xs text-white/60">Awards & features</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
