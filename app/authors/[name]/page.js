import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/docs-util";

export default function AuthorPage({params: {name}}) {
  const docs = getDocuments();
  const matchedDocument = getDocumentsByAuthor(docs, name);
    return (
        <>
          <ContentDisplay id={matchedDocument[0].id} />
        </>
    );
}