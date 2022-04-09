import { Global, css } from '@emotion/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ThemeProvider } from '@emotion/react'

import { GlobalStyle } from '../styles/GlobalStyle/GlobalStyle'
import themes from '../styles/Theme/themes'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone12',
    },
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={themes}>
            <GlobalStyle />
            <Global styles={css``} />
            <Story />
        </ThemeProvider>
    ),
]
