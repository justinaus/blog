import '@/styles/globals.css';
// core styles are required for all packages
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

import AppLayout from '@/components/layout/AppLayout';
import { pretendard } from '@/fonts/pretendard/pretendard';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <AppLayout className={pretendard.className}>
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  );
}
