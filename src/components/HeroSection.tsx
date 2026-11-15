import { ArrowUpRight } from 'lucide-react';
import { HERO_MEDIA } from '../data/projectData';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  return (
    <section id="top" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A9892]">
              ድንቅነሽ · Abandoned but not Forgotten
            </p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-[#EDEBE6] sm:text-6xl lg:text-[4.25rem]">
              The machines we left on the Moon and Mars.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-sm leading-relaxed text-[#9A9892] sm:text-base">
              An introductory portal for the Dinkinesh project—connecting two dedicated spaces
              where children and enthusiasts explore humanity’s distant spacecraft.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
              <a
                href="https://dinknesh-kids.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1 font-medium text-[#EDEBE6] underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:text-[#C9A45C] hover:decoration-[#C9A45C]"
              >
                <span>Kids' Edition</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://dinknesh-lucy-museum.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1 font-medium text-[#EDEBE6] underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:text-[#C9A45C] hover:decoration-[#C9A45C]"
              >
                <span>Adults' Edition</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <EditorialImage
            src={HERO_MEDIA.src}
            alt={HERO_MEDIA.alt}
            aspectClass="aspect-[16/9]"
            priority
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0C0E]/75 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
