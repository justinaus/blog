import { Stack } from '@mantine/core';

import Article from './Article';

export default function Content() {
  return (
    <Stack gap={'xxl'}>
      <Article
        title="[번역] UI Composition(합성)"
        description="AKA 한 걸음 뒤로 물러서서, 한 걸음 앞으로 나아가기"
        dateStringYYYYMMDD="2023-10-03"
        href={'/posts/ui-composition'}
      />
      <Article
        title="[번역] CSS in React Server Components"
        description="CSS-in-JS와 React의 미래 이해하기"
        dateStringYYYYMMDD="2024-04-15"
        href={'/posts/css-in-rsc'}
      />
    </Stack>
  );
}
