import MdxLayout from '@/components/layout/MdxLayout';
import PostMeta from '@/components/shared/PostMeta';

import PostPageLayout from '../../../components/layout/PostPageLayout';
import MdxContent from './content.mdx';

export default function UiComposition() {
  return (
    <PostPageLayout>
      <PostMeta pt={'md'}>
        <PostMeta.DateText dateStringYYYYMMDD="2023-10-03" />
        <PostMeta.Source url="https://kyleshevlin.com/ui-composition/" />
      </PostMeta>
      <MdxLayout>
        <MdxContent />
      </MdxLayout>
    </PostPageLayout>
  );
}
