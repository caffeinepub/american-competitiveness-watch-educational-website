import { Button } from './ui/button';

export function FeaturedArticleSection() {
  return (
    <section id="featured-article" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Why No Country Can Prosper on 4-Year Thinking
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              Long-term competitiveness requires sustained investment and consistent policy across multiple areas:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground ml-6">
              <li className="leading-relaxed">
                <strong className="text-foreground">Infrastructure:</strong> Major projects take decades to plan, fund, and complete
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Manufacturing:</strong> Building industrial capacity requires patient capital and stable policy
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Education:</strong> Workforce development shows results only after years of investment
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Innovation:</strong> Basic research and technology development need long-term funding commitments
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <Button size="lg" variant="outline" className="font-normal">
              Read the Full Explainer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
