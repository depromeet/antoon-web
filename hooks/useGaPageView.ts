import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gaPageView } from '@lib/ga';

export default function useGaPageView() {
  const router = useRouter();

  useEffect(() => {
    const recordPageView = (url: string) => {
      gaPageView(url);
    };

    router.events.on('routeChangeComplete', recordPageView);
    return () => {
      router.events.off('routeChangeComplete', recordPageView);
    };
  }, [router.events]);
}
