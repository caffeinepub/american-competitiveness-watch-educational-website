import { Button } from './ui/button';

export function MissionSection() {
  return (
    <section id="mission" className="py-12 md:py-16">
      <div className="document-container">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center">
            Explaining the Systems That Shape America
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              From election cycles to regulatory complexity, from lobbying influence to budget constraints—America faces challenges that transcend party lines. This project provides clear, factual education about how these systems work, why they matter, and how other nations approach similar challenges with long-term strategic thinking.
            </p>
          </div>
          <div className="text-center pt-4">
            <Button size="lg" variant="outline" className="font-normal">
              Learn About Our Purpose
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
