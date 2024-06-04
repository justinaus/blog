import PostPageLayout from '../../../components/layout/PostPageLayout';
import MdxContent from './content.mdx';

export default function UiComposition() {
  return (
    <PostPageLayout>
      <div>
        <MdxContent />
      </div>
    </PostPageLayout>
  );
}
