import React from 'react';

const projects = [
  {
    title: 'Courtyard House',
    location: 'Lisbon, Portugal',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c1e2?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Cliffside Retreat',
    location: 'Big Sur, California',
    image:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1890&auto=format&fit=crop',
  },
  {
    title: 'Studio Atelier',
    location: 'Berlin, Germany',
    image:
      'https://images.unsplash.com/photo-1505842465776-3acb39a1d14d?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Lake Pavilion',
    location: 'Hamar, Norway',
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Desert Courtyard',
    location: 'AlUla, Saudi Arabia',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Timber Loft',
    location: 'Copenhagen, Denmark',
    image:
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1887&auto=format&fit=crop',
  },
];

const WorkGrid = () => {
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-geist text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Selected Work
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            A collection of residential, cultural, and landscape commissions exploring light, tactility, and proportion.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 hover:bg-white/10 sm:inline-block"
        >
          Get in touch
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} – ${p.location}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-black/40 p-3 backdrop-blur-md ring-1 ring-white/10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <div>
                <h3 className="text-sm font-medium text-white">{p.title}</h3>
                <p className="text-xs text-white/70">{p.location}</p>
              </div>
              <span className="text-xs text-white/70">View</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
