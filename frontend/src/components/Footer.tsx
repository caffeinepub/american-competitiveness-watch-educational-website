import { Heart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { useIsCallerAdmin } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export function Footer() {
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsCallerAdmin();

  const handleAnalyticsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate({ to: '/analytics' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">American Competitiveness Watch</h3>
            <p className="text-muted-foreground italic text-lg">
              "Understanding the systems that shape our nation's future"
            </p>
          </div>

          <div className="pt-6 border-t border-border space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025. Built with{' '}
              <Heart className="inline-block w-4 h-4 text-destructive fill-destructive" />{' '}
              using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
            {identity && isAdmin && (
              <p className="text-xs">
                <a
                  href="/analytics"
                  onClick={handleAnalyticsClick}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Analytics
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
