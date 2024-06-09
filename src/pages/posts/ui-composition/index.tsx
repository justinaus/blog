import MdxLayout from '@/components/layout/MdxLayout';

import PostPageLayout from '../../../components/layout/PostPageLayout';
import MdxContent from './content.mdx';

export default function UiComposition() {
  return (
    <PostPageLayout>
      <MdxLayout>
        <MdxContent />
      </MdxLayout>
    </PostPageLayout>
  );
}
