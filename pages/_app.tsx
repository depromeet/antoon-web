import { useState } from 'react';
import Head from 'next/head';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';

import themes from '@styles/themes/themes';
import GlobalStyle from '@styles/GlobalStyle';
import Layout from '@components/layout/Layout';
import Script from 'next/script';
import ToastList from '@components/toast/ToastList';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps }: any) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>개미는 툰툰</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="개미는 툰툰" />
        <meta property="og:title" content="개미는 툰툰" />
        <meta name="twitter:title" content="개미는 툰툰" />
        <meta
          property="og:description"
          content="독자들의 참여로 이루어지는 웹툰 콘텐츠 추천 및 커뮤니티 서비스"
        />
        <meta
          name="twitter:description"
          content="독자들의 참여로 이루어지는 웹툰 콘텐츠 추천 및 커뮤니티 서비스"
        />
        <meta
          property="og:image"
          content="https://camo.githubusercontent.com/d9f6f82f2ccdd9692d7d2b275a0d35fcd9aba3fefb52777bc0a88baaea670fed/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246466137384f253246627472436a32556f56424f2532465a55486b366b6a4e4146516f613670614f3341476c31253246696d672e706e67"
        />
        <meta
          name="twitter:image"
          content="https://camo.githubusercontent.com/d9f6f82f2ccdd9692d7d2b275a0d35fcd9aba3fefb52777bc0a88baaea670fed/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246466137384f253246627472436a32556f56424f2532465a55486b366b6a4e4146516f613670614f3341476c31253246696d672e706e67"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2991740,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={themes}>
              <GlobalStyle />
              <ToastList />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
