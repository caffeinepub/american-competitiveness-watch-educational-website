import { Button } from './ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="editorial-masthead">
      <div className="document-container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              American Competitiveness Watch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal italic">
              Understanding America's Future Through Understanding How America Works
            </p>
          </div>

          <div className="pt-6 border-t border-border/50 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              A non-partisan educational resource exploring the systems, cycles, and structures that shape American governance and competitiveness
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#mission')} 
              variant="outline"
              className="w-full sm:w-auto font-normal text-base px-6"
            >
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollToSection('#framework')}
              className="w-full sm:w-auto font-normal text-base px-6"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              How Government Systems Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
