import { Button } from './ui/button';

const countries = [
  {
    name: 'Singapore',
    description: 'Strategic planning with 50-year horizons while maintaining democratic accountability and economic dynamism.',
  },
  {
    name: 'Germany',
    description: 'Consensus-based governance enabling long-term industrial policy and infrastructure investment.',
  },
  {
    name: 'Japan',
    description: 'Coordinated public-private partnerships supporting sustained technological and industrial development.',
  },
  {
    name: 'South Korea',
    description: 'Strategic government direction combined with private sector innovation and global competitiveness.',
  },
  {
    name: 'Netherlands',
    description: 'Multi-decade infrastructure and climate adaptation planning through coalition governance.',
  },
];

export function GlobalModelsSection() {
  return (
    <section id="global-models" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              How Other Nations Use Long-Term Strategy
            </h2>
            <p className="text-lg text-muted-foreground">
              Democratic nations that successfully balance accountability with strategic planning
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {countries.map((country, index) => (
              <div key={index} className="border-l-4 border-accent/30 pl-6 py-2">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {country.name}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {country.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button size="lg" variant="outline" className="font-normal">
              View All Models
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
