import '@/styles/globals.css';
// core styles are required for all packages
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import AppLayout from '@/components/layout/AppLayout';
import { pretendard } from '@/fonts/pretendard/pretendard';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <AppLayout className={pretendard.className}>
        <Seo />
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  );
}

function Seo() {
  return (
    <DefaultSeo
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ]}
      description="Justinaus Blog"
      title="Justinaus"
    />
  );
}
