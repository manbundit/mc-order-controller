import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/presentation/styles/theme';
import { GlobalStyle } from '../src/presentation/styles/global-style';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'app',
      values: [{ name: 'app', value: '#f4f2ee' }],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div style={{ padding: '24px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
