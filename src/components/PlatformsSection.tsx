import { ArrowUpRight } from 'lucide-react';
import { PLATFORMS } from '../data/projectData';
import { EditorialImage } from './EditorialImage';

export function PlatformsSection() {
  return (
    <section id="platforms" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-4 pb-10 sm:flex-row sm:items-end">
          <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-[#EDEBE6] sm:text-3xl">
            Two dedicated platforms
          </h2>
          <p className="text-sm text-[#9A9892]">
            Choose a destination to begin exploring.
          </p>
        </div>

        <div className="divide-y divide-white/[0.1] border-t border-b border-white/[0.1]">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-6 py-8 transition-colors duration-200 hover:bg-white/[0.02] lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-2"
            >
              <div className="flex items-baseline gap-5 lg:col-span-4">
                <span className="font-mono text-xs tabular-nums text-[#9A9892]">
                  {platform.index}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight text-[#EDEBE6] transition-colors duration-150 group-hover:text-[#C9A45C] sm:text-2xl">
                    {platform.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#9A9892]">
                    {platform.audience} · {platform.hostLabel}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <EditorialImage
                  src={platform.image}
                  alt={platform.imageAlt}
                  aspectClass="aspect-[4/3]"
                />
              </div>

              <p className="text-sm leading-relaxed text-[#9A9892] lg:col-span-4">
                {platform.summary}
              </p>

              <div className="flex items-center lg:col-span-2 lg:justify-end">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#EDEBE6] transition-colors duration-150 group-hover:text-[#C9A45C] whitespace-nowrap shrink-0">
                  <span>{platform.actionLabel}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
