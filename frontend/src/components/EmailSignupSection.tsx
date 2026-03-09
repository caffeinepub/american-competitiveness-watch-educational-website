import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useSubscribe } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';

export function EmailSignupSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const subscribeMutation = useSubscribe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    try {
      await subscribeMutation.mutateAsync({ name: name.trim(), email: email.trim() });
      setSubmitted(true);
      setName('');
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <section id="subscribe" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Stay Informed With Clear, Accessible Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to receive updates on new educational modules and resources
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg text-foreground font-medium">
                Thank you for subscribing! You'll receive updates as new content becomes available.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-normal"
                disabled={subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
              {subscribeMutation.isError && (
                <p className="text-sm text-destructive text-center">
                  {subscribeMutation.error instanceof Error
                    ? subscribeMutation.error.message
                    : 'An error occurred. Please try again.'}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
