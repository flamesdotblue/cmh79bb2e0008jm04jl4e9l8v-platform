import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
