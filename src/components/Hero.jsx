import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Live • Secure Identity for Web3 & Fintech
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your holographic identity, verified.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            HoloID lets you own a vibrant, iridescent profile card backed by real verification. One identity across apps—fast, private, and beautiful.
          </p>

          <ul className="mt-6 grid gap-2 text-sm text-white/80">
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Passwordless sign-in</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Blue-check verification</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Fintech-grade encryption</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(70%_70%_at_70%_50%,black,transparent)]">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 shadow-2xl">
            <div className="h-[420px] w-full sm:h-[500px] md:h-[560px]">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/80 to-transparent" />
          </div>
          <p className="mt-3 text-center text-xs text-white/60">
            A stylized, iridescent holographic profile card with a glowing blue checkmark
          </p>
        </div>
      </div>
    </section>
  );
}
