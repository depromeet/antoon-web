import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SessionProvider, useSession } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import themes from '../styles/Theme/themes'
import GlobalStyle from '../styles/GlobalStyle/GlobalStyle'

interface AppPropsWithAuth extends AppProps {
    Component: AppProps['Component'] & { auth: boolean }
}

const queryClient = new QueryClient()

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithAuth) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Depromeet 11th 1team</title>
            </Head>
            <SessionProvider session={session}>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <ThemeProvider theme={themes}>
                            <GlobalStyle />
                            {Component.auth ? (
                                <Auth>
                                    <Component {...pageProps} />
                                </Auth>
                            ) : (
                                <Component {...pageProps} />
                            )}
                        </ThemeProvider>
                    </RecoilRoot>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </SessionProvider>
        </>
    )
}

function Auth({ children }: { children: React.ReactNode & JSX.Element }) {
    const { status } = useSession({ required: true })

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    return children
}

export default MyApp;
