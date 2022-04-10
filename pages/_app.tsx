import type { AppProps } from 'next/app';
import Head from 'next/head';

import { SessionProvider, useSession } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';

import themes from '@styles/themes/themes';
import GlobalStyle from '@styles/globalstyles/GlobalStyle';
import Layout from '@components/layout/Layout';

// Isssue by react version (18.0.0)
// https://github.com/vercel/next.js/issues/36019
interface AppPropsWithAuth extends AppProps {
  Component: AppProps['Component'] & { auth: boolean };
}

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Depromeet 11th 1team</title>
      </Head>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <ThemeProvider theme={themes}>
              <GlobalStyle />
              {Component.auth ? (
                <Auth>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </Auth>
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </ThemeProvider>
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

function Auth({ children }: { children: React.ReactNode & JSX.Element }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
