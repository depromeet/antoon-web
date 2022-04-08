import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SessionProvider, useSession } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import themes from '../styles/Theme/themes'
import GlobalStyle from '../styles/GlobalStyle/GlobalStyle'

function MyApp({ session, Component, pageProps }: AppProps) {
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
            </SessionProvider>
        </>
    )
}

function Auth({ children }) {
    const { status } = useSession({ required: true })

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    return children
}

export default MyApp
