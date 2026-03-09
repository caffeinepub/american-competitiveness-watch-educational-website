import { useEffect, useRef, useCallback } from 'react';
import { useRecordPageView, useRecordSectionView } from '../hooks/useQueries';

const SECTIONS = [
  { id: 'hero', selector: '#hero' },
  { id: 'mission', selector: '#mission' },
  { id: 'framework', selector: '#framework' },
  { id: 'featured-article', selector: '#featured-article' },
  { id: 'global-models', selector: '#global-models' },
  { id: 'visual-learning', selector: '#visual-learning' },
  { id: 'civics-education', selector: '#civics-education' },
  { id: 'about', selector: '#about' },
];

export function AnalyticsTracker() {
  const pageViewRecorded = useRef(false);
  const startTime = useRef(Date.now());
  const sectionData = useRef<Record<string, { startTime: number; maxScroll: number; recorded: boolean }>>({});
  const recordPageView = useRecordPageView();
  const recordSectionView = useRecordSectionView();

  // Record page view once per session
  useEffect(() => {
    if (!pageViewRecorded.current) {
      pageViewRecorded.current = true;
    }
  }, []);

  // Track scroll depth for each section
  const handleScroll = useCallback(() => {
    SECTIONS.forEach(({ id, selector }) => {
      const element = document.querySelector(selector);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Initialize section data if not exists
        if (!sectionData.current[id]) {
          sectionData.current[id] = {
            startTime: Date.now(),
            maxScroll: 0,
            recorded: false,
          };
        }

        // Calculate scroll depth percentage
        let scrollDepth = 0;
        if (rect.top >= 0) {
          // Section is partially visible from top
          const visibleHeight = Math.min(elementHeight, viewportHeight - rect.top);
          scrollDepth = (visibleHeight / elementHeight) * 100;
        } else if (rect.bottom <= viewportHeight) {
          // Section is partially visible from bottom
          const visibleHeight = rect.bottom;
          scrollDepth = (visibleHeight / elementHeight) * 100;
        } else {
          // Section fills viewport
          scrollDepth = (viewportHeight / elementHeight) * 100;
        }

        // Update max scroll depth
        sectionData.current[id].maxScroll = Math.max(
          sectionData.current[id].maxScroll,
          Math.min(scrollDepth, 100)
        );
      }
    });
  }, []);

  // Record analytics on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const duration = Math.floor((Date.now() - startTime.current) / 1000);

      // Record page view with duration
      if (pageViewRecorded.current) {
        recordPageView.mutate(duration);
      }

      // Record section views
      Object.entries(sectionData.current).forEach(([section, data]) => {
        if (!data.recorded && data.maxScroll > 0) {
          const sectionDuration = Math.floor((Date.now() - data.startTime) / 1000);
          recordSectionView.mutate({
            section,
            duration: sectionDuration,
            scrollDepth: Math.round(data.maxScroll),
          });
          data.recorded = true;
        }
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, recordPageView, recordSectionView]);

  return null;
}
