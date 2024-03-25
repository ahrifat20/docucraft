import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/docs-util";

export default function TagsPage({params: {name}}){
  const docs = getDocuments();
  const matchedDocument = getDocumentsByTag(docs, name);

    return (
        <>
          <ContentDisplay id={matchedDocument[0].id} />
        </>
    );
}