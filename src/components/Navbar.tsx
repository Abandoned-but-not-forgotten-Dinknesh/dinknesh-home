import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Platforms', href: '#platforms' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0B0C0E]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:px-10">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="inline-flex items-center justify-self-start font-display text-lg font-medium leading-none tracking-tight text-[#EDEBE6] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
        >
          ድንቅነሽ
        </a>

        {/* Zone 2: Mathematically centered single-line links */}
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center justify-self-center gap-8 text-sm leading-none text-[#9A9892] md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 transition-colors duration-150 hover:text-[#EDEBE6] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Right-aligned platform buttons + mobile toggle */}
        <div className="flex items-center justify-end justify-self-end gap-2.5 shrink-0">
          <a
            href="https://dinknesh-kids.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 border border-white/[0.18] bg-transparent px-4 text-xs font-medium leading-none text-[#EDEBE6] transition-colors duration-150 hover:border-[#C9A45C] hover:text-[#C9A45C] whitespace-nowrap shrink-0 md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
          >
            <span>Kids' Edition</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <a
            href="https://dinknesh-lucy-museum.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 border border-[#EDEBE6] bg-[#EDEBE6] px-4 text-xs font-medium leading-none text-[#0B0C0E] transition-colors duration-150 hover:border-[#C9A45C] hover:bg-[#C9A45C] whitespace-nowrap shrink-0 md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
          >
            <span>Adults' Edition</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/[0.12] text-[#EDEBE6] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-white/[0.08] bg-[#0B0C0E] px-6 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center text-sm text-[#EDEBE6]"
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 border-t border-white/[0.08]" />
            <a
              href="https://dinknesh-kids.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center justify-between text-sm text-[#EDEBE6]"
            >
              <span>Kids' Edition</span>
              <ArrowUpRight className="h-4 w-4 text-[#9A9892]" aria-hidden="true" />
            </a>
            <a
              href="https://dinknesh-lucy-museum.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center justify-between text-sm text-[#C9A45C]"
            >
              <span>Adults' Edition</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
