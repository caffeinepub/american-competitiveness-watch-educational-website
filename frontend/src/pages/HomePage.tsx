import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { FrameworkSection } from '../components/FrameworkSection';
import { FeaturedArticleSection } from '../components/FeaturedArticleSection';
import { GlobalModelsSection } from '../components/GlobalModelsSection';
import { VisualLearningSection } from '../components/VisualLearningSection';
import { CivicsEducationSection } from '../components/CivicsEducationSection';
import { AboutSection } from '../components/AboutSection';
import { EmailSignupSection } from '../components/EmailSignupSection';
import { Footer } from '../components/Footer';
import { AnalyticsTracker } from '../components/AnalyticsTracker';
import { ConstitutionalPaper } from '../components/ConstitutionalPaper';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <AnalyticsTracker />
      <Header />
      <ConstitutionalPaper>
        <main className="pt-8 md:pt-12">
          <HeroSection />
          <MissionSection />
          <FrameworkSection />
          <FeaturedArticleSection />
          <GlobalModelsSection />
          <VisualLearningSection />
          <CivicsEducationSection />
          <AboutSection />
          <EmailSignupSection />
        </main>
      </ConstitutionalPaper>
      <Footer />
    </div>
  );
}
