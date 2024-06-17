import MdxLayout from '@/components/layout/MdxLayout';
import PostMeta from '@/components/shared/PostMeta';

import PostPageLayout from '../../../components/layout/PostPageLayout';
import MdxContent from './content.mdx';

export default function UiComposition() {
  return (
    <PostPageLayout>
      <PostMeta pt={'md'}>
        <PostMeta.DateText dateStringYYYYMMDD="2024-04-15" />
        <PostMeta.Source url="https://joshwcomeau.com/react/css-in-rsc/" />
      </PostMeta>
      <MdxLayout>
        <MdxContent />
      </MdxLayout>
    </PostPageLayout>
  );
}
