import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { ConstitutionalPaper } from '../components/ConstitutionalPaper';

export function MoneyAndInfluencePage() {
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
                  Module 1
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  Money & Influence: How Funding Shapes Policy Discussions
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Understanding the role of campaign finance and lobbying in American democracy
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="document-container py-8 md:py-12">
            <div className="space-y-12">
              {/* What Is Lobbying? */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  What Is Lobbying?
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Lobbying is the practice of individuals or groups attempting to influence government decisions. This includes meeting with legislators, providing information to policymakers, testifying at hearings, and organizing grassroots campaigns. Lobbying is a constitutionally protected activity under the First Amendment's right to petition the government.
                  </p>
                  <p>
                    Professional lobbyists represent corporations, trade associations, labor unions, advocacy groups, and other organizations. They provide expertise on complex issues, draft legislative language, and help navigate the policymaking process. Many former government officials become lobbyists, leveraging their knowledge and relationships.
                  </p>
                  <p>
                    Not all lobbying involves money. Citizens who contact their representatives, advocacy groups that organize letter-writing campaigns, and nonprofits that testify at hearings are all engaged in lobbying activities. The term encompasses a wide range of activities aimed at influencing policy.
                  </p>
                </div>
              </section>

              {/* Why Policymakers Rely on Organized Groups */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Policymakers Rely on Organized Groups
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Members of Congress and their staff must make decisions on hundreds of complex issues, from healthcare to technology to foreign policy. They cannot be experts in every area, so they rely on outside sources for information, analysis, and perspective.
                  </p>
                  <p>
                    Organized groups—whether industry associations, think tanks, or advocacy organizations—provide detailed information about how policies would affect their members or constituents. This information helps policymakers understand the practical implications of proposed legislation.
                  </p>
                  <p>
                    However, this reliance creates potential problems. Groups with more resources can provide more information, meet more frequently with officials, and have greater influence on policy discussions. This can skew the information policymakers receive toward well-funded interests.
                  </p>
                </div>
              </section>

              {/* Campaigns, Funding, and Access */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Campaigns, Funding, and Access
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Running for federal office is expensive. House campaigns typically cost hundreds of thousands to millions of dollars, while Senate and presidential campaigns cost tens or hundreds of millions. Candidates must raise these funds from individual donors, political action committees (PACs), and party organizations.
                  </p>
                  <p>
                    Campaign contributions don't directly buy votes, but they do buy access. Donors get meetings with candidates and officials, opportunities to present their views, and chances to build relationships. This access is valuable because it allows donors to make their case directly to decision-makers.
                  </p>
                  <p>
                    The need to raise campaign funds affects how officials spend their time. Members of Congress often spend hours each day on fundraising calls. This time could otherwise be spent on policy development, constituent services, or legislative work.
                  </p>
                </div>
              </section>

              {/* Who Participates in Policy Discussions? */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Who Participates in Policy Discussions?
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Policy discussions involve many stakeholders: industry representatives, labor unions, advocacy groups, think tanks, academic experts, and individual citizens. However, participation is not equal. Well-funded organizations can hire professional lobbyists, conduct research, and maintain a constant presence in Washington.
                  </p>
                  <p>
                    Diffuse interests—those affecting many people but with small individual stakes—are harder to organize than concentrated interests. For example, consumers benefit from lower prices, but each individual consumer has little incentive to lobby for pro-consumer policies. Industries facing regulation, however, have strong incentives to organize and advocate.
                  </p>
                  <p>
                    This imbalance means some perspectives are heard more clearly than others. Policymakers may receive extensive input from organized industries while hearing less from unorganized constituencies, even when those constituencies are larger.
                  </p>
                </div>
              </section>

              {/* How Influence Can Become Uneven */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  How Influence Can Become Uneven
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    When some groups have significantly more resources than others, they can dominate policy discussions. They can hire more lobbyists, fund more research, run advertising campaigns, and maintain relationships with more officials. This doesn't guarantee they'll get everything they want, but it does mean their views are more likely to be heard and considered.
                  </p>
                  <p>
                    The revolving door between government and lobbying amplifies these advantages. Former officials bring insider knowledge and relationships to their lobbying work. While this expertise can be valuable, it also creates networks of influence that favor well-funded interests.
                  </p>
                  <p>
                    Campaign finance laws attempt to limit undue influence, but money finds ways to flow through the system. Super PACs, dark money groups, and issue advocacy campaigns allow wealthy donors and organizations to spend unlimited amounts on political activities, even if they can't contribute unlimited amounts directly to candidates.
                  </p>
                </div>
              </section>

              {/* What Is Publicly Disclosed */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  What Is Publicly Disclosed
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    Federal law requires lobbyists to register and report their activities, including who they represent and how much they're paid. Campaign contributions must be disclosed, showing who gives money to which candidates. These disclosure requirements provide transparency about who is trying to influence policy and how much they're spending.
                  </p>
                  <p>
                    However, disclosure has limits. Some political spending doesn't require disclosure, particularly through certain nonprofit organizations. The timing of disclosures means information may not be available until after elections. And disclosure alone doesn't prevent influence—it just makes it visible.
                  </p>
                  <p>
                    Citizens can access lobbying and campaign finance data through government websites and watchdog organizations. This transparency allows journalists, researchers, and voters to track money in politics and hold officials accountable for their relationships with donors and lobbyists.
                  </p>
                </div>
              </section>

              {/* Common Misunderstandings About Money and Politics */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Common Misunderstandings About Money and Politics
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    One common misunderstanding is that campaign contributions directly buy votes. In reality, the relationship is more subtle. Contributions buy access and attention, and they help elect candidates who already agree with donors' positions. But officials don't simply vote however their donors tell them to.
                  </p>
                  <p>
                    Another misunderstanding is that all lobbying is corrupt. Much lobbying involves providing information, representing legitimate interests, and participating in democratic processes. The problem isn't lobbying itself, but when some voices are heard much more clearly than others due to resource disparities.
                  </p>
                  <p>
                    Finally, some assume that money determines all political outcomes. In fact, many factors influence policy: public opinion, media coverage, electoral considerations, party loyalty, personal beliefs, and constituent pressure all play roles. Money is influential, but it's not the only factor.
                  </p>
                </div>
              </section>

              {/* Why Money and Influence Matter for America's Future */}
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Why Money and Influence Matter for America's Future
                </h2>
                <div className="space-y-4 text-base text-foreground leading-relaxed">
                  <p>
                    How money flows through the political system affects which problems get attention, which solutions are considered, and which interests are represented in policy decisions. When some voices are heard much more clearly than others, policy may not reflect the broad public interest.
                  </p>
                  <p>
                    This matters for competitiveness because it affects how America addresses long-term challenges. If short-term interests dominate policy discussions, long-term investments in infrastructure, education, and research may be neglected. If narrow interests shape regulation, broader economic efficiency may suffer.
                  </p>
                  <p>
                    Understanding these dynamics doesn't require taking a position on specific reforms. It simply means recognizing that the structure of political influence affects policy outcomes, and those outcomes affect America's ability to compete and prosper in the long term.
                  </p>
                </div>
              </section>

              {/* Key Takeaways */}
              <section className="space-y-4 border-t border-border/50 pt-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Key Takeaways from Module 1
                </h2>
                <ul className="space-y-3 text-base text-foreground leading-relaxed ml-6">
                  <li>Lobbying is a constitutionally protected activity that includes many forms of political participation</li>
                  <li>Policymakers rely on outside groups for information, but resource disparities affect whose voices are heard</li>
                  <li>Campaign contributions buy access and attention, not direct votes, but this access is valuable</li>
                  <li>Disclosure requirements provide transparency, though some political spending remains hidden</li>
                  <li>Understanding money and influence is essential for understanding how policy decisions are made</li>
                </ul>
              </section>

              {/* Next Module Button */}
              <div className="flex justify-center pt-8 border-t border-border/50">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/election-cycles-and-short-term-thinking' })}
                  className="font-normal"
                >
                  Next Module: Election Cycles & Short-Term Thinking
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
