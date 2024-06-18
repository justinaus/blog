import { NextSeo } from 'next-seo';

import MdxLayout from '@/components/layout/MdxLayout';
import PostMeta from '@/components/shared/PostMeta';
import MdxContent from '@/contents/posts/ui-composition/content.mdx';

import PostPageLayout from '../../../components/layout/PostPageLayout';

export default function UiComposition() {
  return (
    <>
      <NextSeo
        description="달걀 몇 개를 깨지 않고 오믈렛을 만들 수 없듯이, 핵심 React 팀이 React의 미래에 대한 비전을 공개했을 때 제가 가장 좋아하는 라이브러리 중 몇 가지가 뒤죽박죽이 되었습니다 😅. 이 블로그 포스트에서는 React Server 컴포넌트와 styled-components와 같은 CSS-in-JS 라이브러리 간의 호환성 문제를 살펴보려고 합니다. 문제가 무엇인지, 어떤 옵션이 있는지, 앞으로 어떤 일이 일어날지 이해하게 될 것입니다."
        title="CSS in React Server Components | Justinaus"
      />
      <PostPageLayout>
        <PostMeta>
          <PostMeta.DateText dateStringYYYYMMDD="2023-10-03" />
          <PostMeta.Source
            url="https://kyleshevlin.com/ui-composition/"
            text="kyleshevlin"
          />
        </PostMeta>
        <MdxLayout>
          <MdxContent />
        </MdxLayout>
      </PostPageLayout>
    </>
  );
}
