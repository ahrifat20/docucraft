import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/docs-util";

export default function CategoriesPage({params: {name}}){
  const docs = getDocuments();
  const matchedDocument = getDocumentsByCategory(docs, name);
    return (
        <>
          <ContentDisplay id={matchedDocument[0].id} />
        </>
    );
}