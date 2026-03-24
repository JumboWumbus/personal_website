import { Separator } from "../ui/separator";
import ArticleCard from "../ArticleCard/ArticleCard";
import { PostMetadata } from "@/utils/types";

interface BlogListProps {
  title: string;
  description: string;
  postList: Array<PostMetadata>;
  sidebar?: boolean;
  // postList: Array<Post>;
}
// Set card height to largest card using auto-rows-fr
export default function BlogList({
  title,
  description,
  postList,
  sidebar = true,
}: BlogListProps) {
  return (
    <div className="page-grid">
      {sidebar && (
        <header
          className="col-span-3 md:col-span-2 row-span-full prose prose-char
          prose-headings:mb-0 lg:prose-xl flex h-full flex-col items-start
          lg:sticky lg:items-start lg:text-left"
        >
          <h1>{title}</h1>
          <p>{description}</p>
          <Separator />
        </header>
      )}

      {!sidebar && (
        <div className="col-span-3 flex justify-between items-end mb-0 md:col-span-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-1 text-muted-foreground justify-self-end">{description}</p>
        </div>
      )}

      <div className={`col-span-3 grid gap-4 ${sidebar ? "md:col-span-6 md:grid-cols-2" : "md:col-span-8 md:grid-cols-2"}`}>
        {postList.map((post, index) => {
          const isLastOdd = postList.length % 2 !== 0 && index === postList.length - 1;

          return (
            <ArticleCard
              key={post.slug}
              post={post}
              className={`row-span-4 grid grid-rows-subgrid${isLastOdd ? " col-span-1 md:col-span-2" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
}
