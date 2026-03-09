import { Button } from './ui/button';

export function CivicsEducationSection() {
  return (
    <section id="civics-education" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            A Strong Democracy Begins With Understanding
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              This educational initiative provides non-partisan, factual information about how American governmental systems work, the challenges they face, and how other democratic nations approach similar issues. Our goal is to foster informed civic engagement and constructive dialogue about America's future.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" variant="outline" className="font-normal">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
