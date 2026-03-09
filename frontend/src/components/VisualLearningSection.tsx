import { Button } from './ui/button';

const diagrams = [
  { title: 'Election cycle timeline and policy impacts' },
  { title: 'Policy reversals across administrations' },
  { title: 'Lobbying flow and influence pathways' },
  { title: 'Federal vs. state regulatory layers' },
  { title: 'Budget process and appropriations cycle' },
  { title: 'Comparative national planning horizons' },
];

export function VisualLearningSection() {
  return (
    <section id="visual-learning" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              See the System at a Glance
            </h2>
            <p className="text-lg text-muted-foreground">
              Visual diagrams and infographics that make complex governmental systems easy to understand
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {diagrams.map((diagram, index) => (
              <div key={index} className="pl-6 py-1">
                <p className="text-base text-muted-foreground leading-relaxed">
                  • {diagram.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button size="lg" variant="outline" className="font-normal">
              View All Charts & Diagrams
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
