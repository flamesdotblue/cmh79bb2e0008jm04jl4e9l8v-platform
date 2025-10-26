import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-white/70 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-white/80">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-fuchsia-500">
            <Shield className="h-4 w-4" />
          </div>
          <span className="font-medium">HoloID</span>
          <span className="text-white/50">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
