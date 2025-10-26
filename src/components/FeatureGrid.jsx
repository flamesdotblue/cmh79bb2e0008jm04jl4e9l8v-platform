import React from 'react';
import { CreditCard, Lock, Sparkles, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: 'Private by design',
    desc: 'Zero-knowledge style flows and end-to-end encryption keep your identity safe.',
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: 'Fintech ready',
    desc: 'KYC/KYB-friendly verification and tokenized credentials for payments and beyond.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Iridescent profile',
    desc: 'A modern, vibrant holographic card you can embed across apps and platforms.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Portable identity',
    desc: 'Own your verified persona and carry it seamlessly from web2 to web3.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Instant verification',
    desc: 'Blue-check trust signals and anti-impersonation protections out of the box.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Built for trust, designed for the future</h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">Everything you need to bring verified digital identity to your product—without sacrificing aesthetics.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 p-5 transition hover:border-white/20 hover:bg-neutral-900/60"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-md bg-white/10 p-2 text-cyan-300">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-400/20" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/10"
          >
            Explore the docs
          </a>
        </div>
      </div>
    </section>
  );
}
