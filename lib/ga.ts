declare global {
  interface Window {
    gtag: (param1: string, param2: string | undefined, param3: object) => void;
  }
}

export function gaPageView(url: string) {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('config', process.env.NEXT_PUBLIC_GA_KEY, { page_path: url });
}
