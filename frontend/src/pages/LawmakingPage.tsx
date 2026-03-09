import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { ConstitutionalPaper } from '../components/ConstitutionalPaper';

export function LawmakingPage() {
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
                  Module 4
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  Why Lawmaking Is Slow
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Understanding the deliberate process of turning ideas into legislation
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="document-container py-8 md:py-12">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  The Constitutional Framework for Lawmaking
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    The Constitution establishes a deliberate, multi-step process for making federal law. A bill must pass both the House of Representatives and the Senate in identical form, then receive presidential approval. This system was designed to prevent hasty legislation and ensure broad consensus.
                  </p>
                  <p>
                    The Founders created this complex process intentionally. They feared both tyranny and mob rule, so they built in multiple veto points where proposed laws could be stopped or modified. The result is a system that makes it relatively easy to block legislation but difficult to pass it.
                  </p>
                  <p>
                    This design reflects a particular philosophy of government: that it's better to move slowly and carefully than to act rashly. The system prioritizes preventing bad laws over enabling quick action. Whether this tradeoff serves America well in the 21st century is an ongoing debate.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Bills Move Through Congress
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    A bill typically begins when a member of Congress introduces it. The bill is then referred to a committee with jurisdiction over its subject matter. Most bills die in committee, never receiving consideration by the full House or Senate.
                  </p>
                  <p>
                    If a committee approves a bill, it moves to the full chamber for debate and voting. In the House, the Rules Committee determines how much debate is allowed and what amendments can be offered. In the Senate, procedures are more flexible, but individual senators have significant power to delay or block legislation.
                  </p>
                  <p>
                    If both chambers pass different versions of a bill, a conference committee must reconcile the differences. The compromise version then returns to both chambers for final approval. Only after both chambers pass identical language does the bill go to the president for signature or veto.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Committee Systems and Gatekeepers
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Congressional committees serve as gatekeepers for legislation. Committee chairs have significant power to determine which bills receive hearings, markup sessions, and votes. A chair who opposes a bill can often prevent it from advancing, regardless of broader support.
                  </p>
                  <p>
                    This committee system allows for specialization and expertise. Members develop deep knowledge of their committee's subject areas and can evaluate legislation more thoroughly. However, it also creates bottlenecks where individual members can block legislation supported by majorities.
                  </p>
                  <p>
                    The power of committee chairs has varied over time. Reforms in the 1970s reduced their authority, but chairs still wield considerable influence. In recent decades, party leadership has gained more control over the legislative process, sometimes bypassing traditional committee procedures.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  The Role of Debate and Amendment
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Floor debate allows members to discuss legislation, offer amendments, and try to persuade colleagues. In theory, this process improves bills by exposing flaws and incorporating diverse perspectives. In practice, much debate is performative, aimed at constituents and media rather than fellow legislators.
                  </p>
                  <p>
                    The amendment process can significantly alter legislation. In the Senate, amendments don't need to be germane to the underlying bill, allowing senators to attach unrelated provisions. This can lead to complex negotiations and compromise, but also to legislative gridlock when controversial amendments are offered.
                  </p>
                  <p>
                    Recent decades have seen less genuine deliberation and more partisan messaging. Members often know how they'll vote before debate begins. Floor speeches serve political purposes—building public support, satisfying interest groups, or positioning for future campaigns—rather than changing minds.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Filibuster and Procedural Rules
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    The Senate filibuster allows a minority of senators to block legislation by extending debate indefinitely. Ending a filibuster requires 60 votes, meaning most legislation needs bipartisan support to pass. This gives the minority party significant power to shape or stop legislation.
                  </p>
                  <p>
                    The filibuster isn't in the Constitution—it's a Senate rule that has evolved over time. Originally, senators had to hold the floor continuously to maintain a filibuster. Now, the mere threat of a filibuster is usually enough to require 60 votes for passage.
                  </p>
                  <p>
                    Supporters argue the filibuster encourages compromise and protects minority rights. Critics contend it enables obstruction and makes governance nearly impossible when parties are polarized. The debate over the filibuster reflects broader questions about how much consensus should be required for government action.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Bicameral Differences and Reconciliation
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    The House and Senate often pass different versions of the same bill. The House, with 435 members and strict rules, tends to move more quickly. The Senate, with 100 members and more flexible procedures, moves more slowly but gives individual senators more influence.
                  </p>
                  <p>
                    When the chambers pass different versions, they must reconcile the differences. Sometimes this happens through informal negotiations. For major legislation, a formal conference committee meets to produce a compromise. Both chambers must then approve the conference report.
                  </p>
                  <p>
                    Budget reconciliation is a special process that allows certain fiscal legislation to pass the Senate with only 51 votes, bypassing the filibuster. This process has strict rules about what can be included, but it has become increasingly important as a way to pass major legislation in a polarized environment.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Presidential Approval and Veto Power
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    After Congress passes a bill, it goes to the president for signature or veto. The president can sign it into law, veto it, or allow it to become law without signature after ten days. A presidential veto can be overridden by a two-thirds vote in both chambers, but this rarely happens.
                  </p>
                  <p>
                    The veto power gives the president significant influence over legislation. Congress must consider whether the president will sign a bill when crafting legislation. This encourages negotiation between Congress and the White House, but it also creates another veto point in the legislative process.
                  </p>
                  <p>
                    Presidents sometimes use veto threats to shape legislation before it reaches their desk. The threat of a veto can force Congress to modify bills to gain presidential approval. This gives the president a role in lawmaking beyond the formal veto power.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Deliberation Takes Time
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Thorough consideration of legislation requires time. Bills need analysis to understand their effects, hearings to gather expert testimony, markup sessions to refine language, and floor debate to air different perspectives. Rushing this process can lead to poorly drafted laws with unintended consequences.
                  </p>
                  <p>
                    However, the current legislative process often involves more delay than deliberation. Bills sit in committee not because they're being carefully studied, but because chairs don't want to advance them. Filibusters block legislation without requiring actual debate. Partisan gridlock prevents action on issues with broad public support.
                  </p>
                  <p>
                    The challenge is distinguishing between productive deliberation and obstructive delay. Some slowness serves the system's purposes—preventing hasty action, building consensus, improving legislation. Other slowness simply reflects dysfunction and the difficulty of governing in a polarized environment.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Comparing Speed Across Different Countries
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Parliamentary systems typically pass legislation more quickly than the American system. When a party or coalition controls parliament, it can usually enact its agenda without the multiple veto points that characterize American lawmaking. This enables faster response to problems but provides less protection against hasty action.
                  </p>
                  <p>
                    Some democracies have unicameral (single-chamber) legislatures, eliminating the need to reconcile different versions of bills. Others have upper chambers with limited power to delay legislation. These systems prioritize efficiency over the checks and balances that slow American lawmaking.
                  </p>
                  <p>
                    No system is objectively better—each involves tradeoffs. Faster lawmaking enables quicker responses to problems but risks poorly considered legislation. Slower, more deliberate processes reduce the risk of bad laws but make it harder to address urgent challenges. The optimal balance depends on values and circumstances.
                  </p>
                </div>
              </section>

              {/* Key Takeaways */}
              <section className="space-y-4 border-t border-border/50 pt-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Key Takeaways from Module 4
                </h2>
                <ul className="space-y-3 text-base text-foreground leading-relaxed ml-6">
                  <li>The Constitution establishes a deliberately slow, multi-step process for making federal law</li>
                  <li>Multiple veto points—committees, floor votes, bicameral differences, presidential approval—make it easier to block legislation than to pass it</li>
                  <li>Procedures like the filibuster give minorities significant power to shape or stop legislation</li>
                  <li>Some slowness reflects productive deliberation; other slowness reflects dysfunction and gridlock</li>
                  <li>Other democracies make different tradeoffs between speed and deliberation in their legislative processes</li>
                </ul>
              </section>

              {/* Next Module Button */}
              <div className="flex justify-center pt-8 border-t border-border/50">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-normal"
                  disabled
                >
                  Next Module: Regulatory Complexity
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </main>
      </ConstitutionalPaper>
      <Footer />
    </div>
  );
}
