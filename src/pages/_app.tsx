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
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-icon-76x76.png',
          sizes: '76x76',
        },
        {
          rel: 'icon',
          href: '/icons/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          href: '/icons/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/icons/android-chrome-192x192',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          href: '/icons/android-chrome-512x512',
          sizes: '512x512',
        },
      ]}
      openGraph={{
        type: 'website',
        // images: [
        //   {
        //     width: 1200,
        //     height: 630,
        //   },
        // ],
      }}
      description="Justinaus Blog"
      title="Justinaus"
    />
  );
}
