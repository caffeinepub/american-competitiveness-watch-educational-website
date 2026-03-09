import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { ConstitutionalPaper } from '../components/ConstitutionalPaper';

export function PartisanReversalsPage() {
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
                  Module 3
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  Partisan Reversals & Policy Instability
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  How policy changes with each administration affect long-term planning
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="document-container py-8 md:py-12">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  What Are Partisan Reversals?
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Partisan reversals occur when a new administration or Congress reverses or significantly modifies policies established by the previous government. This can include rolling back regulations, withdrawing from international agreements, changing enforcement priorities, or redirecting funding.
                  </p>
                  <p>
                    These reversals are a normal part of democratic governance. Different parties have different philosophies and priorities, and voters elect them to implement those visions. However, when reversals happen frequently and affect major policies, they create uncertainty and instability.
                  </p>
                  <p>
                    Not all policy areas experience frequent reversals. Some policies, like Social Security or Medicare, have broad bipartisan support and remain stable across administrations. Others, particularly in areas like environmental regulation, trade policy, and immigration, see more frequent changes.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Policy Direction Changes With Elections
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    When control of the presidency or Congress changes, policy priorities often shift dramatically. New administrations may use executive orders to reverse previous policies, agencies may change enforcement priorities, and Congress may pass legislation undoing previous laws.
                  </p>
                  <p>
                    The speed and scope of these changes have increased in recent decades. Modern presidents make extensive use of executive authority to implement their agendas, but this also means their successors can reverse those actions just as quickly. What one administration builds, the next can dismantle.
                  </p>
                  <p>
                    This pattern affects many policy areas. Environmental regulations, labor rules, trade agreements, immigration enforcement, and foreign policy can all shift significantly with each election. Organizations affected by these policies must constantly adapt to changing rules and priorities.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Reversals Happen More Frequently
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Several factors contribute to increasing policy instability. Political polarization means the two parties have more divergent views on major issues. Narrow congressional majorities make bipartisan legislation harder to achieve. And the expansion of executive authority means presidents can implement and reverse policies without congressional approval.
                  </p>
                  <p>
                    When policies are implemented through executive action rather than legislation, they're easier to reverse. Laws require congressional approval and presidential signature, creating more stability. Executive orders and regulatory changes can be reversed by the next administration with much less effort.
                  </p>
                  <p>
                    The decline of bipartisan policymaking also contributes to instability. When major policies pass with support from both parties, they're more likely to survive changes in political control. When they pass on party-line votes, they become targets for reversal when control shifts.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  The Cost of Policy Instability
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Policy instability imposes real costs on the economy and society. Businesses face uncertainty about future regulations and must plan for multiple scenarios. Long-term investments become riskier when the policy environment is unpredictable. International partners question America's reliability when agreements are frequently reversed.
                  </p>
                  <p>
                    Government agencies also suffer from policy whiplash. Career civil servants must implement one set of priorities, then reverse course and implement opposite priorities, then reverse again. This makes it difficult to develop expertise, maintain institutional knowledge, and execute policies effectively.
                  </p>
                  <p>
                    Citizens experience policy instability through disrupted programs, changing rules, and uncertainty about the future. Healthcare coverage, environmental protections, immigration status, and many other aspects of life can change significantly with each election, creating stress and insecurity.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Businesses and Organizations Adapt
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Organizations develop strategies to manage policy uncertainty. They maintain flexibility in their operations, avoid long-term commitments that depend on specific policies, and invest in political relationships with both parties. These adaptations are rational but reduce economic efficiency.
                  </p>
                  <p>
                    Large organizations with resources can adapt more easily than small ones. They can hire lobbyists, maintain government relations teams, and adjust their strategies as policies change. Smaller organizations and individuals have less capacity to adapt, making them more vulnerable to policy instability.
                  </p>
                  <p>
                    Some businesses and organizations simply avoid long-term investments in areas with high policy uncertainty. This can mean foregone opportunities for innovation, job creation, and economic growth. The cost of instability isn't just the disruption from policy changes—it's also the investments that never happen.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  International Perceptions of Policy Shifts
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Other countries watch American policy reversals closely. When the United States withdraws from international agreements, reverses trade policies, or dramatically shifts foreign policy priorities with each administration, it affects America's credibility and reliability as a partner.
                  </p>
                  <p>
                    Countries making long-term strategic decisions must account for the possibility that American policy will reverse. This can lead them to hedge their bets, develop alternative partnerships, or simply discount American commitments. The result is reduced American influence and effectiveness in international affairs.
                  </p>
                  <p>
                    Some countries have learned to wait out American administrations they disagree with, knowing that policy may reverse in a few years. This reduces the effectiveness of American diplomacy and makes it harder to achieve foreign policy objectives that require sustained effort over time.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  When Reversals Can Be Beneficial
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Policy reversals aren't always negative. Sometimes previous policies were misguided, ineffective, or harmful, and reversing them improves outcomes. The ability to change direction is a feature of democracy, not a bug. Voters should be able to elect leaders who will implement different policies.
                  </p>
                  <p>
                    Reversals can also serve as course corrections when policies have unintended consequences or when circumstances change. Flexibility and adaptability are valuable in governance. The challenge is distinguishing between beneficial course corrections and destabilizing policy whiplash.
                  </p>
                  <p>
                    The key question is whether the benefits of flexibility and democratic responsiveness outweigh the costs of instability and uncertainty. Different people will answer this question differently based on their values and priorities. Understanding the tradeoffs is essential for informed civic engagement.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  The Role of Institutional Memory
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Frequent policy reversals can erode institutional memory within government agencies. Career civil servants who develop expertise in implementing one set of policies may see that expertise become irrelevant when policies reverse. This makes it harder to maintain effective, professional government operations.
                  </p>
                  <p>
                    Agencies that experience frequent policy whiplash may struggle to attract and retain talented employees. Why develop deep expertise in a policy area if that policy will be reversed in a few years? This brain drain reduces government capacity and effectiveness over time.
                  </p>
                  <p>
                    Some countries protect institutional memory by insulating certain agencies from political changes or by maintaining stronger norms of policy continuity. These approaches have their own tradeoffs, but they help preserve government capacity and effectiveness across administrations.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Other Countries Handle Political Transitions
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Many democracies experience less policy instability than the United States despite regular changes in government. Parliamentary systems often require coalition governments, which moderate policy swings. Some countries have stronger norms of policy continuity, where major initiatives survive changes in government.
                  </p>
                  <p>
                    Countries like Germany, the Netherlands, and the Nordic nations maintain policy stability through consensus-based governance. Major policies typically have support from multiple parties, making them more durable. Independent agencies manage long-term projects insulated from electoral politics.
                  </p>
                  <p>
                    These countries demonstrate that democratic accountability doesn't require constant policy reversals. Different institutional arrangements and political cultures can enable both responsiveness to voters and stability in policy implementation. America could learn from these examples while adapting them to its own constitutional system.
                  </p>
                </div>
              </section>

              {/* Key Takeaways */}
              <section className="space-y-4 border-t border-border/50 pt-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Key Takeaways from Module 3
                </h2>
                <ul className="space-y-3 text-base text-foreground leading-relaxed ml-6">
                  <li>Partisan reversals occur when new administrations reverse policies established by their predecessors</li>
                  <li>Policy instability creates uncertainty, reduces investment, and damages America's international credibility</li>
                  <li>Increased use of executive authority and declining bipartisanship contribute to more frequent reversals</li>
                  <li>While some reversals are beneficial course corrections, frequent whiplash imposes real costs</li>
                  <li>Other democracies demonstrate that stability and accountability can coexist through different institutional arrangements</li>
                </ul>
              </section>

              {/* Next Module Button */}
              <div className="flex justify-center pt-8 border-t border-border/50">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/why-lawmaking-is-slow' })}
                  className="font-normal"
                >
                  Next Module: Why Lawmaking Is Slow
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
