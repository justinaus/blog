import { Container, Stack } from '@mantine/core';

import PageLayout from './PageLayout';

export default function PostPageLayout({ children }: React.PropsWithChildren) {
  return (
    <PageLayout>
      <Container size={'sm'} pt={'md'} pb={'xl'} px={'xl'}>
        <Stack gap="xxl">{children}</Stack>
      </Container>
    </PageLayout>
  );
}
