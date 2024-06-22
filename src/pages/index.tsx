import { Container } from '@mantine/core';
import { NextSeo } from 'next-seo';

import Content from '@/components/home/Content';
import PageLayout from '@/components/layout/PageLayout';

export default function Home() {
  return (
    <>
      <NextSeo
        description="기술 블로그. 유익한 컨텐츠만 큐레이션."
        title="Home | Justinaus"
      />
      <PageLayout>
        <Container size={'sm'} py={'xxl'} px={'xl'}>
          <Content />
        </Container>
      </PageLayout>
    </>
  );
}
