import { ReactNode } from 'react';

interface ConstitutionalPaperProps {
  children: ReactNode;
  className?: string;
}

export function ConstitutionalPaper({ children, className = '' }: ConstitutionalPaperProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {children}
    </div>
  );
}
