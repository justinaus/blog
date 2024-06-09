export default function MdxLayout({ children }: React.PropsWithChildren) {
  // Create any shared layout or styles here
  return <div className="markdown-body">{children}</div>;
}
