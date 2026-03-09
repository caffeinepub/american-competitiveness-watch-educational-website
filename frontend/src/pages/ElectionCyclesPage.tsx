import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { ConstitutionalPaper } from '../components/ConstitutionalPaper';

export function ElectionCyclesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <ConstitutionalPaper>
        <main className="pt-8 md:pt-12">
          {/* Page Masthead */}
          <section className="editorial-masthead">
            <div className="document-container">
              <div className="text-center space-y-4">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Module 2
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  Election Cycles & Short-Term Thinking
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  How frequent elections shape policy horizons and strategic planning
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="document-container py-8 md:py-12">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Often Elections Happen
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    The United States holds federal elections every two years. The entire House of Representatives faces reelection every two years, one-third of the Senate every two years, and the presidency every four years. This means elected officials are constantly preparing for the next campaign.
                  </p>
                  <p>
                    State and local elections add to this cycle. Governors, state legislators, mayors, and other officials face their own election schedules. The result is a near-constant election season, with campaigns beginning almost immediately after the previous election ends.
                  </p>
                  <p>
                    This frequency is unusual among democracies. Many countries have longer terms between elections, giving officials more time to implement policies before facing voters again. The American system prioritizes accountability through frequent elections, but this comes with tradeoffs.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Short-Term Incentives Are Strong
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    When officials face reelection every two or four years, they have strong incentives to focus on policies that show results before the next election. Voters judge officials based on recent performance, so officials prioritize actions with visible, near-term benefits.
                  </p>
                  <p>
                    Long-term investments often involve upfront costs with benefits that appear years or decades later. Infrastructure projects, education reforms, and research investments may not show results within a single election cycle. This creates a bias toward policies with immediate, visible impacts.
                  </p>
                  <p>
                    The constant need to campaign also affects how officials spend their time. Fundraising, constituent outreach, and campaign activities compete with policy development and legislative work. This can reduce the time available for long-term strategic thinking.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  When Policies Change Direction
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Frequent elections can lead to frequent policy changes. When control of Congress or the presidency shifts, new majorities often reverse or modify previous policies. This creates uncertainty for businesses, organizations, and individuals trying to plan for the future.
                  </p>
                  <p>
                    Some policy areas are more affected than others. Regulatory policy, trade agreements, and discretionary spending can change significantly with new administrations. Other areas, like Social Security or Medicare, have more political stability due to broad public support.
                  </p>
                  <p>
                    The possibility of policy reversal affects how organizations make long-term decisions. Companies may hesitate to make major investments if they're uncertain whether supportive policies will remain in place. This uncertainty can reduce economic efficiency and competitiveness.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Long-Term Projects Are Harder to Sustain
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Major infrastructure projects, scientific research programs, and industrial development initiatives often require sustained funding and policy support over many years or decades. When political control changes frequently, maintaining this continuity becomes challenging.
                  </p>
                  <p>
                    Each new Congress and administration may have different priorities. Projects started under one government may lose funding or support under the next. This makes it difficult to complete long-term initiatives and reduces the incentive to start them in the first place.
                  </p>
                  <p>
                    The result is that America sometimes struggles to complete major projects that other countries accomplish more easily. High-speed rail, advanced manufacturing facilities, and large-scale research programs require the kind of sustained commitment that short election cycles make difficult.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Planning Horizons Differ in Other Countries
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Many democratic countries have longer election cycles or stronger mechanisms for maintaining policy continuity across governments. Parliamentary systems often have five-year terms. Some countries have independent agencies that manage long-term infrastructure and development projects insulated from electoral politics.
                  </p>
                  <p>
                    Countries like Singapore, South Korea, and Germany have successfully combined democratic accountability with long-term strategic planning. They use various mechanisms: consensus-based governance, independent planning agencies, multi-party agreements on major projects, and cultural norms that value continuity.
                  </p>
                  <p>
                    These countries demonstrate that democracy doesn't require short-term thinking. Different institutional arrangements can enable democratic governments to plan and execute long-term strategies while remaining accountable to voters.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Citizens Experience Short-Term Thinking
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Short-term policy horizons affect citizens in many ways. Infrastructure deteriorates when maintenance and upgrades are deferred. Education systems struggle when reforms are reversed before showing results. Economic competitiveness suffers when industrial policy lacks continuity.
                  </p>
                  <p>
                    Citizens also experience the constant campaign cycle. Political advertising, fundraising appeals, and partisan messaging become near-constant features of public life. This can contribute to political fatigue and reduced civic engagement.
                  </p>
                  <p>
                    However, frequent elections also provide regular opportunities for citizens to hold officials accountable and change direction if they're dissatisfied. The challenge is balancing this accountability with the need for sustained, long-term policy implementation.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Benefits and Tradeoffs of Frequent Elections
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Frequent elections provide strong democratic accountability. Officials who fail to represent their constituents or who pursue unpopular policies can be removed relatively quickly. This responsiveness is a core strength of American democracy.
                  </p>
                  <p>
                    However, this accountability comes with costs. The constant election cycle creates incentives for short-term thinking, makes long-term projects harder to sustain, and consumes time and resources that could be devoted to governance. It also increases the influence of campaign donors and organized interests.
                  </p>
                  <p>
                    Understanding these tradeoffs doesn't require advocating for specific reforms. It simply means recognizing that institutional design involves choices, and those choices have consequences for how government functions and what it can accomplish.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Time Horizons Matter for America's Future
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Global competitiveness increasingly depends on long-term investments and sustained policy implementation. Infrastructure, education, research, and industrial development all require planning horizons that extend beyond single election cycles.
                  </p>
                  <p>
                    Countries that can maintain policy continuity and execute long-term strategies have advantages in these areas. They can complete major projects, develop advanced industries, and build the foundations for future prosperity more effectively than countries trapped in short-term thinking.
                  </p>
                  <p>
                    For America to remain competitive, it must find ways to balance democratic accountability with the capacity for long-term strategic planning. This is one of the central challenges facing American governance in the 21st century.
                  </p>
                </div>
              </section>

              {/* Key Takeaways */}
              <section className="space-y-4 border-t border-border/50 pt-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Key Takeaways from Module 2
                </h2>
                <ul className="space-y-3 text-base text-foreground leading-relaxed ml-6">
                  <li>America's two-year and four-year election cycles create strong incentives for short-term thinking</li>
                  <li>Long-term projects require sustained funding and policy support that frequent elections make difficult</li>
                  <li>Other democracies demonstrate that accountability and long-term planning can coexist</li>
                  <li>Frequent elections provide strong accountability but at the cost of policy continuity</li>
                  <li>Global competitiveness increasingly requires planning horizons that extend beyond election cycles</li>
                </ul>
              </section>

              {/* Next Module Button */}
              <div className="flex justify-center pt-8 border-t border-border/50">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/policy-reversals-and-instability' })}
                  className="font-normal"
                >
                  Next Module: Partisan Reversals & Policy Instability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </ConstitutionalPaper>
      <Footer />
    </div>
  );
}
