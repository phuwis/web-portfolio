// /blog/[id]/page.tsx
import { useRouter } from "next/navigation";
import { FC } from "react";

interface BlogPageProps {
  params: { id: string };
}

const BlogDetailPage: FC<BlogPageProps> = ({ params }) => {
  const { id } = params;

  return <h1>Product Details for ID: {id}</h1>;
};

export default BlogDetailPage;
