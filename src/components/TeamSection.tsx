import { ArrowUpRight } from 'lucide-react';
import { TEAM_CREDITS } from '../data/projectData';

export function TeamSection() {
  return (
    <section id="about" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Brief About column */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-[#EDEBE6] sm:text-3xl">
              About ድንቅነሽ
            </h2>
            <p className="mt-5 text-sm leading-[1.75] text-[#9A9892] sm:text-base">
              In Amharic, <span className="text-[#EDEBE6]">ድንቅነሽ (Dinkinesh)</span> means{' '}
              <span className="italic text-[#EDEBE6]">“You are wonderful”</span>—the Ethiopian name
              of the fossil known as Lucy. We carry that spirit to the Moon and Mars, keeping the
              stories of retired landers and rovers alive using open NASA 3D geometry and mission
              records.
            </p>
            <a
              href="https://github.com/Abandoned-but-not-forgotten-Dinknesh/Dinknesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#EDEBE6] underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:text-[#C9A45C] hover:decoration-[#C9A45C]"
            >
              <span>Source &amp; 3D assets on GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Concise Team ledger */}
          <div id="team" className="lg:col-span-7">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-[#EDEBE6] sm:text-3xl">
              The team
            </h2>

            <div className="mt-6 divide-y divide-white/[0.1] border-t border-b border-white/[0.1]">
              {TEAM_CREDITS.map((member) => {
                const content = (
                  <>
                    <div>
                      <p className="font-display text-lg font-medium text-[#EDEBE6] transition-colors duration-150 group-hover:text-[#C9A45C]">
                        {member.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[#9A9892]">{member.role}</p>
                    </div>
                    {member.handle && (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#9A9892] group-hover:text-[#EDEBE6]">
                        <span>{member.handle}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                );

                return member.githubUrl ? (
                  <a
                    key={member.id}
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between gap-2 py-5 transition-colors duration-150 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:px-2"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={member.id}
                    className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center sm:px-2"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
        <p className="text-xs text-[#9A9892]">
          <span className="font-display text-sm text-[#EDEBE6]">ድንቅነሽ</span> · Dinkinesh Space
          Heritage Project
        </p>
      </div>
    </footer>
  );
}
