/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlatformsSection } from './components/PlatformsSection';
import { TeamSection, Footer } from './components/TeamSection';
import { Starfield } from './components/Starfield';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0C0E] text-[#EDEBE6]">
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <PlatformsSection />
        <TeamSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
