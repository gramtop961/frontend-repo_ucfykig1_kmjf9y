import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h3 className="font-geist text-xl font-semibold text-white">Start a project</h3>
          <p className="mt-2 text-sm text-white/70">
            Tell us a little about your site, program, and timeline. We’ll respond within two business days.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              type="text"
              placeholder="Project location"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2"
            />
            <textarea
              rows="4"
              placeholder="Brief description"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2"
            />
            <button
              type="button"
              className="mt-2 w-full rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 sm:w-auto"
            >
              Send inquiry
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-geist text-xl font-semibold text-white">Studio</h3>
            <p className="mt-2 text-sm text-white/70">
              42 Mercer Street, Suite 8A
              <br />
              New York, NY 10013
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs text-white/60">Email</p>
              <a href="mailto:studio@example.com" className="text-sm text-white">studio@example.com</a>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs text-white/60">Phone</p>
              <a href="tel:+12125550123" className="text-sm text-white">+1 (212) 555-0123</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
