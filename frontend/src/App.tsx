import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { HomePage } from './pages/HomePage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { MoneyAndInfluencePage } from './pages/MoneyAndInfluencePage';
import { ElectionCyclesPage } from './pages/ElectionCyclesPage';
import { PartisanReversalsPage } from './pages/PartisanReversalsPage';
import { LawmakingPage } from './pages/LawmakingPage';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient();

// Root route component with Outlet for child routes
const RootComponent = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/analytics',
  component: AnalyticsPage,
});

const moneyAndInfluenceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/money-and-influence',
  component: MoneyAndInfluencePage,
});

const electionCyclesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/election-cycles-and-short-term-thinking',
  component: ElectionCyclesPage,
});

const partisanReversalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/policy-reversals-and-instability',
  component: PartisanReversalsPage,
});

const lawmakingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/why-lawmaking-is-slow',
  component: LawmakingPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  analyticsRoute,
  moneyAndInfluenceRoute,
  electionCyclesRoute,
  partisanReversalsRoute,
  lawmakingRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
