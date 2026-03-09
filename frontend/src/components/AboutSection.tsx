import { Button } from './ui/button';

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            A National Educational Initiative
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              American Competitiveness Watch is dedicated to providing clear, accessible, non-partisan education about the systems and structures that shape American governance and economic competitiveness. We believe that informed citizens are essential to a healthy democracy, and that understanding how government works is the foundation for constructive civic engagement.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our educational modules explore complex topics without partisan bias, presenting factual information about how American systems function, the challenges they face, and how other democratic nations address similar issues. We aim to foster understanding, not advocacy—to illuminate, not persuade.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" variant="outline" className="font-normal">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
