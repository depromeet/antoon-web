import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

import themes from '../styles/Theme/themes'
import GlobalStyle from '../styles/GlobalStyle/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
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
            <RecoilRoot>
                <ThemeProvider theme={themes}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </RecoilRoot>
        </>
    )
}

export default MyApp
