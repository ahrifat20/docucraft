import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

export default async function ContentDisplay({ id }) {
  const content = await getDocumentContent(id);

  return (
    <article className="prose dark:prose-invert">
      <h1>{content.title}</h1>
      <div>
        <span>Published On: {content.date}</span> by{" "}
        <Link href={`/authors/${content.author}`} className="hover:underline-offset-0">{content.author}</Link> under
        the{" "}
        <Link href={`/categories/${content.category}`} className="hover:underline-offset-0">{content.category}</Link>{" "}
        category.
      </div>
      <div>
        {content.tags && (
          content.tags.map(tag => <Tag key={tag} tag={tag} />)
        )}
      </div>
      <div className="lead" dangerouslySetInnerHTML={{__html: content.contentHtml}} />
    </article>
  );
}