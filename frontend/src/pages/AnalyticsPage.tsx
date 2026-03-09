import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useIsCallerAdmin, useGetAnalyticsData } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Skeleton } from '../components/ui/skeleton';
import { ArrowLeft, BarChart3, Clock, Eye } from 'lucide-react';
import { ConstitutionalPaper } from '../components/ConstitutionalPaper';

export function AnalyticsPage() {
  const navigate = useNavigate();
  const { identity, login, loginStatus } = useInternetIdentity();
  const { data: isAdmin, isLoading: isAdminLoading } = useIsCallerAdmin();
  const { data: analyticsData, isLoading: analyticsLoading } = useGetAnalyticsData();

  useEffect(() => {
    if (!identity && loginStatus !== 'logging-in') {
      login();
    }
  }, [identity, login, loginStatus]);

  if (loginStatus === 'logging-in' || isAdminLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <ConstitutionalPaper>
          <main className="document-container py-24">
            <div className="space-y-8">
              <Skeleton className="h-12 w-64" />
              <div className="grid gap-6 md:grid-cols-3">
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
              </div>
              <Skeleton className="h-96" />
            </div>
          </main>
        </ConstitutionalPaper>
        <Footer />
      </div>
    );
  }

  if (!identity || !isAdmin) {
    return (
      <div className="min-h-screen">
        <Header />
        <ConstitutionalPaper>
          <main className="document-container py-24">
            <div className="text-center space-y-6">
              <h1 className="text-3xl font-serif font-bold text-foreground">Access Denied</h1>
              <p className="text-muted-foreground text-lg">
                You need administrator privileges to view analytics data.
              </p>
              <Button onClick={() => navigate({ to: '/' })} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </div>
          </main>
        </ConstitutionalPaper>
        <Footer />
      </div>
    );
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return minutes > 0 ? `${minutes}m ${secs}s` : `${secs}s`;
  };

  const sectionNames: Record<string, string> = {
    hero: 'Editorial Masthead',
    mission: 'Mission',
    framework: 'Framework',
    'featured-article': 'Featured Article',
    'global-models': 'Global Models',
    'visual-learning': 'Visual Learning',
    'civics-education': 'Civics Education',
    about: 'About',
  };

  const scrollDepthData = analyticsData?.sections.map(([section, data]) => ({
    name: sectionNames[section] || section,
    depth: Number(data.averageScrollDepth),
  })) || [];

  const COLORS = [
    'oklch(var(--chart-1))',
    'oklch(var(--chart-2))',
    'oklch(var(--chart-3))',
    'oklch(var(--chart-4))',
    'oklch(var(--chart-5))',
    'oklch(var(--primary))',
    'oklch(var(--accent))',
    'oklch(var(--secondary))',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ConstitutionalPaper>
        <main className="document-container py-24">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Analytics Dashboard</h1>
                <p className="text-muted-foreground">Track user engagement and site performance</p>
              </div>
              <Button onClick={() => navigate({ to: '/' })} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>

            {analyticsLoading ? (
              <div className="grid gap-6 md:grid-cols-3">
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{Number(analyticsData?.totalPageViews || 0)}</div>
                    <p className="text-xs text-muted-foreground mt-1">Unique sessions tracked</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Time on Page</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {formatDuration(Number(analyticsData?.averageDuration || 0))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Per session</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Duration</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {formatDuration(Number(analyticsData?.totalDuration || 0))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Cumulative time</p>
                  </CardContent>
                </Card>
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Average Scroll Depth by Section</CardTitle>
                <CardDescription>
                  Percentage of content viewed in each section (0-100%)
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analyticsLoading ? (
                  <Skeleton className="h-96 w-full" />
                ) : scrollDepthData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={scrollDepthData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--border))" />
                      <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        stroke="oklch(var(--muted-foreground))"
                      />
                      <YAxis
                        domain={[0, 100]}
                        label={{ value: 'Scroll Depth (%)', angle: -90, position: 'insideLeft' }}
                        stroke="oklch(var(--muted-foreground))"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'oklch(var(--popover))',
                          border: '1px solid oklch(var(--border))',
                          borderRadius: '0.5rem',
                          color: 'oklch(var(--popover-foreground))',
                        }}
                        formatter={(value: number) => [`${value.toFixed(1)}%`, 'Scroll Depth']}
                      />
                      <Bar dataKey="depth" radius={[8, 8, 0, 0]}>
                        {scrollDepthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-96 flex items-center justify-center text-muted-foreground">
                    No data available yet
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </ConstitutionalPaper>
      <Footer />
    </div>
  );
}
