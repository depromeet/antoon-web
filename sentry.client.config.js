import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const ENV = process.env.ENV;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: ENV,
});
