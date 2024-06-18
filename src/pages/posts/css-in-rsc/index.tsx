import { NextSeo } from 'next-seo';

import MdxLayout from '@/components/layout/MdxLayout';
import PostMeta from '@/components/shared/PostMeta';
import MdxContent from '@/contents/posts/css-in-rsc/content.mdx';

import PostPageLayout from '../../../components/layout/PostPageLayout';

export default function UiComposition() {
  return (
    <>
      <NextSeo
        description="스타일링 책임이 있는 요소에 과부하가 걸리면 종종 까다로운 UI 상황에 직면하게 됩니다. 책임을 분리하고 개별 컴포넌트를 재구성하면 이 문제를 해결할 수 있습니다."
        title="UI Composition | Justinaus"
      />
      <PostPageLayout>
        <PostMeta>
          <PostMeta.DateText dateStringYYYYMMDD="2024-04-15" />
          <PostMeta.Source
            url="https://joshwcomeau.com/react/css-in-rsc/"
            text="joshwcomeau"
          />
        </PostMeta>
        <MdxLayout>
          <MdxContent />
        </MdxLayout>
      </PostPageLayout>
    </>
  );
}
