import { Button } from './ui/button';
import { useNavigate } from '@tanstack/react-router';

const modules = [
  {
    title: 'Money & Influence',
    description: 'How campaign finance and lobbying shape policy decisions and legislative priorities.',
    path: '/money-and-influence',
  },
  {
    title: 'Election Cycles',
    description: 'The impact of 2-year and 4-year election cycles on long-term planning and policy continuity.',
    path: '/election-cycles-and-short-term-thinking',
  },
  {
    title: 'Partisan Reversals',
    description: 'How policy changes with each administration affect business planning and national strategy.',
    path: '/policy-reversals-and-instability',
  },
  {
    title: 'Lawmaking',
    description: 'The complex process of turning ideas into legislation and the barriers to effective governance.',
    path: '/why-lawmaking-is-slow',
  },
  {
    title: 'Regulatory Complexity',
    description: 'Understanding the layers of federal, state, and local regulations affecting competitiveness.',
    path: null,
  },
  {
    title: 'Nations With Long-Term Strategy',
    description: 'How other countries plan decades ahead while maintaining democratic accountability.',
    path: null,
  },
  {
    title: 'Federal vs. State Fragmentation',
    description: 'The challenges and opportunities of America\'s decentralized governance structure.',
    path: null,
  },
  {
    title: 'Budget Cycles',
    description: 'How annual budget processes affect infrastructure, research, and strategic investments.',
    path: null,
  },
];

export function FrameworkSection() {
  const navigate = useNavigate();

  const handleModuleClick = (path: string | null) => {
    if (path) {
      navigate({ to: path });
    }
  };

  return (
    <section id="framework" className="py-12 md:py-16 border-t border-border/50">
      <div className="document-container">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              The National Understanding Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              Eight essential modules for understanding how American governmental systems work and how they compare to other nations
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {modules.map((module, index) => (
              <div key={index} className="border-l-4 border-primary/30 pl-6 py-2">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {index + 1}. {module.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                  {module.description}
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 h-auto font-normal"
                  onClick={() => handleModuleClick(module.path)}
                  disabled={!module.path}
                >
                  {module.path ? 'Explore Module →' : 'Coming Soon'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
