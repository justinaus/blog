import MdxLayout from '@/components/layout/MdxLayout';

import PostPageLayout from '../../../components/layout/PostPageLayout';
import MdxContent from './content.mdx';

export default function UiComposition() {
  return (
    <PostPageLayout date="2023-10-03">
      <MdxLayout>
        <MdxContent />
      </MdxLayout>
    </PostPageLayout>
  );
}
