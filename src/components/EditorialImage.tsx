import { useState } from 'react';
import { Orbit } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden border border-white/[0.08] bg-[#121418] ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#121418] p-6 text-center text-[#9A9892]">
          <Orbit className="h-5 w-5 stroke-[1.5] text-[#C9A45C]" aria-hidden="true" />
          <p className="max-w-xs text-xs">{alt}</p>
        </div>
      )}
    </div>
  );
}
