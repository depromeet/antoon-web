import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Global, css } from '@emotion/react';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyle from '@styles/globalstyles/GlobalStyle';
import themes from '@styles/themes/themes';

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
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Global styles={css``} />
      <Story />
    </ThemeProvider>
  ),
];
