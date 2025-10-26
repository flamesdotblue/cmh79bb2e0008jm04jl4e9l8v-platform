import React from 'react';
import { Shield, User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-fuchsia-500">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HoloID</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-white/80 transition hover:text-white">Pricing</a>
          <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 transition hover:border-white/20 hover:bg-white/5">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="hidden items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 md:inline-flex">
            <Settings className="h-4 w-4" />
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}
