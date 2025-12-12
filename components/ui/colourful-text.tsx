'use client';

import { cn } from '@/lib/utils';

interface ColourfulTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ColourfulText({ children, className }: ColourfulTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient',
        className
      )}
    >
      {children}
    </span>
  );
}

